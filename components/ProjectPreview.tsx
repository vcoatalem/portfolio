import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Project } from 'lib/sanity.queries'
import Link from 'next/link'

export default function ProjectPreview({
  title,
  coverImage,
  authors,
  intro,
  content,
  gitUrl,
  productionUrl,
  slug,
  tags,
  technos
}: Omit<Project, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/projects/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        {intro}
      </div>
      {authors && (<div className='flex flex-row'>
          {authors.map(author => <Avatar name={author.name} picture={author.picture} />)}
        </div>)
      }
    </div>
  )
}
