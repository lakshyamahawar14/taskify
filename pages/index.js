import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head"
import Welcome from "../components/Welcome"

export default function Home() {
  return (
    <>
      <Head>
        <title>Taskify</title>
      </Head>
      <Header/>
      <Welcome/>
      <Footer/>
    </>
  )
}
