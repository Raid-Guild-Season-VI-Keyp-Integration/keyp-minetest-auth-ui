import styles from "./footer.module.css"
import packageJSON from "../package.json"
import { Box, Divider, ListItem, UnorderedList, Link } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box as="footer" className={styles.footer} display="flex" flexFlow="column" justifyItems="center" gap={3}>
      <Divider />
      <UnorderedList className={styles.navItems} maxW="5xl" mx="auto" listStyleType="none">
        <ListItem className={styles.navItem}>
          <Link href="https://github.com/Raid-Guild-Season-VI-Keyp-Integration/next-auth-example/blob/main/README.md" isExternal>Documentation</Link>
        </ListItem>
        <ListItem className={styles.navItem}>
          <Link href="https://github.com/Raid-Guild-Season-VI-Keyp-Integration" isExternal>GitHub</Link>
        </ListItem>
        <ListItem className={styles.navItem}>
          <em>next-auth@{packageJSON.dependencies["next-auth"]}</em>
        </ListItem>
      </UnorderedList>
    </Box>
  )
}
