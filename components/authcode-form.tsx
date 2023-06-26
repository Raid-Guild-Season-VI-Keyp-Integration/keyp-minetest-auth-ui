import {
  ChakraComponent,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";

const pinInputFieldStyles = {
  bgColor: "gray.300",
  border: "2px solid transparent",
  fontSize: "xl",
  color: "buttonText",
  h: 12,
  _focus: {
    bgColor: "gray.600",
    color: "gray.200",
  },
  _focusVisible: {
    borderWidth: "2px",
    borderColor: "whiteAlpha.900",
  },
};

const AuthCodeForm = () => {
  const handleSumbit = (e: Event) => {
    e.preventDefault();
    console.log("AuthCodeForm submitted");
  };

  return (
    <form>
      <HStack>
        <PinInput type="number" size="md" placeholder="" otp>
          <PinInputField sx={pinInputFieldStyles} />
          <PinInputField sx={pinInputFieldStyles} />
          <PinInputField sx={pinInputFieldStyles} />
          <PinInputField sx={pinInputFieldStyles} />
          <PinInputField sx={pinInputFieldStyles} />
          <PinInputField sx={pinInputFieldStyles} />
        </PinInput>
      </HStack>
    </form>
  );
};

export default AuthCodeForm;
