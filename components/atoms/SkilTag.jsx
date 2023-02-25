import { Text } from "@chakra-ui/react";
import React from "react";

const SkilTag = ({ title }) => {
  return (
    <Text p="4px 8px" bg="gray.100" mr="8px" mb="8px">
      {title}
    </Text>
  );
};

export default SkilTag;
