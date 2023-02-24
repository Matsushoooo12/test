/* eslint-disable react/no-children-prop */
import {
  Avatar,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch, AiOutlineMail } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { TfiHandStop } from "react-icons/tfi";
import { Search2Icon } from "@chakra-ui/icons";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsFillBagCheckFill } from "react-icons/bs";

const Header = () => {
  return (
    <Flex
      w="100%"
      h="80px"
      bg="white"
      boxShadow="md"
      position="fixed"
      top="0"
      left="0"
      justifyContent="center"
    >
      <Flex
        h="100%"
        w="1280px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Image
            w="160px"
            src="https://menta.work/resource/img/logo.svg"
            alt=""
            mr="40px"
          />
          <Flex>
            <Flex alignItems="center" mr="24px" whiteSpace="nowrap">
              <Icon as={AiOutlineSearch} />
              <Text fontWeight="bold">メンターを探す</Text>
            </Flex>
            <Flex alignItems="center" whiteSpace="nowrap" mr="24px">
              <Icon as={TfiHandStop} />
              <Text fontWeight="bold">メンターを募集</Text>
            </Flex>
          </Flex>
          <InputGroup>
            <Input
              w="400px"
              bg="gray.100"
              placeholder="PHPなどスキル名で検索"
            />
            <InputRightElement children={<Search2Icon color="gray.500" />} />
          </InputGroup>
        </Flex>
        <HStack spacing="16px" alignItems="center">
          <Icon fontSize="24px" as={AiOutlineMail} />
          <Icon fontSize="24px" as={IoNotificationsOutline} />
          <Icon fontSize="24px" as={BsFillBagCheckFill} />
          <Avatar w="40px" h="40px" />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
