import Header from "./header"
import Footer from "./footer"
import type { ReactNode } from "react"
import { Box, Container } from "@chakra-ui/react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Box as="main" display="flex" alignItems="flex-start" pt="100px" height="calc(100vh - 70px)">
        <Container>
          {children}
          </Container>
      </Box>
      <Footer />
    </>
  )
}
