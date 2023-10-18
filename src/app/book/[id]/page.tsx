import DetailItem from '../../../components/DetailItem'

type Props = {
  params: {
    id: string
  }
}

function DetailBook({ params: { id } }: Props) {
  return <DetailItem id={id} />
}

export default DetailBook
