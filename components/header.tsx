import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  useDisclosure,
  Button,
  Flex,
  Box,
  Text,
  Link as ChakraLink,
  HStack,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import styles from "./header.module.css";
import { LoginModal } from "./modals/modal";
import { useState } from "react";
import { Icon } from "@iconify/react";
import keypLogo from "../assets/icons/keyp-logo.svg";
import image from "../../assets/images/bg-image.jpg";
import Image from "next/image";
import AuthCode from "./authcode";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { mainMenuItems } from "../utils/constants";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

export const NavLink = ({ children, href }: NavLinkProps) => (
  <ChakraLink
    as={Link}
    href={href}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
      color: "gray.800",
    }}
    _activeLink={{
      color: "teal.500",
      fontWeight: "bold",
    }}
  >{children}</ChakraLink>
);


// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenAuthCode,
    onOpen: onOpenAuthCode,
    onClose: onCloseAuthCode,
  } = useDisclosure();
  const {
    isOpen: isOpenMobileMenu,
    onOpen: onOpenMobileMenu,
    onClose: onCloseMobileMenu,
  } = useDisclosure();

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
      <Box className="logo" fontFamily="heading"
      flex={{base: "0 0 45%", md:"0 0 15%"}}
      w={{base: "45%", md: "15%"}}
        zIndex={20}>
        <NavLink href="/">KeypMine</NavLink>
      </Box>
      <HStack as="nav" maxW="5xl" display={{base: 'none', md: 'flex'}}>
        {mainMenuItems.map((item) => {
          if (item.title.includes('Home')) return null;

          return (
            <NavLink href={item.path}>{item.title}</NavLink>
          )
        })}
      </HStack>
      <Box
        flex={{base: "0 0 45%", md:"0 0 15%"}}
        w={{base: "45%", md: "15%"}}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        zIndex={20}
      >
        {!session && (
          <Flex
            flexFlow="row"
            justifyContent="space-between"
            alignItems="center"
            fontSize="sm"
          >
            <Button onClick={onOpen} size="xs">
              Sign in
            </Button>
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
        <Button
          aria-label="Open Menu"
          display={{ md: "none" }}
          size={"sm"}
          pr={0}
          variant={"ghost"}
          colorScheme={"white"}
          onClick={isOpenMobileMenu ? onCloseMobileMenu : onOpenMobileMenu}
        >
          <Icon icon={isOpenMobileMenu ? 'ic:round-close' : 'ic:round-menu'} height={30} width={30} />
        </Button>
      </Box>

      {isOpenMobileMenu ? (
        <Box
          position={"absolute"}
          pb={4}
          display={{base: 'flex', md: "none" }}
          flexFlow="column"
          justifyContent="center"
          alignItems="center"
          w="full"
          maxW="full"
          h="100vh"
          bg="gray.900"
          color="white"
          top={0}
          left={0}
        >
          <Stack as="nav" spacing={4}>
                  {mainMenuItems.map((item) => {
          if (item.title.includes('Home')) return null;

          return (
            <NavLink href={item.path}>{item.title}</NavLink>
          )
        })}
          </Stack>
        </Box>
      ) : null}

      <LoginModal
        headerText="Welcome to Minetest!"
        isOpen={isOpen}
        onClose={onClose}
      >
        <Text fontSize="md" color="body" textAlign="center" mb={0}>
          Minetest is an open source voxel game engine with easy modding and
          game creation.
        </Text>
        {/* <Box py={5}> */}
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
        {/* </Box> */}
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
          Copy the auth code below and paste it into to the login form in-game to authenticate. Enjoy!
        </Text>
        <AuthCode code="342674" />
      </LoginModal>
    </Box>
  );
}
