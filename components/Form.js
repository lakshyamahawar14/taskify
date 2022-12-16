import { useState } from "react"
import Task from "./Task"
import axios from "axios"
import TaskHeading from "./TaskHeading"

export default function Form(props) {
  const [taskName, setTaskName] = useState("")
  const [completed, setCompleted] = useState(false)
  const [objects, setObjects] = useState([])

  const nameid = `name1234`;
  const completedid = `completed1234`;

  const createTask = async () => {
    try {
      const res = await axios.post('https://5000-lakshyamaha-taskmanager-84faoyoz8ak.ws-us79.gitpod.io/api/v1/tasks/', {
      name: taskName,
      completed: completed
    })
    setObjects([...objects, {name: taskName, completed: completed}]);
    } catch (err) {
      console.log(err);
    }
  }
 
  const handleAdd = async () => {
    if(taskName.length == 0) return alert('Please fill the task name!')
    await createTask()
  }

  const handleTaskNameChange = () => {
    setTaskName(document.getElementById(nameid).value)
  }

  const handleCompletedChange = () => {
    setCompleted(document.getElementById(completedid).checked)
  }

  return (
    <>
    <div className="flex justify-center">
        <div className="rounded-xl shadow-xl m-4 flex flex-col align-middle min-w-[300px] border-2 w-full max-w-[35vw]">
            <div className="flex justify-between m-4">
                <label htmlFor={nameid}>Task Name: </label>
                <textarea id={nameid} name="name" className="border-2 border-blue-800 rounded-sm p-2 max-w-[500px] min-h-[75px]" value={taskName} onChange={handleTaskNameChange} spellCheck="false" autoComplete="false" placeholder="Enter Task..."></textarea>
            </div>
            <div className="flex justify-start m-4">
                <input type="checkbox" id={completedid} name="completed" onChange={handleCompletedChange} checked={completed}></input>
                <label htmlFor={completedid}>Completed: </label>
            </div>
            <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full my-4" onClick={handleAdd}>Add Task</button>
            </div>
        </div>
    </div>
    <TaskHeading/>
    {
      (objects.length != 0) && <Task objects={objects}/>
    }
    </>
  )
}