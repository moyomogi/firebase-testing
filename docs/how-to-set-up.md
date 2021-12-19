# 環境構築
僕の環境: Windows にて、WSL を用いてインストールしています。
[Resolving EACCES permissions errors when installing packages globally](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) に従い、以下を実行します。  

## 1. Install `npm`, `nodejs`
`npm`, `nodejs` のインストール時に回り道をしてしまっており、その関係で、インストールの順番は正しくない可能性があります。エラーが出たら適当に実行の順番を変えたり、ググったりしてください。  
```sh
# 1-1. Install latest npm
curl -0 -L http://npmjs.org/install.sh | sudo sh
mkdir ~/.npm-global
npm config set prefix "~/.npm-global"
export PATH=~/.npm-global/bin:$PATH
source ~/.profile
# npm install -g jshint
npm -g install firebase-tools

# 1-2. Install node.js
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

## 2. Install `firebase`
cf: [Firebase CLI リファレンス](https://firebase.google.com/docs/cli?hl=ja#install-cli-mac-linux)  
```sh
curl -sL https://firebase.tools | bash
# echo 'Run "firebase login -y" to login.'

# `firebase use --add` に対する設定のメモです。
# ? Which project do you want to add? random-neon
# ? What alias do you want to use for this project? (e.g. staging) staging
```

## 3. How to deploy
cf: [Firebase Hostingに静的サイトをデプロイする手順のメモ](https://qiita.com/rubytomato@github/items/b83caa01fc9c4993f526)  
```sh
# 3-1. localhost にデプロイする。.
firebase serve --only hosting
# 3-2. ウェブ上にデプロイする。.
firebase deploy
```
