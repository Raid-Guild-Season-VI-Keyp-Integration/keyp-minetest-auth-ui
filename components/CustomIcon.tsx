import { Icon as IconifyIcon } from "@iconify/react";
import { chakra } from "@chakra-ui/react";

const Icon = chakra(IconifyIcon, {
  baseStyle: { maxH: 8, maxW: 8 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "icon",
      "color"
    ].includes(prop),
});

export default Icon;