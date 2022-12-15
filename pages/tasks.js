import Header from '../components/Header'
import AddTask from '../components/AddTask'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tasks | Taskify</title>
      </Head>
      <Header/>
      <AddTask/>
    </>
  )
}
