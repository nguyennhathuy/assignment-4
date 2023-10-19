import Link from 'next/link'
import { DUMMY_DATA, TABLE_HEADER } from '../enum'

type Props = {
  handleToggleDelteModal: () => void
}

function TableItem({ handleToggleDelteModal }: Props): JSX.Element {
  return (
    <>
      {DUMMY_DATA.map((book) => (
        <tr key={book.id}>
          <td className="border-2 border-zin-300 py-1 px-2">
            {book[TABLE_HEADER.NAME]}
          </td>
          <td className="border-2 border-zin-300 py-1 px-2">
            {book[TABLE_HEADER.AUTHOR]}
          </td>
          <td className="border-2 border-zin-300 py-1 px-2">
            {book[TABLE_HEADER.TOPIC]}
          </td>
          <td className="border-2 border-zin-300 py-1 px-2 flex justify-center gap-2">
            <button className="py-1 px-2 bg-green-500 text-white rounded-md">
              <Link href="/book/1">Detail</Link>
            </button>
            <button
              onClick={handleToggleDelteModal}
              className="py-1 px-2 bg-gray-400 text-white rounded-md"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  )
}

export default TableItem
