import Link from "next/link"

export default function Header() {
  return (
    <>
    <div>
        <ul className="flex justify-between top-0 w-full sticky bg-white">
            <li className="text-[0.8rem] m-4 text-center">
                <Link href="/">🥀Taskify</Link>
            </li>
            <ul className="flex">
                <li className="text-[0.8rem] m-4 hover:text-blue-800 text-center">
                    <Link href="/tasks">📅Tasks</Link>
                </li>
                <li className="text-[0.8rem] m-4 hover:text-blue-800 text-center">
                    <Link href="/settings">🛠Settings</Link>
                </li>
            </ul>
        </ul>
    </div>
    </>
  )
}