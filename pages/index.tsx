import Layout from "../components/layout"
import { Heading, Text } from "@chakra-ui/react"

export default function IndexPage() {
  return (
    <Layout>
      <Heading as="h1">NextAuth.js Example</Heading>
      <Text>
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </Text>
    </Layout>
  )
}
