const express = require('express');
const axios = require('axios');
const qs = require('querystring');
let app = express();
app.get('/sso/redirect', async (req, res) => {
  // code 换 token、refresh_token
  let tokenRes = await axios.post(
    'https://first-oidc-app.authing.cn/oauth/oidc/token',
    qs.stringify({
      client_id: '5cded9bf4efab36f02fa666a',
      client_secret: '78d02880b8ff219e1a57094a0d124222',
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/sso/redirect',
      code: req.query.code,
    })
  );
  // token 换用户信息
  let userInfoRes = await axios.post(
    'https://first-oidc-app.authing.cn/oauth/oidc/me',
    qs.stringify({
      access_token: tokenRes.data.access_token
    })
  );
  // 将用户信息嵌入到 html 中，通过 postMessage 发送给父窗口
  res.send(`<html><head><script>window.parent.postMessage({ data: ${JSON.stringify(userInfoRes.data)}, isAuthing: true }, '*');</script></head></html>`)
});
app.listen(3000);
