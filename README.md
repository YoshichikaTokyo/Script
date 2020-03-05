## B 站去广告

```
[Script]
http-response ^https?://app\.bilibili\.com/x/(v2|resource)/(feed|show|account)/(index|tab|teenagers) requires-body=1,script-path=https://raw.githubusercontent.com/hancj0528/Script/master/bilibili.js

[MITM]
hostname = app.bilibili.com
```

## 微博国际版去广告

```
[Script]
http-response ^https?://weibointl\.api\.weibo\.cn/portal\.php\?a=get_coopen_ads requires-body=1,script-path=https://raw.githubusercontent.com/hancj0528/Script/master/weibointl_launch.js
http-response ^https?://api\.weibo\.cn/2/(statuses|groups)/(unread_hot_|friends_)?timeline requires-body=1,script-path=https://raw.githubusercontent.com/hancj0528/Script/master/weibointl_timeline.js

[MITM]
hostname = weibointl.api.weibo.cn, api.weibo.cn
```

## 什么值得买 签到同步

解决了使用 JS 签到后，APP 仍然显示未签到的问题  
需配合签到 JS 一起使用！！！  
签到 JS 链接：[https://github.com/chavyleung/scripts/tree/master/smzdm](https://github.com/chavyleung/scripts/tree/master/smzdm)

```
[Script]
http-response ^https?://user-api\.smzdm\.com/info requires-body=1,script-path=https://raw.githubusercontent.com/hancj0528/Script/master/smzdm.js

[MITM]
hostname = *.smzdm.com
```
