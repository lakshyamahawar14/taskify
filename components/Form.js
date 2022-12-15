import { useState } from "react"
import Task from "./Task"
import TaskHeading from "./TaskHeading"

export default function Form() {
  const [taskName, setTaskName] = useState("")
  const [completed, setCompleted] = useState(false)
  const [objects, setObjects] = useState([])
 
  const handleAdd = () => {
    setObjects([...objects, {name: taskName, completed: completed, id: Math.floor(Math.random()*1000000)}]);
  }

  const handleTaskNameChange = () => {
    setTaskName(document.getElementById("name").value)
  }

  const handleCompletedChange = () => {
    setCompleted(document.getElementById("completed").checked)
  }

  return (
    <>
    <div id="form" className="flex justify-center">
        <div className="rounded-xl shadow-xl m-4 flex flex-col align-middle min-w-[300px] border-2 w-full max-w-[35vw]">
            <div className="flex justify-between m-4">
                <label htmlFor="taskname">Task Name: </label>
                <textarea id="name" name="name" className="border-2 border-blue-800 rounded-sm p-2 max-w-[500px] min-h-[75px]" value={taskName} onChange={handleTaskNameChange} spellCheck="false" autoComplete="false" placeholder="Enter Task..."></textarea>
            </div>
            <div className="flex justify-start m-4">
                <input type="checkbox" id="completed" name="completed" onChange={handleCompletedChange} checked={completed}></input>
                <labal htmlFor="completed">Completed: </labal>
            </div>
            <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full my-4" onClick={handleAdd}>Add Task</button>
            </div>
        </div>
    </div>
    <TaskHeading />
    {
      objects.map((object, id) => <Task object={object} key={id} />)
    }
    </>
  )
}