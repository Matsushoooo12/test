# コンポーネント理解

## 参考スクショ

<img width="1680" alt="スクリーンショット 2023-02-25 4 39 10" src="https://user-images.githubusercontent.com/66903388/221275278-1384f05c-3273-42a3-aedb-1ecdbda99dd4.png">

## Next.jsプロジェクト作成

```
$ npx create-next-app test
$ cd test
```

## Githubの使い方

### git status

- 現在のステータスを確認
  - 赤→unStaged, 緑→Staged

```
$ git status
```

### git add

- statusが赤い場合は`git add`を使ってStagedにする
  - unStagedの全てを指定する場合は`git add .`、特定のパスを指定する場合は`git add パス`

```
$ git add .
```

### git commit

-  `-m`の後のダブルコーテーションの中はコミットメッセージを記述する。

```
$ git commit -m "first commit"
```

### git remote add origin URL

- Githubのリモートリポジトリに紐付ける

```
$ git remote add origin https://github.com/Matsushoooo12/test.git
```

###　git push origin リモートブランチ

- このプッシュを行うことでGithubでファイルを管理できるようになる。

```
$ git push origin master
```