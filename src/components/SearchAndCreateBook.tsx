import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = {
  handleToggleCreateModal: () => void
  handleSearchBook: (searchString: string) => void
}
function SearchAndCreateBook({
  handleToggleCreateModal,
  handleSearchBook,
}: Props): JSX.Element {
  const [searchString, setSearchString] = useState<string>('')
  useEffect(() => {
    handleSearchBook(searchString)
  }, [searchString])
  function handleChangeSearchInput(e): void {
    setSearchString(e.target.value)
  }
  return (
    <div className="flex justify-between">
      <div className="relative">
        <label htmlFor="search-book">
          <input
            type="text"
            id="search-book"
            placeholder="Search books"
            className="border-2 border-zin-300 py-2 pl-[30px] rounded-md"
            value={searchString}
            onChange={handleChangeSearchInput}
          />
          <Image
            src="/search-icon.png"
            className="absolute top-[50%] left-[5px] translate-y-[-50%]"
            alt="Search Icon"
            width={25}
            height={25}
          />
        </label>
      </div>
      <div>
        <button
          onClick={handleToggleCreateModal}
          className="py-2 px-3 bg-[#D2445C] text-white rounded-md"
        >
          Add book
        </button>
      </div>
    </div>
  )
}

export default SearchAndCreateBook
