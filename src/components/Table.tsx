import { TABLE_HEADER } from '../enum'
import TableItem from './TableItem'

type Props = {
  handleToggleDelteModal: () => void
}

function Table({ handleToggleDelteModal }: Props) {
  
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
          <TableItem handleToggleDelteModal={handleToggleDelteModal} />
        </tbody>
      </table>
    </div>
  )
}
export default Table
