export const TABLE_HEADER = {
  NAME: 'NAME',
  AUTHOR: 'AUTHOR',
  TOPIC: 'TOPIC',
}

export const DUMMY_DATA = [
  {
    id: idGenerator(),
    [TABLE_HEADER.NAME]: 'Alfreds Futterkiste',
    [TABLE_HEADER.AUTHOR]: 'Maria Anders',
    [TABLE_HEADER.TOPIC]: 'Maria Anders',
  },
  {
    id: idGenerator(),
    [TABLE_HEADER.NAME]: 'Alfreds Futterkiste',
    [TABLE_HEADER.AUTHOR]: 'Maria Anders',
    [TABLE_HEADER.TOPIC]: 'Maria Anders',
  },
  {
    id: idGenerator(),
    [TABLE_HEADER.NAME]: 'Alfreds Futterkiste',
    [TABLE_HEADER.AUTHOR]: 'Maria Anders',
    [TABLE_HEADER.TOPIC]: 'Maria Anders',
  },
  {
    id: idGenerator(),
    [TABLE_HEADER.NAME]: 'Alfreds Futterkiste',
    [TABLE_HEADER.AUTHOR]: 'Maria Anders',
    [TABLE_HEADER.TOPIC]: 'Maria Anders',
  },
]

export function idGenerator(): string {
  const S4 = function (): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
}
