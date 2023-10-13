function DeleteModal() {
  return (
    <div className="bg-black/50 fixed top-0 left-0 h-screen w-[100%]">
      <div className="bg-white w-[300px] relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4">
        <div className="flex justify-between">
          <span className="font-bold">Delete book</span>
          <img
            className="w-[25px] mix-blend-hard-light cursor-pointer"
            src="/close-icon.png"
            alt="user-logo"
          />
        </div>
        <div className="text-center py-10 flex justify-center">
          <p className="w-[250px]">
            Do you want to delete <strong>Refactoring</strong> book
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button className="py-2 px-6 bg-green-500 text-white rounded-md">
            Delete
          </button>
          <button className="py-2 px-6 bg-gray-400 text-white rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
