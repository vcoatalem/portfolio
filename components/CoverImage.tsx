import cn from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      <Image
        className="h-auto w-full"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="sm:mx-0 hover:opacity-70">
      {slug ? (
        <div className='relative'>
          <Link href={slug} aria-label={title}>
            {image}
          </Link>

          <div className='absolute bottom-0 text-center w-full z-50 backdrop-blur-md'>            
            <h1 className='font-extrabold text-pink-500 font-mono p-2 mx-auto  
              sm:text-white sm:text-3xl
              md:text-white md:text-3xl
              xl:text-white xl:text-6xl
              '
            >
              {title}
            </h1>
          </div>
          
        </div>
      ) : (
        image
      )}
    </div>
  )
}
