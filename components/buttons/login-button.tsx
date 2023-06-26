import { Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import keypLogo from "../assets/icons/keyp-logo.svg";
import image from "../../assets/images/bg-image.jpg";
import Image from "next/image";

interface LoginButtonProps {
  handleClick: () => void;
}

const LoginButton = ({handleClick}: LoginButtonProps) => {
  // const { loginWithRedirect } = useAuth0();
  const loginWithRedirect = () => {
    console.log("Login with Keyp");
    throw new Error("Login with Keyp not implemented yet");
  };

  return (
    <Button
      display="inline-flex"
      alignItems="center"
      textTransform="uppercase"
      justifyContent="space-between"
      fontWeight={400}
      gap={3}
      onClick={() => loginWithRedirect()}
    >
      <Icon icon="ic:round-login" width={20} height={20} />
      Login with Keyp
      <Image src={keypLogo} alt="Keyp Logo" width={20} height={20} />
    </Button>
  );
};
