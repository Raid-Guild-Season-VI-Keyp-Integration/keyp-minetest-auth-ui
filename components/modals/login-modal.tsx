import { Button, HStack, Link, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import { KeypMineModal } from "./modal";
import { KeypButtons } from "../keyp-buttons";
import Icon from "../CustomIcon";
import Image from '../CustomImage';
import keypLogo from '../../assets/icons/keyp-logo-full.svg'
import p2pLogo from '../../assets/icons/p2pcloud-logo.svg';

const LoginModal = ({ btnSize = 'xs' }: { btnSize: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} size={btnSize} display="inline-flex" alignItems="center" gap={1}>
        <Icon icon="pixelarticons:login" w={5} h={5} />Sign in
      </Button>

      <KeypMineModal
        headerText="Login to Minetest!"
        isOpen={isOpen}
        onClose={onClose}
      >
        <Text fontSize="md" color="body" textAlign="center" mb={0}>
          Minetest is an open source voxel game engine with easy modding and
          game creation.
        </Text>
        <Text fontSize="md" color="body" textAlign="center" mb={0}>
         Keyp provides powerful Web3 Onboarding ‍for Games and Apps.
        </Text>
        <KeypButtons />

        <HStack  justifyContent="center" w="full">
        <Tooltip
            label="Authentication by Keyp"
            bg="blue.600"
            rounded={3}
            hasArrow
            >
            <Link href="https://usekeyp.com/" isExternal display="inline-flex" alignItems="center"><Image src={keypLogo} maxH={8} w="auto" ml={1} alt="Powerful Web3 Onboarding ‍for Games and Apps" /></Link>
          </Tooltip>
        </HStack>
      </KeypMineModal>
    </>
  );
};


export default LoginModal;