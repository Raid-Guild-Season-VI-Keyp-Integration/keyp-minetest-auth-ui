import {
  Box,
  HStack,
} from "@chakra-ui/react";
import { type } from "os";
import { v4 as uuidv4 } from 'uuid';

const numberStyles = {
  bgColor: "transparent",
  fontSize: "5xl",
  color: "whiteAlpha.700",
  h: 12,
};

interface AuthCodeProps {
  code: string;
}

const AuthCode = ({ code }: AuthCodeProps) => {
  const codeArray: string[] = code.split("");
  return (
    <HStack gap={6} bgColor="transparent">
      {codeArray.map((number) => (
        <Box key={uuidv4()} as="span" sx={numberStyles}>
          {number}
        </Box>
      ))}
    </HStack>
  );
}

export default AuthCode;
export type { AuthCodeProps };
