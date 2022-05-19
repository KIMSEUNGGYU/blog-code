const express = require('express');
const path = require('path');
const app = express();

const header = {
  setHeaders: (res, path) => {
    // 캐시 적용 (이미지)
    if (path.endsWith('.jpg')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // 캐시 적용 안함
      // res.setHeader('Cache-Control', 'public, max-age:31536000'); // 캐시 적용
    }
  },
};

app.use('/', express.static(path.join(__dirname, '../client'), header));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '../client/user.html'));
});

app.get('/counter', function (request, response) {
  response.sendFile(path.join(__dirname, '../client/counter.html'));
});

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080');
});
