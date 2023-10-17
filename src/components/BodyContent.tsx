'use client'

import { useState } from 'react'
import SearchAndCreateBook from './SearchAndCreateBook'
import Table from './Table'
import DeleteModal from './DeleteModal'
import CreateModal from './CreateModal'

function BodyContent() {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)

  const handleToggleDeleteModal = function (): void {
    setIsOpenDeleteModal((prev) => !prev)
  }
  const handleToggleCreateModal = function (): void {
    setIsOpenCreateModal((prev) => !prev)
  }

  return (
    <>
      <SearchAndCreateBook
        handleToggleCreateModal={() => handleToggleCreateModal()}
      />
      <Table handleToggleDelteModal={() => handleToggleDeleteModal()} />
      {isOpenDeleteModal ? (
        <DeleteModal handleToggleDelteModal={() => handleToggleDeleteModal()} />
      ) : null}
      {isOpenCreateModal ? (
        <CreateModal
          handleToggleCreateModal={() => handleToggleCreateModal()}
        />
      ) : null}
    </>
  )
}

export default BodyContent
