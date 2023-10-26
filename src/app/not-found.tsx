import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
      <h1 className="text-8xl font-extrabold">404</h1>
      <p className="my-7 font-bold">Page not found</p>
      <Link
        href="/"
        className="text-[#D2445C] font-semibold"
      >{`< Back to home page`}</Link>
    </div>
  )
}
