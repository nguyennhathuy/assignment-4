'use client'

import Link from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Book } from '../types'

function Header(): JSX.Element {
  const pathName = usePathname()
  const segments = useSelectedLayoutSegments()
  const [title, setTitle] = useState<string>('')
  useEffect(() => {
    const [book, id] = segments
    if (!book) {
      setTitle('Bookstore')
    } else if (book && id) {
      const allBooks: Book[] = JSON.parse(
        localStorage.getItem('bookList') || '[]',
      )
      const specificBook: Book | undefined = allBooks.find(
        (item) => item.id === id,
      )
      if (specificBook) {
        setTitle('Book detail')
      } else {
        setTitle('404')
      }
    } else {
      setTitle('404')
    }
  }, [pathName, segments])
  return (
    <>
      <div className="h-6">
        <span>{title}</span>
      </div>
      <div className="border-2 border-zinc-300 flex justify-between items-center bg-white p-2">
        <div>
          <h1 className="text-3xl font-bold">
            <Link href="/">Bookstore</Link>
          </h1>
        </div>
        <div className="flex gap-7">
          <div>
            <label htmlFor="select-mode" className="mr-2 flex items-center">
              <input
                type="checkbox"
                id="select-mode"
                className="
                  relative
                  appearance-none 
                  w-[40px] 
                  h-[20px] 
                  bg-[#C5D0DA] 
                  rounded-[10px] 
                  mr-[5px] 
                  cursor-pointer
                  checked:bg-[#D2445C]
                  transition-all
                  before:absolute
                  before:content-['']
                  before:w-5
                  before:h-5
                  before:rounded-full
                  before:bg-white
                  before:scale-90
                  before:top-0
                  before:left-0
                  before:transition-all
                  before:checked:left-[20px]
                "
              />
              <span>Dark mode</span>
            </label>
          </div>
          <div className="flex gap-2">
            <img
              className="w-[25px] mix-blend-hard-light"
              src="/user-logo.png"
              alt="user-logo"
            />
            <span>John Doe</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
