import Header from "./header"
import Footer from "./footer"
import MetaHead from "./MetaHead"
import type { ReactNode } from "react"
import { Box, Container } from "@chakra-ui/react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <MetaHead />
      <Header />
      <Box as="main" display="flex" alignItems="center" pt="0" width="full" height="calc(100vh - 70px)">
        <Container maxW="5xl" textAlign="center">
          {children}
          </Container>
      </Box>
      <Footer />
    </>
  )
}
