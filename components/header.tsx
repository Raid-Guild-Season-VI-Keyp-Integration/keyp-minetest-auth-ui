import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useDisclosure, Button, Flex, Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import styles from "./header.module.css";
import { LoginModal } from "./modals/modal";
import { useState } from "react";
import { Icon } from "@iconify/react";
import keypLogo from "../assets/icons/keyp-logo.svg";
import image from "../../assets/images/bg-image.jpg";
import Image from "next/image";
import AuthCodeForm from "./authcode-form";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  // ...

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenAuthCode, onOpen: onOpenAuthCode, onClose: onCloseAuthCode } = useDisclosure();

  return (
    <Box
      as="header"
      display="flex"
      flexFlow="row"
      position="fixed"
      justifyContent="space-between"
      alignItems="center"
      w="full"
      maxW="full"
      h="70px"
      px={5}
      zIndex={20}
    >
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <Box className="logo" flex="0 0 15%" w="15%">
      <ChakraLink href="/">
          Home
          </ChakraLink>
      </Box>
      <Box as="nav" maxW="5xl">
        <ul className={styles.navItems}>
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
      </Box>
      <Box flex="0 0 15%" w="15%" display="flex" alignItems="center" justifyContent="flex-end">
        {/* <div
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        > */}
          {!session && (
            <Flex
              flexFlow="row"
              justifyContent="space-between"
              alignItems="center"
              fontSize="sm"
            >
              <Button onClick={onOpen} size="xs">Sign in</Button>
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
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
        {/* </div> */}
      </Box>
      <LoginModal
        headerText="Welcome to Minetest!"
        isOpen={isOpen}
        onClose={onClose}
      >
        <Text fontSize="md" color="body" textAlign="center">
          Minetest is an open source voxel game engine with easy modding and
          game creation.
        </Text>
        <Button
          display="inline-flex"
          alignItems="center"
          textTransform="uppercase"
          justifyContent="space-between"
          fontWeight={400}
          gap={3}
          onClick={onOpenAuthCode}
        >
          <Icon icon="ic:round-login" width={20} height={20} />
          Login with Keyp
          <Image src={keypLogo} alt="Keyp Logo" width={20} height={20} />
        </Button>
        <Box as="p" color="body" fontSize="sm">
          First time?{" "}
          <Button
            variant="link"
            size="sm"
            color="white"
            textDecoration="underline"
            onClick={onClose}
          >
            Create an account
          </Button>
        </Box>
      </LoginModal>

      <LoginModal
        headerText="Welcome to Minetest!"
        isOpen={isOpenAuthCode}
        onClose={onCloseAuthCode}
      >
        <Text fontSize="md" color="body" textAlign="center">
          Please enter your six character code to login to the game
        </Text>
        <AuthCodeForm />
      </LoginModal>

    </Box>
  );
}
