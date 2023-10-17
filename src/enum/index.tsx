export const NAME_HEADER = {
  label: 'Name',
  value: 'Name',
}
export const AUTHOR_HEADER = {
  label: 'Author',
  value: 'Author',
}
export const TOPIC_HEADER = {
  label: 'Topic',
  value: 'Topic',
}
export const TABLE_HEADER = {
  [NAME_HEADER.label]: NAME_HEADER.value,
  [AUTHOR_HEADER.label]: AUTHOR_HEADER.value,
  [TOPIC_HEADER.label]: TOPIC_HEADER.value,
}

export const DUMMY_DATA = [
  {
    id: idGenerator(),
    [NAME_HEADER.label]: 'Alfreds Futterkiste',
    [AUTHOR_HEADER.label]: 'Maria Anders',
    [TOPIC_HEADER.label]: 'Maria Anders',
  },
  {
    id: idGenerator(),
    [NAME_HEADER.label]: 'Alfreds Futterkiste',
    [AUTHOR_HEADER.label]: 'Maria Anders',
    [TOPIC_HEADER.label]: 'Maria Anders',
  },
  {
    id: idGenerator(),
    [NAME_HEADER.label]: 'Alfreds Futterkiste',
    [AUTHOR_HEADER.label]: 'Maria Anders',
    [TOPIC_HEADER.label]: 'Maria Anders',
  },
  {
    id: idGenerator(),
    [NAME_HEADER.label]: 'Alfreds Futterkiste',
    [AUTHOR_HEADER.label]: 'Maria Anders',
    [TOPIC_HEADER.label]: 'Maria Anders',
  },
]

export function idGenerator(): string {
  const S4 = function (): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
}

export const TOPIC = ['Programming', 'Database', 'DevOps']
