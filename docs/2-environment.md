---
sidebar_position: 2
---

# 环境

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
 
  <TabItem value="MacOS" label="MacOS" default>

系统版本至少为 MacOS12

> 非最新的系统不保证其成功性

```bash title="校验git版本，未安装会提示下载常用工具包"
git --version
```

> 使用[nvm](https://github.com/nvm-sh/nvm)对Node.js进行安装和版本管理，方便切换版本进行开发

```bash title="安装nvm"
git clone git@github.com:nvm-sh/nvm.git ./.nvm
```

```bash title="为bash添加环境"
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bash_profile
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bash_profile
echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.bash_profile
```

```bash title="为zshrc添加环境"
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.zshrc
```

```bash title="刷新环境"
source ~/.bash_profile && source ~/.zshrc
```

```bash title="安装NodeJS@18.20.3"
nvm install 18.20.3
nvm use 18.20.3
node -v
npm -v
```

  </TabItem>

<TabItem value="Debian" label="Ubuntu/Debian">

> 示例系统 Ubuntu 24.04 LTS / Debian 12.0 X86 2H2G

```sh titile="更新系统包"
sudo apt update
sudo apt install wget -y
sudo apt install curl -y
```

```sh title="安装nvm"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

```sh title="添加NVM到环境变量"
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
source ~/.bashrc
nvm -v
```

```bash title="安装NodeJS@18.20.3"
nvm install 18.20.3
nvm use 18.20.3
node -v
npm -v
```

```sh title="安装git"
apt install git
```

```sh title="安装chromium"
sudo apt install chromium-browser
```

  </TabItem>

  <TabItem value="Centos" label="Centos">

> 示例系统 Centos 8.2 X86 2H2G

```sh title="确保yum包是最新的"
sudo yum update -y
sudo yum install wget -y
sudo yum install curl -y
```

```sh title="安装NVM"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

```sh title="添加NVM到环境变量"
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
source ~/.bashrc # 刷新环境
nvm -v # 版本
```

> Centos8以下无法使用官方源的Node V18

> 请改用 16.14.0

```bash title="安装NodeJS@18.20.3"
nvm install 18.20.3
nvm use 18.20.3
node -v
npm -v
```

```sh title="安装git"
yum install git
```

```sh title="安装 Chromium"
yum  install chromium -y
```

  </TabItem>

   <TabItem value="Windows" label="Windows" >
  
推荐系统 `Windows10` | `Windows11`

1. 安装浏览器： 非推荐系统请自行安装 [Google Chrome](https://www.google.cn/intl/zh-CN/chrome/) / [Edge](https://www.microsoft.com/zh-cn/edge)

2. 安装 Node.js： [Node.js@18.20.3](https://nodejs.org/zh-cn)

> 推荐使用[nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases)对Node.js进行版本管理，方便切换版本进行开发

> Node.js 版本必须大于16.14.0且双数版本

3. 安装 Git： [Git Download for Windows](https://git-scm.com/)

> git必须全部点击默认next，其他地址可能会造成git损坏

  </TabItem>

</Tabs>

出现意外？阅读[常见问题](./x-other/3-common-problem.md)
