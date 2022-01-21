# :computer: 環境構築 (WSL)
要件: Windows にて、WSL を用いるものとします。  
[Resolving EACCES permissions errors when installing packages globally](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) に従い、以下を実行します。  

## 1. まず GCP
[GCP](https://console.cloud.google.com/apis/credentials/consent) で新たなアプリを作成。
その後、[Firebase](https://console.firebase.google.com/u/0/project/_/authentication/providers) で新たなプロジェクトを作る。

## 2. Install `npm`, `nodejs`
`npm`, `nodejs` のインストール時に回り道をしてしまっており、その関係で、インストールの順番は正しくない可能性があります。エラーが出たら適当に実行の順番を変えたり、ググったりしてください。  
```sh
# 2-1. Install latest npm
curl -0 -L http://npmjs.org/install.sh | sudo sh
mkdir ~/.npm-global
npm config set prefix "~/.npm-global"
export PATH=~/.npm-global/bin:$PATH
source ~/.profile
# npm install -g jshint
npm -g install firebase-tools

# 2-2. Install node.js
# @see https://qiita.com/nanbuwks/items/ed8adb2d4324c939a349
sudo apt -y install nodejs
sudo npm config set strict-ssl false
sudo npm install n -g
sudo npm config set strict-ssl true
sudo n stable
sudo apt purge -y nodejs

# 1-3. パスを通す (不要かも？)
echo "export PATH=$PATH:~/.nodebrew/current/bin:~/.nodebrew/current/lib/node_modules/npm/bin" >> ~/.bashrc
source ~/.bashrc
```

## 3. Install `firebase`
cf: [Firebase CLI リファレンス](https://firebase.google.com/docs/cli?hl=ja#install-cli-mac-linux)  
```sh
# 3-1. `firebase` をインストール
curl -sL https://firebase.tools | bash
# 3-2. ログインします。
firebase login
# 3-3. 設定
firebase use --add
# `firebase use --add` に対する設定のメモです。
# ? Which project do you want to add? random-neon
# ? What alias do you want to use for this project? (e.g. staging) staging
```

([参考](https://qiita.com/yamacraft/items/d8b623cceb5c91692b65))
```sh
# token 取得
firebase login:ci
firebase use develop --token 1/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
firebase deploy --token 1/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

(参考) `firebase use --add` の別解
自動生成された .firebaserc の "projects" の "develop" を対象とする。
```sh
firebase use develop
firebase deploy
```

## 4. untitled
serve をしながら、
```sh
firebase serve
```
webpack を有効にします。
```sh
# 下の行は初回時のみ必要
# npm install
npm run start
```

## (参考) How to deploy (静的サイト)
cf: [Firebase Hostingに静的サイトをデプロイする手順のメモ](https://qiita.com/rubytomato@github/items/b83caa01fc9c4993f526)  
localhost にデプロイするには：
```sh
firebase serve --only hosting
```
ウェブ上にデプロイするには：
```sh
# firebase deploy
firebase deploy --except functions
```
