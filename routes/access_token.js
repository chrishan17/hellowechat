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
    res.send('Hi');
    //processMsg(req, res, next);
  } else {
    console.log("not weixin server!");
    res.send('not weixin server!');
  }
});

//function processMsg(req, res, next) {
  //var post_data = '';
  //req.on('data', function(chunk) {
    //post_data += chunk;
  //});
  
  //req.on('end', function() {
    //console.log("Accept Data: " + post_data);
    //var user_msg = acceptMsg(post_data);
    //var msgType = user_msg['MsgType'];
    //switch(msgType) {
      //case 'event':
        //wxevent.processEvent(user_msg, req, res, next);
        //break;
      //case 'text':
        //wxmsg.processMsg(user_msg, req, res, next);
        //break;
      //case 'image':
        //wxmsg.processImage(user_msg, req, res, next);
        //break;
      //case 'video':
        //wxmsg.processVideo(user_msg, req, res, next);
        //break;
      //case 'location':
        //wxmsg.processLocation(user_msg, req, res, next);
        //break;
      //case 'link':
        //wxmsg.processLink(user_msg, req, res, next);
        //break;
      //case 'voice':
        //wxmsg.processVoice(user_msg, req, res, next);
        //break;
      //default:
    //}
  //})
//}

//function acceptMsg(post_data) {
  //var retMsg = '';
  //var doc = new dom().parseFromString(post_data);

  //function getDomStr(key) {
    //var node = select(doc, '//{0}'.format(key));
    //if (node && node[0] && node[0].firstChild) {
      //return node[0].firstChild.data;
    //} else {
      //return null;
    //}
  //}

  //var toUserName = getDomStr('ToUserName');
  //var fromUserName = getDomStr('FromUserName');
  //var createTime = getDomStr('createTime');
  //var msgType = getDomStr('MsgType');

  //var msgId = getDomStr('MsgId');
  //var content = getDomStr('Content');
  //var event = getDomStr('Event');
  //var eventKey = getDomStr('EventKey');
  //var ticket = getDomStr('Ticket');
  //var latitude = getDomStr('Latitude');
  //var longitude = getDomStr('Longitude');
  //var precision = getDomStr('Precision');

  //var mediaId = getDomStr('MediaId');
  //var format = getDomStr('Format');
  //var recognition = getDomStr('Recognition');
  //var picUrl = getDomStr('PicUrl');
  //var url = getDomStr('Url');
  //var description = getDomStr('Description');

  //var location_X = getDomStr('Location_X');
  //var location_Y = getDomStr('Location_Y');
  //var scale = getDomStr('Scale');
  //var label = getDomStr('Label');

  //return {
    //ToUserName : toUserName,
    //FromUserName : fromUserName,
    //MsgType : msgType,
    //MsgId : msgId,
    //Content : content,
    //Event : event,
    //EventKey : eventKey,
    //Latitude : latitude,
    //Longitude : longitude,
    //Precision : precision,
    //Ticket : ticket,
    //MediaId : mediaId,
    //Format : format,
    //Recognition : recognition,
    //Location_X : location_X,
    //Location_Y : location_Y,
    //Scale : scale,
    //Label : label,
    //PicUrl : picUrl,
    //Description : description,
    //Url : url
  //};
//}

module.exports = router;

