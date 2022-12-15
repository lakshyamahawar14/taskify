import TaskHeading from "./TaskHeading"
import TaskSchema from "./TaskSchema"

export default function Task(props) {
    const objects = props.objects || []
    return (
      <>
      {
        objects.slice(0).reverse().map((object, id) => <TaskSchema _id={object._id} name={object.name} completed={object.completed} key={id}/>)
      }
      </>
    )
  }