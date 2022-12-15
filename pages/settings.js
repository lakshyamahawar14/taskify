import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head"
import Setting from "../components/Setting"

export default function Home() {
  return (
    <>
      <Head>
        <title>Settings | Taskify</title>
      </Head>
      <Header/>
      <Setting/>
      <Footer/>
    </>
  )
}
