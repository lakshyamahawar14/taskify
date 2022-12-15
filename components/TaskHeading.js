export default function TaskHeading(props) {
    const objects = props.objects || [{name: "no tasks to show", completed: true, id:111111}]
    return (
      <>
        <div id="task">
            <p className="text-2xl m-4 text-center">My Tasks</p>
        </div>
      </>
    )
  }