import { useState } from "react"
import axios from "axios"

export default function UpdateForm(props) {
  const [taskName, setTaskName] = useState(props.taskObject.name)
  const [completed, setCompleted] = useState(props.taskObject.completed == 'false' ? false : true)
  const [objects, setObjects] = useState([])
  const [isUpdated, setIsUpdated] = useState(false)

  const updatedformid = `updateform${props.taskObject._id}`
  const updatednameid = `updatedname${props.taskObject._id}`
  const updatedcompletedid = `updatedcompleted${props.taskObject._id}`

  const updateTask = async () => {
    try {
        const res = await axios.patch(`http://localhost:5000/api/v1/tasks/${props.taskObject._id}`, {
        name: taskName,
        completed: completed
        })
        setIsUpdated(true)
    } catch (err) {
        console.log(err)
    }
  }

  const handleUpdate = () => {
    if(taskName.length == 0) return alert('Please fill the task name!')
    setObjects([...objects, {name: taskName, completed: completed}]);
    updateTask();

  }

  const handleTaskNameUpdate = () => {
    setTaskName(document.getElementById(updatednameid).value)
  }

  const handleCompleteUpdate = () => {
    setCompleted(document.getElementById(updatedcompletedid).checked)
  }

  return (
    <>
    <div id={updatedformid} className="flex justify-center">
        <div className="rounded-xl shadow-xl m-4 flex flex-col align-middle min-w-[300px] border-2 w-full max-w-[35vw]">
            <div className="flex justify-between m-4">
                <label htmlFor={updatednameid}>Task Name: </label>
                <textarea id={updatednameid} name="updatedname" className="border-2 border-blue-800 rounded-sm p-2 max-w-[500px] min-h-[75px]" value={taskName} onChange={handleTaskNameUpdate} spellCheck="false" autoComplete="false" placeholder="Enter Task..."></textarea>
            </div>
            <div className="flex justify-start m-4">
                <input type="checkbox" id={updatedcompletedid} name="updatedcompleted" onChange={handleCompleteUpdate} checked={completed}></input>
                <label htmlFor={updatedcompletedid}>Completed: </label>
            </div>
            <div className="flex justify-center">
            <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full my-4" onClick={handleUpdate}>Update Task</button>
            </div>
        </div>
    </div>
    {
        isUpdated && <p className="text-2xl m-4 text-center">Updated Successfully!</p>
    }
    </>
  )
}