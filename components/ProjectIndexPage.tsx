import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import ProjectGallery from 'components/ProjectGallery'
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
          <ProjectGallery projects={projects}/>
        </Container>
        <IntroTemplate />
      </Layout>
    </>
  )
}
