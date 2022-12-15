import Header from '../components/Header'
import AddTask from '../components/AddTask'
import Head from 'next/head'
import Task from '../components/Task'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Tasks() {
  const [objects, setObjects] = useState([])
  const getAllTasks = async () => {
    try {
      const res = await axios.get(`http://taskify-one.glitch.me/api/v1/tasks/`);
      setObjects(res.data.tasks)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getAllTasks()
    return () => {
    }
  }, []);
  
  
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
