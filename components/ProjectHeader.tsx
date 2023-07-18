import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import PostSubtitle from './PostSubtitle'
import type { Project } from 'lib/sanity.queries'
import { Author } from 'lib/sanity.queries'
import AuthorFlex from './AuthorFlex'
import TagSection from './TagSection'



function IconGithub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function IconMonitor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 3 H20 A2 2 0 0 1 22 5 V15 A2 2 0 0 1 20 17 H4 A2 2 0 0 1 2 15 V5 A2 2 0 0 1 4 3 z" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

interface LinkButtonProps {
  href: string
  type: 'git' | 'prod'
}

function ExternalRessourceLink(props: LinkButtonProps) {
  const { href, type } = props
  return (
    <div className='p-3'>
       <a href={href} className='
          inline-flex items-center font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
          px-4 py-2.5 text-sm
          md:px-6 md:py-3 md:text-xl
          lg:px-8 lg:py-5 lg:text-3xl
        
        '>
        {type === 'git' && <IconGithub className='mx-2'/>}
        {type === 'prod' && <IconMonitor className='mx-2'/>}
        {type === 'git' && <p>code</p>}
        {type === 'prod' && <p>demo</p>}
      </a>
    </div>
    )
}

export default function ProjectHeader(
  props: Pick<Project, 'title' | 'coverImage' | 'authors' | 'slug' | 'excerpt' | 'tags' | 'technos' | 'gitUrl' | 'productionUrl'>
) {
  const { title, coverImage, authors, excerpt, slug, tags, technos, gitUrl, productionUrl } = props
  return (
    <>

      <div id='small screen title' className='md:hidden'>
        <PostTitle>{title}</PostTitle>
      </div>

      <div id='large screen title' className='hidden mb-8 md:flex flex-col flex-wrap'>
        <div className='flex-none'>
          <div className='flex flex-row content-center items-center w-full mb-6'>
            <PostTitle>{title}</PostTitle>
            <div className='ml-auto flex flex-row items-center'>
              {
                [gitUrl, productionUrl].filter(url => url).map(
                  (url, idx) => (
                    <div className='mx-auto' key={idx}>
                      <ExternalRessourceLink href={url} type={idx == 0 ? 'git' : 'prod'}/>
                    </div>
                  )
                )
              }
            </div>
            
          </div>
         
        </div>
        
        <div className='flex flex-row flex-nowrap bg-gray-50 rounded-xl w-full p-16'>
          <TagSection tags={technos.concat(tags)}/>
          <div className='flex-none ml-auto h-32'>
            <AuthorFlex level={2} authors={authors}/>
          </div>
        </div>

      </div>
      

      <div id='cover image' className="sm:mx-0">
        <CoverImage title={title} image={coverImage} priority slug={slug} level={1} />
      </div>

      <div id='small screen resume' className='md:hidden pt-8 flex flex-row '>
        
        
        <div className='flex flex-col '>
          <p className="text-lg align-center sm:inline-flex items-center">
            {excerpt}
          </p>
          <hr className="w-full h-1 my-4 border-2 rounded md:my-10"></hr>
            <div id='small screen external links under image' className='flex flex-row flex-wrap md:collapse'>
              {
                [gitUrl, productionUrl].filter(url => url).map(
                  (url, idx) => (
                    <div key={idx} className='mx-auto'>
                      <ExternalRessourceLink href={url} type={idx == 0 ? 'git' : 'prod'}/>
                    </div>
                  )
                )
              }

            </div>
        </div>


        <div className='pl-8 w-48 flex-none hidden sm:block'>
          <div className='flex flex-col flex-wrap bg-gray-50 h-full rounded-xl p-4'>
            <div className='ml-4 h-16'>
              <AuthorFlex level={1} authors={authors}/>
            </div>
            <hr className="w-full h-1 my-4 border-2 rounded md:my-10"></hr>
            <TagSection tags={technos.concat(tags)}/>
          </div>
        </div>

      </div>

      <div id='large screen resume' className='collapse md:visible items-center py-8'>
        <p className="text-xs md:text-3xl text-center">
          {excerpt}
        </p>
      </div>

    </>
  )
}
