import Avatar from 'components/AuthorAvatar'
import { urlForImage } from 'lib/sanity.image'
import { Author } from 'lib/sanity.queries'
import Image from 'next/image'

export default function AuthorFlex(
  props: {
    authors: Author[]
  }) {
    const { authors } = props
    return (
      <div className='relative flex flex-row -space-x-4 h-full'>
          {authors && authors.map((author, idx) => (
            <div key={author.name} className='inline-grid content-center hover:z-50'>
              <Image
                src={
                  author.picture?.asset?._ref
                    ? urlForImage(author.picture).height(96).width(96).fit('crop').url()
                    : 'https://source.unsplash.com/96x96/?face'
                }
                alt={author.name}
                width={52}
                height={52}
                className='rounded-full hover:h-full hover:w-full '
              />

            </div>

          ))}
      </div>
    )
}


//              <Avatar name={author.name} picture={author.picture} />