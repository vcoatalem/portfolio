import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import MoreFromMe from 'components/contact/MoreFromMe'
import * as demo from 'lib/demo.data'
import ProjectGallery from 'components/ProjectGallery'
import type { Project, Settings } from 'lib/sanity.queries'
import BlogBody from './BlogBody'

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
          <hr className="collapse w-full h-1 my-12 border-2 rounded md:visible"></hr>
          <BlogBody>
            <ProjectGallery projects={projects}/>
          </BlogBody>
        </Container>
        <MoreFromMe />
      </Layout>
    </>
  )
}
