import { PreviewSuspense } from '@sanity/preview-kit'
import PostPage from 'components/PostPage'
import ProjectPage from 'components/ProjectPage'
import {
  getAllProjectsSlugs,
  getProjectAndMoreProjects,
  getSettings,
} from 'lib/sanity.client'
import { Post, Project, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'


interface PageProps {
  project: Project
  moreProjects: Project[]
  settings?: Settings
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { settings, project, moreProjects, preview, token } = props

  return <ProjectPage project={project} moreProjects={moreProjects} settings={settings} />
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const [settings, { project, moreProjects }] = await Promise.all([
    getSettings(),
    getProjectAndMoreProjects(params.slug, token),
  ])

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
      moreProjects,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllProjectsSlugs()
  return {
    paths: slugs?.map(({ slug }) => `/projects/${slug}`) || [],
    fallback: 'blocking',
  }
}
