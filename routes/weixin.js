var wechat = require('wechat');

exports.weixin = wechat('hellonode', function(req, res, next) {
  var message = req.weixin;
  res.reply('hehe');
});
