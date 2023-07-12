import styles from "./footer.module.css"
import packageJSON from "../package.json"
import { Box, Divider, ListItem, UnorderedList, Link, Tooltip } from "@chakra-ui/react"
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
          {/* Sponsored by: */}
          <Tooltip
            label="Authentication by Keyp"
            bg="blue.600"
            rounded={3}
            hasArrow
            >
            <Link href="https://usekeyp.com/" isExternal display="inline-flex" alignItems="center"><Image src={keypLogo} maxH={5} w="auto" ml={1} alt="Powerful Web3 Onboarding ‍for Games and Apps" /></Link>
            </Tooltip>
        </ListItem>
        <ListItem className={styles.navItem}>
          <Link href="https://github.com/Raid-Guild-Season-VI-Keyp-Integration/keyp-minetest-auth-ui/blob/main/README.md" isExternal><Icon icon="file-icons:readthedocs" mr={1} /> Docs</Link>
        </ListItem>
        <ListItem className={styles.navItem}>
          <Link href="https://github.com/Raid-Guild-Season-VI-Keyp-Integration" isExternal><Icon icon="mdi:github" mr={1} /> GitHub</Link>
        </ListItem>
        <ListItem className={styles.navItem}>
          {/* Hosting by: */}
          <Tooltip
            label="Decentralized Hosting by P2PCloud"
            textAlign="center"
            bg="blue.600"
            rounded={3}
            hasArrow
          >
            <Link href="https://p2pcloud.io/" isExternal display="inline-flex" alignItems="center"><Image src={p2pLogo} maxH={5} w="auto" ml={1} alt="Hosting kindly sponsired by P2PCloud: Decentralized, Secure Cloud Computing." /></Link>
            </Tooltip>
        </ListItem>
      </UnorderedList>
    </Box>
  )
}
