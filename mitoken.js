/*
[Script]
http-response ^https://api\.io\.mi\.com/app/v2/home/device_list_page requires-body=1,script-path=https://raw.githubusercontent.com/hancj0528/Script/master/mitoken.js

[MITM]
hostname = api.io.mi.com
*/

let body = JSON.parse($response.body);

let i = body["result"]["list"].length;
while (i--) {
  if (body["result"]["list"][i]["token"] != "") {
    console.log(
      "name:" +
        body["result"]["list"][i]["name"] +
        "  token:" +
        body["result"]["list"][i]["token"] +
        "  mac:" +
        body["result"]["list"][i]["mac"] +
        " ip:" +
        body["result"]["list"][i]["localip"]
    );
  }
}

$done({ body: JSON.stringify(body) });
