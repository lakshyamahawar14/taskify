import TaskSchema from "./TaskSchema"

export default function Task(props) {
    const object = props.object || [{name: "no tasks to show", completed: true, id:111111}]
    return (
      <>
        <TaskSchema id={props.id} name={object.name} completed={object.completed} />
      </>
    )
  }