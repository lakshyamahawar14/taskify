import Header from '../components/Header'
import AddTask from '../components/AddTask'
import Head from 'next/head'
import Task from '../components/Task'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {
  const [objects, setObjects] = useState([])
  const getTasks = async () => {
    const res = await axios.get(`http://localhost:5000/api/v1/tasks/`);
    setObjects(res.data.tasks)
  }
  getTasks()
  return (
    <>
      <Head>
        <title>Tasks | Taskify</title>
      </Head>
      <Header/>
      <AddTask/>
      <Task objects={objects} />
    </>
  )
}
