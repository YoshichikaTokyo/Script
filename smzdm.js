/*
[Script]
http-response ^https?://user-api\.smzdm\.com/info requires-body=1,script-path=https://raw.githubusercontent.com/hancj0528/Script/master/smzdm.js

[MITM]
hostname = *.smzdm.com
*/

let body = JSON.parse($response.body);

if (body["data"]["checkin"]["client_has_checkin"] == false) {
  body["data"]["checkin"]["client_has_checkin"] =
    body["data"]["checkin"]["web_has_checkin"];
}

$done({ body: JSON.stringify(body) });
