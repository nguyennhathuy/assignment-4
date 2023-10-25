import { idGenerator } from './util'

export const NAME_HEADER = {
  label: 'name',
  value: 'name',
}

export const AUTHOR_HEADER = {
  label: 'author',
  value: 'author',
}
export const TOPIC_HEADER = {
  label: 'topic',
  value: 'topic',
}
export const TABLE_HEADER = {
  [NAME_HEADER.label]: NAME_HEADER.value,
  [AUTHOR_HEADER.label]: AUTHOR_HEADER.value,
  [TOPIC_HEADER.label]: TOPIC_HEADER.value,
}

export const DUMMY_DATA = [
  {
    id: idGenerator(),
    name: 'Refactoring',
    author: 'Martin Fowler',
    topic: 'Programming',
  },
  {
    id: idGenerator(),
    name: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    topic: 'Database',
  },
  {
    id: idGenerator(),
    name: 'The Phoenix Project',
    author: 'Gene Kim',
    topic: 'DevOps',
  },
  {
    id: idGenerator(),
    name: 'Effective Java',
    author: 'Joshua Bloch',
    topic: 'Java Programming',
  },
  {
    id: idGenerator(),
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    topic: 'Literature',
  },
  {
    id: idGenerator(),
    name: '1984',
    author: 'George Orwell',
    topic: 'Science Fiction',
  },
  {
    id: idGenerator(),
    name: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    topic: 'Literature',
  },
  {
    id: idGenerator(),
    name: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    topic: 'Literature',
  },
  {
    id: idGenerator(),
    name: 'Brave New World',
    author: 'Aldous Huxley',
    topic: 'Science Fiction',
  },
  {
    id: idGenerator(),
    name: 'Pride and Prejudice',
    author: 'Jane Austen',
    topic: 'Literature',
  },
  {
    id: idGenerator(),
    name: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    topic: 'Literature',
  },
  {
    id: idGenerator(),
    name: 'To the Lighthouse',
    author: 'Virginia Woolf',
    topic: 'Literature',
  },
  {
    id: idGenerator(),
    name: 'War and Peace',
    author: 'Leo Tolstoy',
    topic: 'Literature',
  },
  {
    id: idGenerator(),
    name: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    topic: 'Literature',
  },
  {
    id: idGenerator(),
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    topic: 'Fantasy',
  },
  {
    id: idGenerator(),
    name: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    topic: 'Fantasy',
  },
  {
    id: idGenerator(),
    name: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    topic: 'Literature',
  },
  {
    id: idGenerator(),
    name: 'Pride and Prejudice',
    author: 'Jane Austen',
    topic: 'Literature',
  },
  {
    id: idGenerator(),
    name: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    topic: 'Literature',
  },
  {
    id: idGenerator(),
    name: 'Carrie',
    author: 'Stephen King',
    topic: 'Horror',
  },
  {
    id: idGenerator(),
    name: 'The Da Vinci Code',
    author: 'Dan Brown',
    topic: 'Mystery',
  },
  {
    id: idGenerator(),
    name: 'Angels & Demons',
    author: 'Dan Brown',
    topic: 'Mystery',
  },
  {
    id: idGenerator(),
    name: '1984',
    author: 'George Orwell',
    topic: 'Science Fiction',
  },
  {
    id: idGenerator(),
    name: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    topic: 'Fantasy',
  },
  {
    id: idGenerator(),
    name: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    topic: 'Fantasy',
  },
  {
    id: idGenerator(),
    name: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
    topic: 'Fantasy',
  },
  {
    id: idGenerator(),
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
    topic: 'Adventure',
  },
  {
    id: idGenerator(),
    name: 'Catching Fire',
    author: 'Suzanne Collins',
    topic: 'Adventure',
  },
]

export const TOPIC = ['Programming', 'Database', 'DevOps']
