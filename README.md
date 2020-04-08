# 嵌入 Authing 登录表单

本 demo 展示了如何将 Authing OIDC 登录页面嵌入到自己的应用。

# 运行

## 安装依赖

将本项目 clone 到本地，然后安装依赖：

```shell
$ cd oidc-iframe
$ npm install
```

## 启动后端

```shell
$ node server.js
```

## 启动前端

```shell
$ npm install -g http-server
$ http-server .
```

## 通过浏览器访问

在浏览器访问 [http://localhost:8080/index.html](http://localhost:8080/index.html)。

Authing OIDC 登录页已经嵌入到了我们自己的应用，现在我们输入账号密码进行登录。
![](https://cdn.authing.cn/docs/20200408211216.png)

成功获得了用户信息。我们刷新页面，依然会显示登录信息，因为此时已经是登录状态。
![](https://cdn.authing.cn/docs/20200408211433.png)

接下来点击「登出」按钮，退出登录。
![](https://cdn.authing.cn/docs/20200408211910.png)

之后我们又回到了最一开始的登录页面。
![](https://cdn.authing.cn/docs/20200408211216.png)
