type Props = {
  handleToggleCreateModal: () => void
}
function SearchAndCreateBook({ handleToggleCreateModal }: Props) {
  return (
    
    <div className="flex justify-between">
      <label htmlFor="search-book">
        <input
          type="text"
          id="search-book"
          placeholder="Search books"
          
          className="border-2 border-zin-300 py-2 px-3 rounded-md"
        />
      </label>
      <button
        onClick={handleToggleCreateModal}
        className="py-2 px-3 bg-[#D2445C] text-white rounded-md"
      >
        Add book
      </button>
    </div>
  )
}

export default SearchAndCreateBook
