export default function Form() {
  const handleAdd = () => {

  }

  return (
    <>
    <div id="form" className="flex justify-center">
        <div className="rounded-xl shadow-xl m-4 flex flex-col align-middle min-w-[300px] border-2 w-full max-w-[35vw]">
            <div className="flex justify-between m-4">
                <label htmlFor="taskname">Task Name: </label>
                <textarea id="name" name="name" className="border-2 border-blue-800 p-2 max-w-[500px] min-h-[75px]" placeholder="Enter Task..."></textarea>
            </div>
            <div className="flex justify-start m-4">
                <input type="checkbox" id="completed" name="completed" default={false}></input>
                <labal htmlFor="completed">Completed: </labal>
            </div>
            <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full my-4" onClick={handleAdd}>Add Task</button>
            </div>
        </div>
    </div>
    </>
  )
}