import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <>
    <div>
        <ul className="flex justify-between bottom-0 fixed w-full">
        <li className="text-[0.8rem] m-4 text-center">
            <p>Made with 🧠 by <span className="text-blue-800">Lakshya Mahawar</span></p>
        </li>
        <li className="text-[0.8rem] m-4 hover:text-blue-800 text-center flex items-center">
                <Image src="/images/github.svg" alt="github icon" width={16} height={16} />
                <Link href="https://github.com/lakshyamahawar14/" target={'_blank'}>Github</Link>
        </li>
        </ul>
    </div>
    </>
  )
}