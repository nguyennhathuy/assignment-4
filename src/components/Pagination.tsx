import { Book } from '../types'

type Props = {
  bookList: Book[] | []
  handleChangePage: (page: number) => void
}
function Pagination({ bookList = [], handleChangePage }: Props): JSX.Element {
  return (
    <div className="flex justify-end gap-2">
      {(() => {
        const numbers: JSX.Element[] = []
        for (let i = 0; i < Math.ceil(bookList.length / 5); i++) {
          numbers.push(
            <a
              href="/#"
              key={i}
              className="border-2 border-zin-300 py-1 px-2"
              onClick={() => handleChangePage(i + 1)}
            >
              {i + 1}
            </a>,
          )
        }
        return numbers
      })()}
    </div>
  )
}

export default Pagination
