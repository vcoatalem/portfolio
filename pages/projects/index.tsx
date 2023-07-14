import { PreviewSuspense } from '@sanity/preview-kit'
import ProjectIndexPage from 'components/ProjectIndexPage'
import { getAllProjects, getSettings } from 'lib/sanity.client'
import { Project, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { lazy } from 'react'

/* const PreviewIndexPage = lazy(() => import('components/PreviewIndexPage'))
 */
interface PageProps {
  projects: Project[]
  settings: Settings
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Page(props: PageProps) {
  const { projects, settings, preview, token } = props
  console.log("projects page loaded:", props)
  /* if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <IndexPage loading preview posts={posts} settings={settings} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  } */

  return <ProjectIndexPage projects={projects} settings={settings} />
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, projects = []] = await Promise.all([
    getSettings(),
    getAllProjects(),
  ])

  return {
    props: {
      projects,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}
