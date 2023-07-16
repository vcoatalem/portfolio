import cn from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
  level: 1 | 2
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority, level } = props
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      <Image
        className={`h-auto w-full ${level == 2 ? '' : ''}`}
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
    <div className={`
      sm:mx-0
    `}>
      {slug ? (
        <div className='relative'>
          <Link href={slug} aria-label={title}>
            {image}
            <div className={`
              ${level === 1 ? 'collapse' : ''}
              absolute bottom-0 text-center align-center flex w-full h-full z-50 text-white hover:text-pink-500 align-center backdrop-blur-sm backdrop-grayscale hover:backdrop-grayscale-0 hover:backdrop-blur-md
            `}> 
              <div className='bg-black opacity-30 w-full h-full absolute z-30'/>     
              <h1 className='
                z-50
                opacity-100
                font-extrabold font-mono mx-auto my-auto
                p-8
                inline-flex
                sm:text-3xl
                md:text-3xl
                xl:text-6xl'
              >
                {title}
              </h1>

            </div>
          </Link>
        </div>
      ) : (
        image
      )}
    </div>
  )
}
