# コンポーネント理解

## 参考スクショ

<img width="1680" alt="スクリーンショット 2023-02-25 4 39 10" src="https://user-images.githubusercontent.com/66903388/221275278-1384f05c-3273-42a3-aedb-1ecdbda99dd4.png">

## 手順

1. Next.js プロジェクト作成
2. Github のリポジトリにプロジェクトを push
3. Next.js のコンポーネント理解
4. サーバーを起動
5. 必要ライブラリを導入
6. Atomic デザインについて
7. Header 作成
8. Sidebar 作成
9. main ページ作成

## Next.js プロジェクト作成

```
$ npx create-next-app test
$ cd test
```

## Github のリポジトリにプロジェクトを push

### git status

- 現在のステータスを確認
  - 赤 →unStaged, 緑 →Staged

```
$ git status
```

### git add

- status が赤い場合は`git add`を使って Staged にする
  - unStaged の全てを指定する場合は`git add .`、特定のパスを指定する場合は`git add パス`

```
$ git add .
```

### git commit

- `-m`の後のダブルコーテーションの中はコミットメッセージを記述する。

```
$ git commit -m "first commit"
```

### git remote add origin URL

- Github のリモートリポジトリに紐付ける

```
$ git remote add origin https://github.com/Matsushoooo12/test.git
```

### git push origin リモートブランチ

- このプッシュを行うことで Github でファイルを管理できるようになる。

```
$ git push origin master
```

## Next.js のコンポーネント理解

`_app.js`: ルートコンポーネント。全てに共通するコンポーネントはここに記述する。

`index.js`: ルートの URL 上で表示されるページ。例）https://google.com

pages ディレクトリの中のディレクトリが URL の名前になっている。

例）pages/projects/index.jsx

→ http://localhost:3000/projects

例）pages/projects/[id]/index.jsx

→ http://localhost:3000/projects/${id}

## サーバーを起動

```
$ yarn dev
```

`http://localhost:3000`という URL で表示される。

## 必要ライブラリを導入

### prettier を導入

```
$ yarn add prettier
$ touch .prettierrc
```

.prettierrc

```
{
  "endOfLine": "lf",
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5",
  "doubleQuote": true,
  "jsxDoubleQuote": true,
  "semi": true
}
```

### CSS ライブラリを導入

今回は Chakra-UI

公式サイト：https://chakra-ui.com/

```
$ yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

\_app.js

```
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
```

## Atomic デザインについて

参考サイト：https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B

### コンポーネント作成

```
$ mkdir components
$ mkdir components/molecules
$ mkdir components/organisms
$ mkdir components/templates
$ mkdir components/atoms
```

## Header 作成

\_app.js

```
import { ChakraProvider, Flex } from "@chakra-ui/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      // ここから追加
      <Flex
        w="100%"
        h="80px"
        bg="blue"
        position="fixed"
        top="0"
        left="0"
      ></Flex>
      // ここまで追加
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
```

```
$ touch components/templates/Header.jsx
```

Header.jsx

```
import { Flex } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex w="100%" h="80px" bg="blue" position="fixed" top="0" left="0"></Flex>
  );
};

export default Header;
```

## react-icons

```
$ yarn add react-icons
```

## @chakra-ui/icons

```
$ yarn add @chakra-ui/icons
```

## Header 作成

```
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
```

## サイドバー作成

\_app.js

```
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
```
