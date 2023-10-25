'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Book } from '../types'
import DeleteModal from './DeleteModal'

type Props = {
  id: string
}

function DetailItem({ id }: Props): JSX.Element {
  const [specificBook, setSpecificBook] = useState<Book | null>()
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)
  useEffect(() => {
    const allBooks: Book[] = JSON.parse(
      localStorage.getItem('bookList') || '[]',
    )
    const specificBook: Book | undefined = allBooks.find(
      (item) => item.id === id,
    )
    if (specificBook) setSpecificBook(specificBook)
  }, [])
  function handleToggleDeleteModal(): void {
    setIsOpenDeleteModal((prev) => !prev)
  }
  function handleDeleteBook(): void {
    console.log('delete book')
  }
  return (
    <>
      <Link href="/" className="text-red-500">
        {`<  Back`}
      </Link>
      <div className="my-6">
        <h1 className="mb-6 font-bold text-2xl">{specificBook?.name}</h1>
        <p>
          <span className="font-semibold">Author:</span> {specificBook?.author}
        </p>
        <p>
          <span className="font-semibold">Topic:</span> {specificBook?.topic}
        </p>
      </div>
      <button
        className="text-red-500 border-b border-red-400"
        onClick={() => handleToggleDeleteModal()}
      >
        Delete
      </button>
      {isOpenDeleteModal ? (
        <DeleteModal
          handleToggleDelteModal={() => handleToggleDeleteModal()}
          handleDeleteBook={() => handleDeleteBook()}
        />
      ) : null}
    </>
  )
}

export default DetailItem
