import styles from "./footer.module.css"
import packageJSON from "../package.json"
import { Box, Divider, ListItem, UnorderedList, Link } from "@chakra-ui/react"
import Image from './CustomImage'
import Icon from './CustomIcon'
import p2pLogo from '../assets/icons/p2pcloud-logo.svg';
import keypLogo from '../assets/icons/keyp-logo-full.svg'

export default function Footer() {
  return (
    <Box as="footer" className={styles.footer} display="flex" flexFlow="column" justifyItems="center" gap={3}>
      <Divider />
      <UnorderedList className={styles.navItems} display="flex" alignItems="center" maxW="5xl" mx="auto" listStyleType="none">
        <ListItem className={styles.navItem}>
        Sponsored by:
          <Link href="https://usekeyp.com/" isExternal display="inline-flex" alignItems="center"><Image src={keypLogo}  maxH={5} w="auto" ml={1} alt="Powerful Web3 Onboarding ‍for Games and Apps" /></Link>
        </ListItem>
        <ListItem className={styles.navItem}>
          <Link href="https://github.com/Raid-Guild-Season-VI-Keyp-Integration/next-auth-example/blob/main/README.md" isExternal><Icon icon="file-icons:readthedocs" mr={1} /> Docs</Link>
        </ListItem>
        <ListItem className={styles.navItem}>
          <Link href="https://github.com/Raid-Guild-Season-VI-Keyp-Integration" isExternal><Icon icon="mdi:github" mr={1} /> GitHub</Link>
        </ListItem>
        <ListItem className={styles.navItem}>
        Hosting by:
          <Link href="https://p2pcloud.io/" isExternal display="inline-flex" alignItems="center"><Image src={p2pLogo}  maxH={5} w="auto" ml={1} alt="Hosting kindly sponsired by P2PCloud: Decentralized, Secure Cloud Computing." /></Link>
        </ListItem>
      </UnorderedList>
    </Box>
  )
}
