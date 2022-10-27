import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Project } from '../../typings'

export const projectsQuery = groq`
  *[_type == 'project'] {
    ...,
    technologies[]->
  }
`

type Data = {
  projects: Project[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(projectsQuery)

  res.status(200).json({ projects })
}
