/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { sanityClient, urlFor } from '../sanity'
// import { experienceQuery } from './api/getExperience'
// import { pageInfoQuery } from './api/getPageInfo'
// import { projectsQuery } from './api/getProjects'
// import { skillsQuery } from './api/getSkills'
// import { socialsQuery } from './api/getSocials'

import { fetchExperience } from '../utils/fetchExperience'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

// Teste git

const Home: NextPage<Props> = ({ experiences, pageInfo, projects, skills, socials }) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll verflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] overflow-x-hidden' >
      <Head>
        <title>{pageInfo?.name} - Portifolio</title>
      </Head>

      <Header socials={socials} />

      {/* Hero */}
      <section id='hero' className='snap-start' >
        <Hero pageInfo={pageInfo} />
      </section>  

      {/* About */}
      <section id='about' className='snap-center' >
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center' >
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start' >
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start' >
        <Projects projects={projects} />
      </section>

      {/* Contact me */}
       <section id='contact' className='snap-start' >
        <ContactMe />
      </section>

        <footer className='sticky bottom-5 w-full cursor-pointer' >
          <Link href="#hero" >
            <div className='flex items-center justify-center' >
              <img 
                className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
                src={urlFor(pageInfo.profilePic).url()}
                alt="" 
              />
            </div>
          </Link>
        </footer>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperience()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()

  // const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery)
  // const experiences: Experience[] = await sanityClient.fetch(experienceQuery)
  // const projects: Project[] = await sanityClient.fetch(projectsQuery)
  // const skills: Skill[] = await sanityClient.fetch(skillsQuery)
  // const socials: Social[] = await sanityClient.fetch(socialsQuery)

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate: 10 // 10 secs
  }
}