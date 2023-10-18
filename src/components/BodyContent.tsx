'use client'

import { useEffect, useState } from 'react'
import SearchAndCreateBook from './SearchAndCreateBook'
import Table from './Table'
import DeleteModal from './DeleteModal'
import CreateModal from './CreateModal'
import { DUMMY_DATA, NAME_HEADER } from '../enum'
import { Book } from '../types'
import Pagination from './Pagination'

function BodyContent(): JSX.Element {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false)
  const [bookList, setBookList] = useState<Book[]>([])
  const [bookDelete, setBookDelete] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  useEffect(() => {
    if (!localStorage.getItem('bookList')) {
      localStorage.setItem('bookList', JSON.stringify(DUMMY_DATA))
    }
    setBookList(JSON.parse(localStorage.getItem('bookList') || '[]'))
  }, [])

  function handleToggleDeleteModal(id: string | null = null): void {
    if (id) {
      setBookDelete(id)
    }
    setIsOpenDeleteModal((prev) => !prev)
  }
  function handleToggleCreateModal(): void {
    setIsOpenCreateModal((prev) => !prev)
  }
  function handleCreateBook(book: Book): void {
    const newBookList: Book[] = [...bookList, book]
    setBookList(newBookList)
    handleToggleCreateModal()
    localStorage.setItem('bookList', JSON.stringify(newBookList))
  }
  function handleDeleteBook(): void {
    const newBookList: Book[] = bookList.filter(
      (book) => book.id !== bookDelete,
    )
    const nextPagination = Math.ceil((bookList.length - 1) / 5)
    if (nextPagination < currentPage) {
      setCurrentPage(nextPagination)
    }
    setBookList(newBookList)
    handleToggleDeleteModal()
    setBookDelete('')
    localStorage.setItem('bookList', JSON.stringify(newBookList))
  }
  function handleSearchBook(searchString: string): void {
    const fullBooks = JSON.parse(localStorage.getItem('bookList') || '[]')
    const newBookList: Book[] = fullBooks.filter((book) =>
      book[NAME_HEADER.label]
        .toLowerCase()
        .includes(searchString.toLocaleLowerCase()),
    )
    setBookList(newBookList)
    setCurrentPage(1)
  }
  function handleChangePage(page: number): void {
    setCurrentPage(page)
  }
  return (
    <>
      <SearchAndCreateBook
        handleToggleCreateModal={() => handleToggleCreateModal()}
        handleSearchBook={(searchString) => handleSearchBook(searchString)}
      />
      <Table
        handleToggleDelteModal={(id) => handleToggleDeleteModal(id)}
        bookList={bookList}
        currentPage={currentPage}
      />
      {Array.isArray(bookList) && bookList.length > 0 ? (
        <Pagination
          bookList={bookList}
          handleChangePage={(page) => handleChangePage(page)}
        />
      ) : null}
      {isOpenDeleteModal ? (
        <DeleteModal
          handleToggleDelteModal={() => handleToggleDeleteModal()}
          handleDeleteBook={() => handleDeleteBook()}
        />
      ) : null}
      {isOpenCreateModal ? (
        <CreateModal
          handleToggleCreateModal={() => handleToggleCreateModal()}
          handleCreateBook={(book) => handleCreateBook(book)}
        />
      ) : null}
    </>
  )
}

export default BodyContent
