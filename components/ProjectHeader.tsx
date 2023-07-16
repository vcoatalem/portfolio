import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Project } from 'lib/sanity.queries'
import { Author } from 'lib/sanity.queries'
import AuthorFlex from './AuthorFlex'
import TagSection from './TagSection'


export default function ProjectHeader(
  props: Pick<Project, 'title' | 'coverImage' | 'authors' | 'slug' | 'intro' | 'tags' | 'technos'>
) {
  const { title, coverImage, authors, intro, slug, tags, technos } = props
  return (
    <>

      <div id='small screen title' className='md:collapse'>
        <PostTitle>{title}</PostTitle>
      </div>

      <div id='large screen title' className='hidden mb-8 md:visible md:flex flex-row flex-wrap'>
        <div className='flex-none'>
          <PostTitle>{title}</PostTitle>
        </div>
        
        <div className='flex flex-row flex-nowrap bg-gray-50 rounded-xl w-full p-16'>
          <TagSection tags={technos.concat(tags)}/>
          <div className='flex-none'>
            <AuthorFlex authors={authors}/>
          </div>
        </div>

      </div>
      



      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} level={1} />
      </div>



      <div id='small screen resume' className='md:hidden  flex flex-row '>
        <p className="text-lg align-center sm:inline-flex">
          {intro}
        </p>

        <div className='pl-8 w-48 flex-none'>
          <div className='flex flex-col flex-wrap bg-gray-50 h-full rounded-xl p-4'>
            <div className='ml-4'>
              <AuthorFlex authors={authors}/>
            </div>
            <hr className="w-full h-1 my-4 border-2 rounded md:my-10"></hr>
            <TagSection tags={technos.concat(tags)}/>
          </div>
        </div>

      </div>

      <div id='large screen resume' className='collapse md:visible items-center'>
        <p className="text-xs md:text-3xl text-center">
          {intro}
        </p>
      </div>

    </>
  )
}
