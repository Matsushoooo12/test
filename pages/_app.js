import { ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "../components/templates/Header";
import Sidebar from "../components/templates/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Flex w="100%" h="100%" justifyContent="center">
        <Flex w="1280px" h="100%">
          <Sidebar />
          <Flex flex={1} ml="240px">
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
