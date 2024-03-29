import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import MoreStories from 'components/MoreStories'
import MarkdownBody from 'components/MarkdownBody'
import ProjectHeader from './ProjectHeader'
import ProjectPageHead from './ProjectPageHead'
import PostTitle from 'components/PostTitle'
import SectionSeparator from 'components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Post, Project, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'
import MoreFromMe from 'components/contact/MoreFromMe'
import MoreProjects from './MoreProjects'
import BlogBody from './BlogBody'


export interface ProjectPageProps {
  preview?: boolean
  loading?: boolean
  project: Project
  moreProjects: Project[]
  settings: Settings
}

const NO_POSTS: Project[] = []

export default function ProjectPage(props: ProjectPageProps) {
  const { preview, loading, moreProjects = NO_POSTS, project, settings } = props
  const { title = demo.title } = settings || {}

  const slug = project?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <ProjectPageHead settings={settings} project={project} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader level={2} />
          <BlogBody>
            {preview && !project ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <>
                <ProjectHeader
                  title={project.title}
                  coverImage={project.coverImage}
                  authors={project.authors}
                  excerpt={project.excerpt}
                  slug={project.slug}
                  tags={project.tags}
                  technos={project.technos}
                  gitUrl={project.gitUrl}
                  productionUrl={project.productionUrl}
                />
                <SectionSeparator />



                <MarkdownBody
                  content={project.content}
                />
              </>
            )}
          </BlogBody>
          <MoreProjects
            projects={moreProjects}
          />
        </Container>
        <MoreFromMe />
      </Layout>
    </>
  )
}
