import Avatar from 'components/AuthorAvatar'
import { urlForImage } from 'lib/sanity.image'
import { Author } from 'lib/sanity.queries'
import Image from 'next/image'

export default function AuthorFlex(
  props: {
    authors: Author[]
    level: 1 | 2
  }) {
    const { authors, level } = props
    return (
      <div className='collapse sm:visible relative flex flex-row -space-x-4 h-full'>
          {authors && authors.map(author => (
            <a href={author.url} key={author.name} className='inline-grid content-center hover:z-50'>
              {
                level == 1 ? (
                  <Image
                    src={
                      author.picture?.asset?._ref
                        ? urlForImage(author.picture).height(96).width(96).fit('crop').url()
                        : 'https://source.unsplash.com/96x96/?face'
                    }
                    alt={author.name}
                    width={52}
                    height={52}
                    className='rounded-full hover:h-full hover:w-full grayscale hover:grayscale-0'
                  />
                ) : (
                  <Image
                    src={
                      author.picture?.asset?._ref
                        ? urlForImage(author.picture).height(208).width(208).fit('crop').url()
                        : 'https://source.unsplash.com/96x96/?face'
                    }
                    alt={author.name}
                    width={104}
                    height={104}
                    className='rounded-full hover:h-full hover:w-full grayscale hover:grayscale-0'
                  />
                )
                
              }
              

            </a>

          ))}
      </div>
    )
}


//              <Avatar name={author.name} picture={author.picture} />