import Link from 'next/link'
import { TABLE_HEADER, DUMMY_DATA } from '../enum'

function Table() {
  return (
    <div className="mt-5">
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
                  <Link href={`/book/${book.id}`}>Detail</Link>
                </button>
                <button className="py-1 px-2 bg-gray-400 text-white rounded-md">
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
