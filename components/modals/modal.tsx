import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, Box, Text } from "@chakra-ui/react";
import image from "../../assets/images/bg-image.jpg";
import Image from "next/image";
import { Icon } from '@iconify/react';
import keypLogo from '../../assets/icons/keyp-logo.svg';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay backgroundColor="blackAlpha.600" backdropFilter="auto" backdropBlur="5px" />
      <ModalContent rounded="none" bgColor="transparent">
        <Box position="relative">
          <Box
            display="flex" flexFlow="column" alignItems="center" justifyContent="center"
            position="relative"
            border="5px solid"
            borderColor="whiteAlpha.800"
            rounded="none"
            bgGradient="linear-gradient(180deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.25) 100%)"
            backdropFilter="auto"
            backdropBlur="40px"
            py={16}
            px={6}
            zIndex={10}
          >
        <ModalHeader color="heading" textAlign="center" fontFamily="heading" fontWeight="400" fontSize="2xl" >
          Welcome to Minetest!
        </ModalHeader>
        <ModalCloseButton color="body" size="xl" top={5} right={5} />
            <ModalBody display="flex" flexFlow="column" alignItems="center" justifyContent="center" gap="8">
              <Text fontSize="md" color="body" textAlign="center">
              Minetest is an open source voxel game engine with easy modding and game creation.
              </Text>
              <Button display="inline-flex" alignItems="center" textTransform="uppercase" justifyContent="space-between" fontWeight={400} gap={3}>
                <Icon icon="ic:round-login" width={20} height={20}  />
                Login with Keyp
                <Image src={keypLogo} alt="Keyp Logo" width={20} height={20} />
              </Button>
              <Box as="p" color="body" fontSize="sm">
                First time? <Button variant="link" size="sm" color="white" textDecoration="underline" onClick={onClose}>Create an account</Button>
              </Box>
          </ModalBody>
        </Box>
          <Box position="absolute" left={5} top={5} w="full" h="full" border="5px solid" borderColor="whiteAlpha.300" rounded="none" bgColor="blackAlpha.200" backdropFilter="auto" backdropBlur="40px" zIndex={0} />
          </Box>
      </ModalContent>
      <Box className="bgWrapper" position="fixed" left={0} top={0} w="full" h="full" zIndex={0} overflow="hidden">
      <Image
        src={image}
        alt="Picture of the author"
        fill
        quality={100}
        placeholder="blur"
        style={{
          objectFit: 'cover',
        }}
        />
        </Box>
    </Modal>
  );
}

export {
  LoginModal
}