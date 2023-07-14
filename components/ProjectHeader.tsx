import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Project } from 'lib/sanity.queries'
import { Author } from 'lib/sanity.queries'
import AuthorFlex from './AuthorFlex'

export default function ProjectHeader(
  props: Pick<Project, 'title' | 'coverImage' | 'authors' | 'slug' | 'intro' | 'tags' | 'technos'>
) {
  const { title, coverImage, authors, intro, slug, tags, technos } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        <AuthorFlex authors={authors}/>
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          <AuthorFlex authors={authors}/>
        </div>
        <div className="mb-6 text-lg">
          {intro}
        </div>
      </div>
    </>
  )
}
