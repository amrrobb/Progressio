var uri = "my test.asp?name=ståle&car=saab";
var enc = encodeURI(uri);
var dec = decodeURI(enc);
var res = enc + " " + dec;

console.log(res);
