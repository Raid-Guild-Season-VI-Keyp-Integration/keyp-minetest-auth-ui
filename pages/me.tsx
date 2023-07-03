import { useSession } from "next-auth/react"
import Layout from "../components/layout"

export default function MePage() {
  const {data: session} = useSession()
  console.log({session});

  return (
    <Layout>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </Layout>
  )
}
