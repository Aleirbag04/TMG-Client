import { HStack, Image } from "native-base";
import logo from "../logo.svg";
const Header = () => {
  return (
    <HStack
      backgroundColor="#dfe0e1"
      height={20}
      alignItems="center"
      justifyContent="center"
    >
      <Image
        source={{ uri: logo }}
        resizeMode="contain"
        size={220}
        alt="The Mortgage Group logo"
      />
    </HStack>
  );
};

export default Header;
