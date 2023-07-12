import { Button, Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
// @ts-ignore
import { signInKeyp } from "@usekeyp/js-sdk";
import { Icon } from "@iconify/react";

export const KeypButtons = () => {
  const {data: session, status} = useSession();
  const router = useRouter();
  const loading = status === "loading";

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
        isLoading={loading}
      >
        <Icon icon="pixelarticons:login" width={25} height={25} />&nbsp;
        Google
      </Button>
      <Button
        m={"2"}
        color="gray.900"
        w={"100%"}
        maxW={"600px"}
        onClick={() => handleLoginClick("TWITTER")}
        isLoading={loading}
      >
        <Icon icon="pixelarticons:login" width={25} height={25} />&nbsp;
        Twitter
      </Button>
      <Button
        m={"2"}
        color="gray.900"
        w={"100%"}
        maxW={"600px"}
        onClick={() => handleLoginClick("DISCORD")}
        isLoading={loading}
      >
        <Icon icon="pixelarticons:login" width={25} height={25} />&nbsp;
        Discord
      </Button>
    </Flex>
  );
};

export default KeypButtons;
