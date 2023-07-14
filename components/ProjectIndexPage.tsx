import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

export interface ProjectIndexPageProps {
  preview?: boolean
  loading?: boolean
  projects: Post[]
  settings: Settings
}

export default function ProjectIndexPageProps(props: ProjectIndexPageProps) {
  const { preview, loading, projects, settings } = props
  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader level={1} />
        </Container>
        <IntroTemplate />
      </Layout>
    </>
  )
}
