import { Flex, Text, VStack, Icon } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import SkilTag from "../atoms/SkilTag";

const Sidebar = () => {
  return (
    <Flex
      w="240px"
      h="100vh"
      position="fixed"
      zIndex="-1"
      direction="column"
      mt="80px"
    >
      <Flex alignItems="center" mt="80px" mb="24px" cursor="pointer">
        <Icon fontSize="20px" color="gray.300" as={AiOutlineLeft} mr="8px" />
        <Text>すべてのカテゴリ</Text>
      </Flex>
      <Flex direction="column">
        <Text ml="16px" fontWeight="bold" fontSize="20px" mb="16px">
          プログラミング
        </Text>
        <Flex direction="column" mb="40px">
          <Text py="8px" px="24px" cursor="pointer">
            すべて
          </Text>
          <Text py="8px" px="24px" cursor="pointer">
            サーバーサイド
          </Text>
          <Text py="8px" px="24px" cursor="pointer">
            フロントエンド
          </Text>
          <Text py="8px" px="24px" cursor="pointer">
            スマートフォンアプリ
          </Text>
          <Text py="8px" px="24px" cursor="pointer">
            インフラ・クラウド
          </Text>
          <Text py="8px" px="24px" cursor="pointer">
            AI・機械学習
          </Text>
          <Text py="8px" px="24px" cursor="pointer">
            ゲームプログラム
          </Text>
          <Text py="8px" px="24px" cursor="pointer">
            その他
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column">
        <Text ml="16px" fontWeight="bold" fontSize="20px" mb="16px">
          人気タグ
        </Text>
        <Flex flexWrap="wrap" fontSize="12px" color="blue.300" ml="12px">
          <SkilTag title="JavaScript" />
          <SkilTag title="Vue.js" />
          <SkilTag title="TypeScript" />
          <Text p="4px 8px" bg="gray.100" mr="8px" mb="8px">
            jQuery
          </Text>
          <Text p="4px 8px" bg="gray.100" mr="8px" mb="8px">
            React.js
          </Text>
          <Text p="4px 8px" bg="gray.100" mr="8px" mb="8px">
            HTML / CSS
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
