export default function PostSubtitle({ children }) {
  return (
    <h1 className="mb-2 text-slate-500 hover:underline hover:text-pink-500 text-center text-xl leading-tight tracking-tighter md:text-left md:text-2xl md:leading-none lg:text-4xl">
      {children}
    </h1>
  )
}
