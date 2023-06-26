import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import image from "../../assets/images/bg-image.jpg";
import Image from "next/image";
import { Icon } from "@iconify/react";
import keypLogo from "../../assets/icons/keyp-logo.svg";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  headerText: string;
  children: React.ReactNode;
}

const LoginModal = ({
  isOpen,
  onClose,
  headerText,
  children,
}: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay
        backgroundColor="blackAlpha.600"
        backdropFilter="auto"
        backdropBlur="5px"
      />
      <ModalContent rounded="none" bgColor="transparent">
        <Box position="relative">
          <Box
            display="flex"
            flexFlow="column"
            alignItems="center"
            justifyContent="center"
            position="relative"
            border="5px solid"
            borderColor="whiteAlpha.500"
            rounded="none"
            bgGradient="linear-gradient(180deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.25) 100%)"
            backdropFilter="auto"
            backdropBlur="40px"
            py={28}
            px={9}
            zIndex={10}
          >
            <ModalCloseButton color="body" size="2xl" top={5} right={5} />
            <ModalBody
              display="flex"
              flexFlow="column"
              alignItems="center"
              justifyContent="center"
              gap={9}
              py={0}
            >
              <Box
              color="heading"
              textAlign="center"
              fontFamily="heading"
              fontWeight="400"
                fontSize="2xl"
                my={0}
              >{headerText}</Box>
              {children}
            </ModalBody>
          </Box>
          <Box
            position="absolute"
            left={5}
            top={5}
            w="full"
            h="full"
            border="5px solid"
            borderColor="whiteAlpha.300"
            rounded="none"
            bgColor="blackAlpha.200"
            backdropFilter="auto"
            backdropBlur="40px"
            zIndex={0}
          />
        </Box>
      </ModalContent>
      <Box
        className="bgWrapper"
        position="fixed"
        left={0}
        top={0}
        w="full"
        h="full"
        zIndex={0}
        overflow="hidden"
      >
        <Image
          src={image}
          alt="Picture of the author"
          fill
          quality={100}
          placeholder="blur"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
    </Modal>
  );
};

export { LoginModal };
