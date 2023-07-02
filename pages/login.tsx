import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// @ts-ignore
import { LoginPortal } from "@usekeyp/ui-kit";
import { signInKeyp } from "@usekeyp/js-sdk";
import Layout from "../components/layout";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const KeypButtons = () => {
  const session = useSession();
  const router = useRouter();
  console.log({ session, router });

  const [isLoading, setIsLoading] = useState();
  const handleGoogleLogin = () => {
    signIn("keyp", undefined, "login_provider=GOOGLE")
  }
  const handleDiscordLogin = () => {
    signIn("keyp", undefined, "login_provider=DISCORD")
  }

  const handleLoginClick = (provider: string) => {
    signInKeyp(provider);
  };

  return (
    <Flex direction="row">
      <Button
        m={"2"}
        color="gray.900"
        w={"100%"}
        maxW={"600px"}
        onClick={() => handleLoginClick("GOOGLE")}
        isLoading={isLoading}
      >
        <Icon icon="ic:round-login" width={25} height={25} />&nbsp;
        Google
      </Button>
      <Button
        m={"2"}
        color="gray.900"
        w={"100%"}
        maxW={"600px"}
        onClick={() => handleLoginClick("DISCORD")}
        isLoading={isLoading}
      >
        <Icon icon="ic:round-login" width={25} height={25} />&nbsp;
        Discord
      </Button>
    </Flex>
  );
};

const Login = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && session.status === "authenticated") {
      router.push("/me");
    }
  }, [session, router]);


  return (
    <Layout>
      <Box textAlign="center">
        <Heading as="h2">KeypMine login</Heading>

        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          m="auto"
          textAlign="left"
        >
          <Stack direction="column" spacing={4} textAlign="left">
            <div className="justify-center">
              <KeypButtons />
              {/* <LoginPortal
                providers={["GOOGLE", "DISCORD"]}
                onClick={handleLoginClick}
              /> */}
            </div>
          </Stack>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Login;
