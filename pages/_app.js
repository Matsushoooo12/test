import { ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "../components/templates/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Flex w="100%" h="100%" justifyContent="center">
        <Flex w="1280px" h="100%">
          <Flex
            w="240px"
            h="100vh"
            bg="blue"
            position="fixed"
            zIndex="-1"
          ></Flex>
          <Flex flex={1} ml="240px">
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
