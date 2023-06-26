import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { useDisclosure, Button, Flex, Box } from "@chakra-ui/react"
import styles from "./header.module.css"
import { LoginModal } from "./modals/modal"
import { useState } from "react"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  // ...

  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Box as="header" display="flex" flexFlow="column" position="fixed" justifyContent="center" alignItems="center" w="full" maxW="full" h="20">
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <Box className={styles.signedInStatus} maxW="xl" >
        <div
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <Flex flexFlow="row" justifyContent="space-between" alignItems="center">
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <Button onClick={onOpen} >Sign in with Keyp</Button>
              {/* <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a> */}
            </Flex>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </div>
      </Box>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/client">Client</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/server">Server</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/protected">Protected</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/api-example">API</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/admin">Admin</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/me">Me</Link>
          </li>
        </ul>
      </nav>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
