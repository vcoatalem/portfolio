import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'slug'>
) {
  const { title, coverImage, date, slug } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="text-center text-slate-500 md:text-left md:mb-12 md:block">
        <Date dateString={date} />
      </div>

      <div className="my-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} level={1} />
      </div>


    </>
  )
}
