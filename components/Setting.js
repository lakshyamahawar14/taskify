import { useRouter } from "next/router"

export default function Welcome() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/tasks')
  }
  return (
    <>
    <div className="m-4">
        <h1 className="text-3xl font-black m-4 my-8 mx-2 text-center">Coming soon...</h1>
        <h2 className="text-2xl font-black m-4 my-8 mx-2 text-center">Go to the tasks page to track your progress</h2>
        <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full my-4" onClick={handleClick}>Tasks</button>
        </div>
    </div>
    </>
  )
}