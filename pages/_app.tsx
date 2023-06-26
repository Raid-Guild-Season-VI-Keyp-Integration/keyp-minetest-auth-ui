import { SessionProvider } from "next-auth/react"
import { ChakraProvider } from '@chakra-ui/react'
import "./styles.css"
import { extendTheme } from '@chakra-ui/react'
import type { AppProps } from "next/app"
import type { Session } from "next-auth"
import '@fontsource/courier-prime'



const fonts = {
  heading: 'Courier Prime, monospace',
  body: 'Inter, sans-serif',
  sans: 'Inter, sans-serif',
}

const colors = {
  brand: {
    50: '#f5f5f5',
    100: '#ebebeb',
    200: '#d0d0d0',
    300: '#b5b5b5',
  },
  heading: '#E3E3E3',
  body: '#BABABA',
  buttonText: '#2D2D2D',
}

export const theme = extendTheme({ colors, fonts })

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}
