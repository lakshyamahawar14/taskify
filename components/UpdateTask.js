import UpdateForm from "./UpdateForm"

export default function UpdateTask(props) {
  return (
    <>
    <div id="updatetask">
        <p className="text-2xl m-4 text-center">Update Task</p>
    </div>
    <UpdateForm taskObject={props.taskObject}/>
    </>
  )
}