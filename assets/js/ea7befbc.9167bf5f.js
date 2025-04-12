"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5178],{9450:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=s(4848),t=s(8453);const r={sidebar_position:3},c="npm",o={id:"tools/npm",title:"npm",description:"./.npmrc",source:"@site/docs/1-tools/3-npm.md",sourceDirName:"1-tools",slug:"/tools/npm",permalink:"/docs/tools/npm",draft:!1,unlisted:!1,editUrl:"https://github.com/lemonade-lab/lvyjs-docs/blob/main/docs/1-tools/3-npm.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"jsxp",permalink:"/docs/tools/jsxp"},next:{title:"husky",permalink:"/docs/tools/husky"}},l={},p=[{value:"<code>./.npmrc</code>",id:"npmrc",level:2},{value:"<code>./.npmignore</code>",id:"npmignore",level:2},{value:"\u914d\u7f6e <code>package.json</code>",id:"\u914d\u7f6e-packagejson",level:2},{value:"\u53d1\u5e03",id:"\u53d1\u5e03",level:2}];function d(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"npm",children:"npm"})}),"\n",(0,i.jsx)(e.h2,{id:"npmrc",children:(0,i.jsx)(e.code,{children:"./.npmrc"})}),"\n",(0,i.jsxs)(e.admonition,{title:".npmrc",type:"tip",children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"./.npmrc"})," \u4e3anpm\u7684\u914d\u7f6e\u6587\u4ef6"]}),(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u914d\u7f6e npm \u7684\u884c\u4e3a\u548c\u9009\u9879\uff0c\u5b83\u53ef\u4ee5\u8bbe\u7f6e\u955c\u50cf\u6e90\u3001\u4ee3\u7406\u7b49\u914d\u7f6e\u3002"}),(0,i.jsxs)(e.p,{children:["\u66f4\u591a\u914d\u7f6e\u8bf7\u53c2\u8003 ",(0,i.jsx)(e.a,{href:"https://docs.npmjs.com/cli/v10/configuring-npm/npmrc",children:"\u5b98\u65b9\u6587\u6863"}),", ",(0,i.jsx)(e.a,{href:"https://npm.nodejs.cn/cli/v10/configuring-npm/npmrc",children:"\u4e2d\u6587\u6587\u6863"})]})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-env",metastring:'title=".npmrc"',children:"# \u4ee5\u4e0b\u662f\u4e00\u4e9b\u793a\u4f8b\u914d\u7f6e\uff0c\u8bf7\u52ff\u7167\u642c\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u914d\u7f6e\n\n# \u4e3a\u9879\u76ee\u5355\u72ec\u8bbe\u7f6e\u955c\u50cf\nregistry=https://registry.npmmirror.com\n# \u4e0d\u751f\u6210lock\npackage-lock=false\n"})}),"\n",(0,i.jsx)(e.h2,{id:"npmignore",children:(0,i.jsx)(e.code,{children:"./.npmignore"})}),"\n",(0,i.jsxs)(e.admonition,{title:".npmignore",type:"tip",children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:".npmignore"}),"\uff1a \u662f\u4e00\u79cd\u9ed1\u540d\u5355\u673a\u5236\u3002"]}),(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u6307\u5b9a\u5728\u6267\u884c npm publish \u65f6\uff0c\u54ea\u4e9b\u6587\u4ef6\u548c\u6587\u4ef6\u5939\u5e94\u8be5\u88ab\u6392\u9664\u5728\u5916\u3002"}),(0,i.jsx)(e.p,{children:"\u8fd9\u662f\u7279\u5b9a\u7528\u4e8e\u5305\u53d1\u5e03\u7684\u6587\u4ef6\uff0c\u4e3b\u8981\u7528\u6765\u7ba1\u7406\u9879\u76ee\u4e2d\u54ea\u4e9b\u6587\u4ef6\u5e94\u5f53\u5305\u542b\u5728\u6700\u7ec8\u53d1\u5e03\u7684 npm \u5305\u4e2d\u3002"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-env",metastring:'title=".npmignore"',children:"# \u5ffd\u7565\u6587\u4ef6\u6216\u6587\u4ef6\u5939\uff0c\u8bf7\u6839\u636e\u9700\u8981\u8bf7\u81ea\u884c\u914d\u7f6e\uff0c\u793a\u4f8b\uff1a\n\n# \u9ed8\u8ba4\u4f1a\u81ea\u52a8\u6392\u9664\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\uff0c\u65e0\u9700\u91cd\u590d\u914d\u7f6e\uff1a\n# node_modules .git .hg .svn .npmrc .gitignore .npmignore \u7b49\n\n# \u9996\u5148\u6392\u9664\u6240\u6709\u6587\u4ef6\u6216\u6587\u4ef6\u5939\n/**\n# \u7136\u540e ! \u5f00\u5934 \u9010\u4e00\u6dfb\u52a0\u9700\u8981\u53d1\u5e03\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u53d6\u6d88\u5ffd\u7565\uff0c\u6309\u7167\u5b9e\u9645\u60c5\u51b5\u8bbe\u7f6e\n!/lib\n!/public\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"\u914d\u7f6e-packagejson",children:["\u914d\u7f6e ",(0,i.jsx)(e.code,{children:"package.json"})]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u914d\u7f6e\u9879\u3001\u4f9d\u8d56\u5305\u8bf7\u6839\u636e\u5b9e\u9645\u9700\u8981\u8fdb\u884c\u8c03\u6574\uff0c\u4ee5yunzaijs\u6a21\u7248\u4e3a\u4f8b"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "yz-template", //\u5e94\u7528\u540d\u79f0\n  "version": "1.0.0-rc.0", //\u7248\u672c\u53f7\n  "description": "Yunzai-Next APP", //\u5e94\u7528\u63cf\u8ff0\n  "author": "author", //\u4f5c\u8005\n  "type": "module",\n  "private": true, // \u5982\u679c\u53d1\u5e03npm\u5305\u8bf7\u53bb\u9664\u79c1\u6709\u9650\u5236\n  "scripts": {\n    "app": "node lib/main.js", //\u542f\u52a8\u5e94\u7528\n    "dev": "lvy dev --yunzai", //\u542f\u52a8\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u5e94\u7528\n    "view": "lvy dev --view", //\u622a\u56fe\u70ed\u5f00\u53d1\n    "build": "lvy build", //\u7f16\u8bd1\u6253\u5305\n    "start": "pm2 startOrRestart pm2.config.cjs", //pm2 \u542f\u52a8\u5e94\u7528\n    "bundle": "rollup --config rollup.config.js", //\u82e5\u4f7f\u7528rollup\u6253\u5305\u9700\u914d\u7f6e\u6b64\u9879\n    "stop": "pm2 stop pm2.config.cjs", //pm2 \u505c\u6b62\u5e94\u7528\n    "delete": "pm2 delete pm2.config.cjs", //pm2 \u5220\u9664\u5e94\u7528\n    "format": "prettier --write .", //\u683c\u5f0f\u5316\u4ee3\u7801\n    "check-format": "git diff --exit-code", //\u68c0\u67e5\u4ee3\u7801\u683c\u5f0f\n    "prepare": "husky" //\u81ea\u52a8\u5b89\u88c5husky\uff0c\u8be5\u90e8\u5206\u8bf7\u67e5\u770b\u540e\u9762\u7684\u6587\u6863\n  },\n  "dependencies": {\n    //\u751f\u4ea7\u73af\u5883\u4f9d\u8d56\u5305\n    "react": "^18.3.1",\n    "react-dom": "^18.3.1",\n    "jsxp": "^1.0.4"\n  },\n  "devDependencies": {\n    //\u5f00\u53d1\u73af\u5883\u4f9d\u8d56\u5305\n    "@types/lodash-es": "^4.17.12",\n    "@types/node": "^20.8.5",\n    "@types/node-schedule": "^2.1.7",\n    "@types/react": "^18.3.4",\n    "husky": "^9.1.5",\n    "icqq": "^0.6.10",\n    "lvyjs": "^0.1.0",\n    "prettier": "^3.0.3",\n    "tailwindcss": "^3.4.10",\n    "typescript": "^5.4.5",\n    "yunzaijs": "^1.0.0-rc.4"\n  },\n  //"files"\uff0c\u7528\u4e8e\u53d1\u5e03npm\u5305\u65f6\uff0c\u6307\u5b9a\u53d1\u5e03\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u3002\u5efa\u8bae\u4f18\u5148\u4f7f\u7528 .npmignore \u8fdb\u884c\u914d\u7f6e\u3002\n  //\u4f18\u5148\u7ea7\uff1apackage.json \u7684 "files" \u5b57\u6bb5 > .npmignore \u6587\u4ef6> .gitignore \u6587\u4ef6\n  "files": ["example"],\n  "types": "lib",\n  "exports": {\n    ".": {\n      "import": "./lib/index.js",\n      "types": "./lib/index.d.ts"\n    }\n  },\n  "keywords": ["yunzaijs"],\n  "publishConfig": {\n    "registry": "https://registry.npmjs.org",\n    "access": "public"\n  }\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u53d1\u5e03",children:"\u53d1\u5e03"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://www.npmjs.com/",children:"\u70b9\u51fb\u6ce8\u518c npm \u8d26\u6237"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="\u7f16\u8bd1"',children:"yarn run build\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",metastring:'title="\u767b\u5f55"',children:"npm login\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"publish"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u5148\u6253\u5305\u81f3\u672c\u5730\uff0c\u786e\u8ba4\u6587\u4ef6\u4fe1\u606f\uff0c\u786e\u4fdd\u60a8\u7684 .npmignore \u6216 files \u914d\u7f6e\u6709\u6548\u65e0\u8bef\u540e\uff0c\u518d\u53d1\u5e03\u81f3 npm\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="\u6253\u5305\u81f3\u672c\u5730"',children:"npm pack\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="\u786e\u8ba4\u65e0\u8bef\u540e\u4e0a\u4f20"',children:"npm publish\n"})})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>o});var i=s(6540);const t={},r=i.createContext(t);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);