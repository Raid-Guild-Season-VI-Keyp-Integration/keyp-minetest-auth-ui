import {
  Box,
  Button,
  HStack,
  useClipboard,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { type } from "os";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';



interface AuthCodeProps {
  code: string;
  pinStyle?: boolean;
}

const AuthCode = ({ code, pinStyle }: AuthCodeProps) => {
  const { onCopy, value, setValue, hasCopied } = useClipboard('');
  const codeArray: string[] = code.split("");

  const pinNumberStyles = {
    bgColor: "transparent",
    fontSize: "7xl",
    fontWeight: "normal",
    color: hasCopied ? 'green.500' : "whiteAlpha.700",
    textAlign: "center",
    h: 12,
  };

  const numberStyles = {
    bgColor: "transparent",
    color: "whiteAlpha.700",
    textAlign: "center",
    h: 12,
  };

  useEffect(() => {
    setValue(code);
  }, [code]);

  return (
    <HStack position="relative" gap={6} bgColor="transparent" alignItems="center" cursor="pointer" justifyContent="center" onClick={onCopy}>
      <>
      <Button onClick={onCopy} position="absolute" right={-75} variant="ghost" colorScheme="white" size="sm" display="inline-flex" gap={1} color={hasCopied ? 'green.400' : ''} transition="all 0.4s ease-in-out">
      <Icon icon="ic:round-content-copy" width={40} height={40} /> <Box as="span" pos="absolute" top="25%" right={-10} color="green.400" opacity={hasCopied ? 1 : 0} transition="opacity 0.4s ease-in-out">{hasCopied ? 'Copied' : ''}</Box>
      </Button>
      {pinStyle ? (
      codeArray.map((number) => (
        <Box key={uuidv4()} as="span" sx={pinNumberStyles}>
          {number}
        </Box>
      ))

      ) : (
          <Box as="span" display="inline-flex" alignItems="center"
            sx={numberStyles} color={hasCopied ? 'green.500' : 'inherit'}>
            <Button onClick={onCopy} variant="ghost" colorScheme="white" size="sm" display="inline-flex" gap={1} color={hasCopied ? 'green.400' : ''} transition="all 0.4s ease-in-out">
              {code} <Icon icon="ic:round-content-copy" width={20} height={20} /> <Box as="span" pos="absolute" top="25%" right={-10} color="green.400" opacity={hasCopied ? 1 : 0} transition="opacity 0.4s ease-in-out">{hasCopied ? 'Copied' : ''}</Box>
            </Button>
        </Box>
      )}
        </>
    </HStack>
  );
}

export default AuthCode;
export type { AuthCodeProps };
