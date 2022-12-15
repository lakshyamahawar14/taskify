import Header from '../components/Header'
import Head from 'next/head'
import { useRouter } from 'next/router'
import UpdateTask from '../components/UpdateTask'

export default function Update() {
  const router = useRouter()
  const taskObject = router.query
  return (
    <>
      <Head>
        <title>Update | Taskify</title>
      </Head>
      <Header/>
      <UpdateTask taskObject={taskObject}/>
    </>
  )
}
