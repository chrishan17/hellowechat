var express = require('express');
var router = express.Router();

var url = require('url');
var crypto = require('crypto');

var ACCESS_TOKEN = 'hellonode';

router.get('/', function(req, res) {
  var reqObj = url.parse(req.url, true);
  var params = reqObj['query'];
  var signature = params['signature'];
  var timestamp = params['timestamp'];
  var nonce = params['nonce'];
  var echostr = params['echostr'];
  var tmpArr = [ACCESS_TOKEN, timestamp, nonce];
  tmpArr.sort();
  var tmpStr = tmpArr.join('');
  var shasum = crypto.createHash('sha1');
  shasum.update(tmpStr);
  var shaResult = shasum.digest('hex');
  if (shaResult == signature) {
    res.send(echostr);
  } else {
    console.log("not weixin server!");
    res.send('not weixin server!');
  }
});

router.post('/', function(req, res, next) {
});

module.exports = router;
