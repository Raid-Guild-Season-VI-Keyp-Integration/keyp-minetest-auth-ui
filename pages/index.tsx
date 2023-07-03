import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import { Box, HStack, Heading, Spinner, Text, VStack } from "@chakra-ui/react"
import AuthCode from "../components/authcode"
import { Icon } from "@iconify/react"
import LoginModal from "../components/modals/login-modal"

export default function IndexPage() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <Layout>
      <Heading as="h1">Minetest Authentication</Heading>
      {!session && !loading && (
        <VStack mt={8} gap={6}>
          <Text>Login to get your Minetest authcode</Text>
          <LoginModal btnSize="md" />
        </VStack>
      )}
      {loading && !session && <Box display="flex" justifyContent="center" textAlign="center" mt={6}><Text>Loading</Text> <Spinner size="sm" /></Box>}

      {session && !loading && (
        <VStack mt={6}>
          <Text>Signed in as {session.user.email ?? session.user.username}</Text>
          <Text>Copy the code below and paste into the Minetest login screen</Text>
          {session.user.accessToken && <AuthCode code={session.user.accessToken} />}
        </VStack>
      )}
    </Layout>
  )
}
