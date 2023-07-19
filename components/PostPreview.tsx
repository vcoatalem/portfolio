import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
          level={2}
        />
      </div>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      
      {excerpt && (
        <p className='text-lg md:text-xl lg:text-2xl pr-16 align-center inline-flex'>
          {excerpt}
        </p>
      )}
    </div>
  )
}
