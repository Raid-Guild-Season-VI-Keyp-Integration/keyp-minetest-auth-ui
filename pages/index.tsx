import { useSession } from "next-auth/react";
import Layout from "../components/layout";
import {
  Box,
  Button,
  HStack,
  Heading,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import AuthCode from "../components/authcode";
import Icon from "../components/CustomIcon";
import LoginModal from "../components/modals/login-modal";
import { useCallback, useEffect, useState } from "react";
import { AUTH_SERVER_URL } from "../utils/constants";

export default function IndexPage() {
  const { data: session, status } = useSession();
  const [serverAuthed, setServerAuthed] = useState(false);
  const [serverAuthenticating, setServerAuthenticating] = useState(false);
  const [authCode, setAuthCode] = useState("");
  const [serverError, setServerError] = useState<Error>();
  const { user } = session ?? {};
  const loading = status === "loading";

  const handleServerAuth = useCallback(
    async (token: string, address: string) => {
      try {
        console.log("Authenticating with server", { AUTH_SERVER_URL });

        setServerAuthenticating(true);
        const response = await fetch(`${AUTH_SERVER_URL}/storeInfo`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, address }),
        });

        const data = await response.json();
        const { error: authError } = data;
        if (!authError && data.authCode) {
          setServerAuthed(true);
          setAuthCode(data.authCode);
          setServerAuthenticating(false);
          return;
        }

        throw new Error(authError);
      } catch (error: any) {
        console.error(error);
        console.log("Error authenticating with server", error.message);
        setServerAuthenticating(false);
        setServerError(error);
      }
    },
    []
  );

  useEffect(() => {
    if (user && user.accessToken && user.address && !serverAuthed) {
      handleServerAuth(user.accessToken, user.address);
    }
  }, [user, serverAuthed, handleServerAuth]);

  return (
    <Layout>
      <Heading as="h1">Minetest Authentication</Heading>
      {AUTH_SERVER_URL.includes("localhost") ? (
        <Box
          position="absolute"
          top={20}
          left={"50%"}
          transformOrigin="center"
          transform="auto"
          translateX={"-25%"}
          color="orange.500"
        >
          <Icon icon="gg:media-live" maxW={8} />
        </Box>
      ) : (
        <Box
          position="absolute"
          top={20}
          left={"50%"}
          transformOrigin="center"
          transform="auto"
          translateX={"-25%"}
          color="green.500"
        >
          <Icon icon="gg:media-live" maxW={8} />
        </Box>
      )}
      {!session && !loading && (
        <VStack mt={8} gap={6}>
          <Text>Login to get your Minetest authcode</Text>
          <LoginModal btnSize="md" />
        </VStack>
      )}
      {loading && !session && (
        <Box display="flex" justifyContent="center" textAlign="center" mt={6}>
          <Text>Loading</Text> <Spinner size="sm" />
        </Box>
      )}

      {user && !loading && (
        <VStack mt={6} gap={6}>
          <Text fontSize="2xl">gm {user.email ?? user.username}</Text>
          <VStack>
            <Text className="font-bold">Your keyp wallet address is:</Text>
            <Text>{user?.address}</Text>
          </VStack>
          {serverError ? (
            <Text color="red.500">{serverError.message}</Text>
          ) : (
            <Text>
              Copy the code below and paste into the Minetest login screen
            </Text>
          )}
          {serverAuthed && !serverAuthenticating && (
            <AuthCode code={authCode} pinStyle />
          )}
          {!serverAuthed && serverAuthenticating && (
            <Text>
              <Spinner size="sm" /> Authenticating with server...
            </Text>
          )}
          {serverAuthed && !serverAuthenticating ? (
            <Button
              display="inline-flex"
              gap={1}
              onClick={() =>
                handleServerAuth(user.accessToken ?? "", user.address ?? "")
              }
            >
             <Icon icon="pixelarticons:reload" w={6} h={6} /> Get new code
            </Button>
          ) : undefined}
        </VStack>
      )}
    </Layout>
  );
}
