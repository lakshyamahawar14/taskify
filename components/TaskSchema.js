import { useRouter } from "next/router"
import axios from "axios"

export default function TaskSchema(props) {
    const _id = props._id
    const name = props.name
    const completed = props.completed
    const router = useRouter()
    const taskschemaid = `taskschema${_id}`

    const handleUpdate = () => {
        router.push({pathname: '/update', query:{name: name, completed : completed, _id:_id}})
    }

    const deleteTask = async () => {
        try {
            const res = await axios.delete(`https://5000-lakshyamaha-taskmanager-84faoyoz8ak.ws-us79.gitpod.io/api/v1/tasks/${_id}`, {
            })
            document.getElementById(taskschemaid).style.display = 'none';
        } catch (err) {
            console.log(err)
        }
    }

    const handleDelete = async() => {
        await deleteTask()
    }
    return (
      <>
        <div id={taskschemaid} className="flex justify-center">
            <div className="rounded-xl shadow-xl m-4 flex justify-center min-w-[300px] border-2 w-full max-w-[35vw]">
                <p className="p-4 flex self-center w-full">{completed ? <del>{name}</del> : name}</p>
                <div className="flex">
                    <div className="flex justify-center mx-1 relative self-center">
                        <button className="text-sm bg-green-500 hover:bg-green-800 text-white font-bold px-2 py-2 rounded-xl my-4" onClick={handleUpdate}>Update</button>
                    </div>
                    <div className="flex justify-center mx-1 right-0 self-center">
                        <button className="text-sm bg-red-500 hover:bg-red-800 text-white font-bold px-2 py-2 rounded-xl my-4" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }