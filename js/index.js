//微信标题 图片
var imgUrl = 'https://github.com/WilonTi/wxactivity/blob/master/img/word.jpg'; 
var lineLink = 'https://wilonti.github.io/wxactivity/'; 
var descContent = "3.8M"; 
var shareTitle = '技能考前，85道押题发布！高概率原理，套用得分！'; 
var appid = 'wxc9937e3a66af6dc8'; 
 
function shareFriend() { 
WeixinJSBridge.invoke('sendAppMessage',{ 
"appid": appid, 
"img_url": imgUrl, 
"img_width": "640", 
"img_height": "640", 
"link": lineLink, 
"desc": descContent, 
"title": shareTitle 
}, function(res) { 
_report('send_msg', res.err_msg); 
}) 
} 
function shareTimeline() { 
WeixinJSBridge.invoke('shareTimeline',{ 
"img_url": imgUrl, 
"img_width": "640", 
"img_height": "640", 
"link": lineLink, 
"desc": descContent, 
"title": shareTitle 
}, function(res) { 
_report('timeline', res.err_msg); 
}); 
} 
function shareWeibo() { 
WeixinJSBridge.invoke('shareWeibo',{ 
"content": descContent, 
"url": lineLink, 
}, function(res) { 
_report('weibo', res.err_msg); 
}); 
} 
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。 
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() { 
 
// 发送给好友 
WeixinJSBridge.on('menu:share:appmessage', function(argv){ 
shareFriend(); 
}); 
 
// 分享到朋友圈 
WeixinJSBridge.on('menu:share:timeline', function(argv){ 
shareTimeline(); 
}); 
 
// 分享到微博 
WeixinJSBridge.on('menu:share:weibo', function(argv){ 
shareWeibo(); 
}); 
}, false); 

//
var btn1 = $("#btn1");
var btn2 = $("#btn2");
$('.modal').hide();
$('.bg-span').on('click', function(e){ 
//	console.log(this)
	$(this).removeClass("bg-span");

	setTimeout(function(){
		$('.modal').show();
	},7000);

})
btn1.on('click', function(e){ 
	btn2.removeClass("active");
	btn1.addClass("active");
	$('.point p span').addClass("bg-span");

})
btn2.on('click', function(e){ 
	btn1.removeClass("active");
	btn2.addClass("active");
	$('.point p span').removeClass("bg-span");
})

$('.footer-right').on('click', function(e){ 
	$('.modal').show();
})
$('.mask').on('click', function(e){ 
	$('.modal').hide();
})
