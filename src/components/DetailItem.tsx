import { useEffect } from "react"

type Props = {
  id: string
}

function DetailItem({ id }: Props): JSX.Element {
  return <h1>{id}</h1>
}

export default DetailItem
