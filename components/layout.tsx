import Header from "./header"
import Footer from "./footer"
import type { ReactNode } from "react"
import { Box, Container } from "@chakra-ui/react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Box as="main" pt={20}>
        <Container>
          {children}
          </Container>
      </Box>
      <Footer />
    </>
  )
}
