import Link from "next/link"
import styles from "./footer.module.css"
import packageJSON from "../package.json"
import { Box, ListItem, UnorderedList } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box as="footer" className={styles.footer} display="flex" justifyItems="center">
      <hr />
      <UnorderedList className={styles.navItems} maxW="5xl" mx="auto">
        <ListItem className={styles.navItem}>
          <a href="https://next-auth.js.org">Documentation</a>
        </ListItem>
        <ListItem className={styles.navItem}>
          <a href="https://www.npmjs.com/package/next-auth">NPM</a>
        </ListItem>
        <ListItem className={styles.navItem}>
          <a href="https://github.com/nextauthjs/next-auth-example">GitHub</a>
        </ListItem>
        <ListItem className={styles.navItem}>
          <Link href="/policy">Policy</Link>
        </ListItem>
        <ListItem className={styles.navItem}>
          <em>next-auth@{packageJSON.dependencies["next-auth"]}</em>
        </ListItem>
      </UnorderedList>
    </Box>
  )
}
