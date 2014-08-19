var wechat = require('wechat');
var API = require('wechat').API;
var api = new API('wx555b5022e7ce7cd0', '81f42087bb0cf20de841d0e3e411f6fc');

var menu = {
 "button":[
   {
     "type":"click",
     "name":"今日歌曲",
     "key":"V1001_TODAY_MUSIC"
   },
   {
     "name":"菜单",
     "sub_button":[
       {
         "type":"view",
         "name":"搜索",
         "url":"http://www.soso.com/"
       },
       {
         "type":"click",
         "name":"赞一下我们",
         "key":"V1001_GOOD"
       }]
   }]
};

exports.weixin = wechat('hellonode', function(req, res, next) {
  var message = req.weixin;
  if (message.Content === 'hi') {
    res.reply('hi');
  } else {
    res.reply('hehe');
  }
  api.createMenu(menu, function(err, result) {
    if (err) {
      res.reply('menu wrong');
    }
  });
});
