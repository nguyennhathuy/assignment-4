import { TABLE_HEADER } from '../enum'

function CreateModal() {
  return (
    <div className="bg-black/50 fixed top-0 left-0 h-screen w-[100%]">
      <div className="bg-white w-[300px] relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4">
        <div className="flex justify-between">
          <span className="font-bold">Add book</span>
          <img
            className="w-[25px] mix-blend-hard-light cursor-pointer"
            src="/close-icon.png"
            alt="user-logo"
          />
        </div>
        <div className="flex flex-col my-5">
          {Object.keys(TABLE_HEADER).map((item, index) => (
            <label
              key={index}
              htmlFor={item.toLocaleLowerCase()}
              className="flex flex-col items-start"
            >
              <span className="font-semibold">
                {`${item[0].toUpperCase()}${item.slice(1).toLocaleLowerCase()}`}
              </span>
              {item !== TABLE_HEADER.TOPIC ? (
                <input
                  id={item.toLocaleLowerCase()}
                  type="text"
                  className="border-2 border-zin-300 rounded-md w-full"
                />
                
              ) : (
                <select
                  id="topic"
                  className="border-2 border-zin-300 rounded-md w-full"
                >
                  <option value="" disabled selected hidden>
                    Select a topic
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              )}
            </label>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <button className="py-2 px-6 bg-green-500 text-white rounded-md">
            Create
          </button>
          <button className="py-2 px-6 bg-gray-400 text-white rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateModal
