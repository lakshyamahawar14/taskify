export default function TaskSchema(props) {
    const id = props.id
    const name = props.name
    const completed = props.completed

    const handleUpdate = () => {

    }

    const handleDelete = () => {

    }
    return (
      <>
        <div id="taskschema" className="flex justify-center">
            <div className="rounded-xl shadow-xl m-4 flex justify-center min-w-[300px] border-2 w-full max-w-[35vw]">
                <p className="p-4"> {name}</p>
                <div className="flex">
                    <div id="update" className="flex justify-center mx-4 relative self-center">
                        <button className="text-sm bg-green-500 hover:bg-green-800 text-white font-bold px-2 py-2 rounded-xl my-4" onClick={handleUpdate}>Update</button>
                    </div>
                    <div id="delete" className="flex justify-center mx-4 relative self-center">
                        <button className="text-sm bg-red-500 hover:bg-red-800 text-white font-bold px-2 py-2 rounded-xl my-4" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }