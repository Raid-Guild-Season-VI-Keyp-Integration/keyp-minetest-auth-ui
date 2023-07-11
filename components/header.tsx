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
import LoginModal from "./modals/login-modal";
import { Icon } from "@iconify/react";
import { mainMenuItems } from "../utils/constants";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
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
  >
    {children}
  </ChakraLink>
);

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  console.log({ session });
  const router = useRouter();

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

  const handleSignout = (event: any) => {
    event.preventDefault();
    signOut();
    router.push(`/`);
  };
  // const isAuthPage = router.pathname.includes("protected");

  // useEffect(() => {
  //   if (session && isAuthPage) {
  //     !isOpenAuthCode && onOpenAuthCode();
  //   }
  // }, [session]);

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
      <Box
        className="logo"
        fontFamily="heading"
        flex={{ base: "0 0 45%", md: "0 0 15%" }}
        w={{ base: "45%", md: "15%" }}
        zIndex={20}
      >
        <NavLink href="/">KeypMine</NavLink>
      </Box>
      <HStack as="nav" maxW="5xl" display={{ base: "none", md: "flex" }}>
        {mainMenuItems.map((item) => {
          if (item.title.includes("Home")) return null;

          return (
            <NavLink key={uuidv4()} href={item.path}>
              {item.title}
            </NavLink>
          );
        })}
      </HStack>
      <Box
        flex={{ base: "0 0 45%", md: "0 0 15%" }}
        w={{ base: "45%", md: "15%" }}
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
            <LoginModal btnSize="xs" />
          </Flex>
        )}
        {session?.user && (
          <Box display="inline-flex" gap={3}>
            {session.user.image && (
              <span
                style={{ backgroundImage: `url('${session.user.image}')` }}
                className={styles.avatar}
              />
            )}
            <Text fontSize="xs">
              <span className={styles.signedInText}>
                Signed in as{" "}
                <strong>{session.user.email ?? session.user.username}</strong>
              </span>
            </Text>
            <Button
              aria-label="Sign out"
              size="xs"
              onClick={(e) => handleSignout(e)}
            >
              Sign out
            </Button>
          </Box>
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
          <Icon
            icon={isOpenMobileMenu ? "ic:round-close" : "ic:round-menu"}
            height={30}
            width={30}
          />
        </Button>
      </Box>

      {isOpenMobileMenu ? (
        <Box
          position={"absolute"}
          pb={4}
          display={{ base: "flex", md: "none" }}
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
              if (item.title.includes("Home")) return null;

              return <NavLink href={item.path}>{item.title}</NavLink>;
            })}
          </Stack>
        </Box>
      ) : null}


    </Box>
  );
}
