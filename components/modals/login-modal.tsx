import { Button, Text, useDisclosure } from "@chakra-ui/react";
import { KeypMineModal } from "./modal";
import { KeypButtons } from "../keyp-buttons";

const LoginModal = ({ btnSize = 'xs' }: { btnSize: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} size={btnSize}>
        Sign in
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
        <KeypButtons />
      </KeypMineModal>
    </>
  );
};


export default LoginModal;