import Avatar from 'components/AuthorAvatar'
import { Author } from 'lib/sanity.queries'

export default function AuthorFlex(
  props: {
    authors: Author[]
  }) {
    const { authors } = props
    return (
      <div className='flex flex-row'>
          {authors && authors.length > 1 && authors.map(author => (
            <div key={author.name} className='mx-auto'>
              <Avatar name={author.name} picture={author.picture} />
            </div>

          ))}
      </div>
    )
}
