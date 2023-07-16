

export default function TagSection(
  props: {
    tags: string[]
  }) {

    const { tags } = props

    return (
      <div className="flex flex-wrap">
        {tags.map((tag,idx) => (
          <div key={`tag-${idx}`}
            className='ml-4 font-mono inline-flex items-center font-bold leading-sm uppercase px-3 py-1 hover:underline
              text-black hover:text-pink-500
              text-xs
              md:text-xl
              lg:text-3xl 
            '
          >
            {tag}
          </div>
        ))}
      </div>
    )

}