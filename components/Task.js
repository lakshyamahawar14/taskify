import TaskSchema from './TaskSchema'

export default function Task() {
    return (
      <>
        <div id="task">
            <p className="text-2xl m-4 text-center">My Tasks</p>
        </div>
        <TaskSchema/>
      </>
    )
  }