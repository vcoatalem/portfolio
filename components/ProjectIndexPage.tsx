import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import ProjectsGallery from 'components/ProjectsGallery'
import type { Project, Settings } from 'lib/sanity.queries'

export interface ProjectIndexPageProps {
  preview?: boolean
  loading?: boolean
  projects: Project[]
  settings: Settings
}

export default function ProjectIndexPageProps(props: ProjectIndexPageProps) {
  const { preview, loading, projects, settings } = props
  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader level={1} />
          <ProjectsGallery projects={projects}/>
        </Container>
        <IntroTemplate />
      </Layout>
    </>
  )
}
