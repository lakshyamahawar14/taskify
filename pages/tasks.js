import Header from '../components/Header'
import AddTask from '../components/AddTask'
import Task from '../components/Task'
import Head from 'next/head'
import TaskHeading from '../components/TaskHeading'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tasks | Taskify</title>
      </Head>
      <Header/>
      <AddTask/>
      <TaskHeading/>
    </>
  )
}
