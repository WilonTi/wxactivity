//微信标题 图片
//var imgUrl = 'https://github.com/WilonTi/wxactivity/tree/master/img/word.jpg'; 
//var lineLink = 'https://wilonti.github.io/wxactivity/'; 
//var descContent = "3.8MB"; 
//var shareTitle = '技能考前，85道押题发布！高概率原理，套用得分！'; 
//var appid = ''; 
wx.config({
  appId: 'wx259106d0548a5e74', // 必填，公众号的唯一标识
  timestamp: "timestamp",//上面main方法中拿到的时间戳timestamp  
    nonceStr: "nonceStr",//上面main方法中拿到的随机数nonceStr  
    signature: "signature",//上面main方法中拿到的签名signature  
    jsApiList: [  
           //所有要调用的 API 都要加到这个列表中  
          "updateAppMessageShareData"//从本地的相册、图库选择图片  
          "updateTimelineShareData"
    ]  
});
wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
  wx.updateAppMessageShareData({ 
    title: '技能考前，85道押题发布！高概率原理，套用得分！', // 分享标题
    desc: '3.8MB', // 分享描述
    link: 'https://www.chinayikao.com/web/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: 'https://www.chinayikao.com/web/img/word.jpg', // 分享图标
    success: function () {
      // 设置成功
    }
  })
});
wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
  wx.updateTimelineShareData({ 
    title: '技能考前，85道押题发布！高概率原理，套用得分！', // 分享标题
    desc: '3.8MB', // 分享描述
    link: 'https://www.chinayikao.com/web/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: 'https://www.chinayikao.com/web/img/word.jpg', // 分享图标
    success: function () {
      // 设置成功
    }
  })
});


public class GetAccessTokenUtil {
    // 网页授权接口
    public final static String GetPageAccessTokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=SECRET";
    public static Map<String, String> getAccessToken(String appid, String appsecret) {
        String requestUrl = GetPageAccessTokenUrl.replace("APPID", appid).replace("SECRET", appsecret);
        HttpClient client = null;
        Map<String, String> result = new HashMap<String, String>();
        String accessToken = null;
        try {
            client = new DefaultHttpClient();
            HttpGet httpget = new HttpGet(requestUrl);
            ResponseHandler<String> responseHandler = new BasicResponseHandler();
            String response = client.execute(httpget, responseHandler);
            JSONObject OpenidJSONO = JSONObject.fromObject(response);
            accessToken = String.valueOf(OpenidJSONO.get("access_token"));
            result.put("accessToken", accessToken);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            client.getConnectionManager().shutdown();
        }
        return result;
    }
}

public class JsapiTicketUtil {
    // 网页授权接口
    public final static String GetPageAccessTokenUrl = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi";

    public static Map<String, String> JsapiTicket(String accessToken) {
        String requestUrl = GetPageAccessTokenUrl.replace("ACCESS_TOKEN", accessToken);
        HttpClient client = null;
        Map<String, String> result = new HashMap<String, String>();
        try {
            client = new DefaultHttpClient();
            HttpGet httpget = new HttpGet(requestUrl);
            ResponseHandler<String> responseHandler = new BasicResponseHandler();
            String response = client.execute(httpget, responseHandler);
            JSONObject OpenidJSONO = JSONObject.fromObject(response);
            String errcode = String.valueOf(OpenidJSONO.get("errcode"));
            String errmsg = String.valueOf(OpenidJSONO.get("errmsg"));
            String ticket = String.valueOf(OpenidJSONO.get("ticket"));
            String expires_in = String.valueOf(OpenidJSONO.get("expires_in"));
            result.put("errcode", errcode);
            result.put("errmsg", errmsg);
            result.put("ticket", ticket);
            result.put("expires_in", expires_in);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            client.getConnectionManager().shutdown();
        }
        return result;
    }
}
String noncestr = WXUtil.generate();//随机字符串
String timestamp = String.valueOf(System.currentTimeMillis() / 1000);//时间戳
//4获取url
//5、将参数排序并拼接字符串
String str = "jsapi_ticket="+ticket+"&noncestr="+noncestr+"&timestamp="+timestamp+"&url="+url;

String str = "jsapi_ticket="+ticket+"&noncestr="+noncestr+"&timestamp="+timestamp+"&url="+url;
//6、将字符串进行sha1加密
String signature = SHA1.SHA1(str);
Map<String,String> map=new HashMap();
map.put("timestamp",timestamp);
map.put("accessToken",accessToken);
map.put("ticket",ticket);
map.put("noncestr",noncestr);
map.put("signature",signature);







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
