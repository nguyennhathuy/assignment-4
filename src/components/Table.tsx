import Link from 'next/link'
import { TABLE_HEADER, NAME_HEADER, AUTHOR_HEADER, TOPIC_HEADER } from '../enum'
import { Book } from '../types'

type Props = {
  handleToggleDelteModal: (id: string | null) => void
  bookList: Book[]
  currentPage: number
}

function Table({
  handleToggleDelteModal,
  bookList,
  currentPage,
}: Props): JSX.Element {
  return (
    <div className="my-5">
      <table className="table-fixed w-[100%] border-collapse">
        <thead>
          <tr>
            {Object.keys(TABLE_HEADER).map((item, index) => (
              <th key={index} className="border-2 border-zin-300 py-1 px-2">
                {TABLE_HEADER[item]}
              </th>
            ))}
            <th className="border-2 border-zin-300 py-1 px-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookList
            .slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5)
            .map((book) => (
              <tr key={book.id}>
                <td className="border-2 border-zin-300 py-1 px-2">
                  {book[NAME_HEADER.label]}
                </td>
                <td className="border-2 border-zin-300 py-1 px-2">
                  {book[AUTHOR_HEADER.label]}
                </td>
                <td className="border-2 border-zin-300 py-1 px-2">
                  {book[TOPIC_HEADER.label]}
                </td>
                <td className="border-2 border-zin-300 py-1 px-2 text-center">
                  <button className="py-1 px-2 bg-green-500 text-white rounded-md mr-2">
                    <Link href={`/book/${book.id}`}>Detail</Link>
                  </button>
                  <button
                    className="py-1 px-2 bg-gray-400 text-white rounded-md"
                    onClick={() => handleToggleDelteModal(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
export default Table
