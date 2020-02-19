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
