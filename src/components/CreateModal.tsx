import { useState } from 'react'
import Image from 'next/image'
import {
  AUTHOR_HEADER,
  NAME_HEADER,
  TABLE_HEADER,
  TOPIC,
  TOPIC_HEADER,
} from '../enum'
import { Book } from '../types'
import { idGenerator } from '../enum/util'

type Props = {
  handleToggleCreateModal: () => void
  handleCreateBook: (book: Book) => void
}

function CreateModal({
  handleToggleCreateModal,
  handleCreateBook,
}: Props): JSX.Element {
  const [name, setName] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [topic, setTopic] = useState<string>('')
  function handleChangeData(e): void {
    switch (e.target.name) {
      case NAME_HEADER.label:
        setName(e.target.value)
        break
      case AUTHOR_HEADER.label:
        setAuthor(e.target.value)
        break
      case TOPIC_HEADER.label:
        setTopic(e.target.value)
        break
      default:
        break
    }
  }
  function handleSubmit(e): void {
    e.preventDefault()
    const newBook: Book = {
      id: idGenerator(),
      name,
      author,
      topic,
    }
    handleCreateBook(newBook)
    setName('')
    setAuthor('')
    setTopic('')
  }
  return (
    <div className="bg-black/50 fixed top-0 left-0 h-screen w-[100%]">
      <div className="bg-white w-[300px] relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4">
        <div className="flex justify-between">
          <span className="font-bold">Add book</span>
          <Image
            className="mix-blend-hard-light cursor-pointer"
            src="/close-icon.png"
            alt="user-logo"
            width={25}
            height={25}
            onClick={handleToggleCreateModal}
          />
        </div>
        <div className="flex flex-col my-5">
          <form onSubmit={handleSubmit} id="myform">
            {Object.keys(TABLE_HEADER).map((item, index) => (
              <label
                key={index}
                htmlFor={item.toLocaleLowerCase()}
                className="flex flex-col items-start mb-2"
              >
                <span className="font-semibold">
                  {`${item[0].toUpperCase()}${item
                    .slice(1)
                    .toLocaleLowerCase()}`}
                </span>
                {item !== TOPIC_HEADER.label ? (
                  <input
                    id={item.toLocaleLowerCase()}
                    type="text"
                    className="border-2 border-zin-300 rounded-md w-full pl-2"
                    name={item === NAME_HEADER.label ? 'name' : 'author'}
                    value={item === NAME_HEADER.label ? name : author}
                    onChange={handleChangeData}
                    required
                  />
                ) : (
                  <select
                    id="topic"
                    className="border-2 border-zin-300 rounded-md w-full pl-2"
                    value={topic}
                    name="topic"
                    onChange={handleChangeData}
                    required
                  >
                    <option value="" disabled hidden>
                      Select a topic
                    </option>
                    {TOPIC.map((topic, index) => (
                      <option key={index} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                )}
              </label>
            ))}
          </form>
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="py-2 px-6 bg-green-500 text-white rounded-md"
            type="submit"
            form="myform"
          >
            Create
          </button>
          <button
            className="py-2 px-6 bg-gray-400 text-white rounded-md"
            onClick={handleToggleCreateModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateModal
