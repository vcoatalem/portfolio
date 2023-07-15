import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Project } from 'lib/sanity.queries'
import Link from 'next/link'
import AuthorFlex from './AuthorFlex'

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

      <div className='flex flex-row '>

        <div className="text-lg pr-16">
          {intro}
        </div>

        <div className='ml-auto h-16 flex-none'>
          <AuthorFlex authors={authors}/>
        </div>

      </div>
      
 
    </div>
  )
}
