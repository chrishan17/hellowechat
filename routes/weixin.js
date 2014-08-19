var wechat = require('wechat');

exports.weixin = wechat('hellonode', function(req, res, next) {
  var message = req.weixin;
  if (message.Content === 'hi') {
    res.reply('hi');
  } else {
    res.reply('hehe');
  }
});
