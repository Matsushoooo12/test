import { ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "../components/templates/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
