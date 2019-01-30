var igi = Request.QueryString("imi");
var idi = String(igi);
var arr = idi.split(",")
var tempArr = [], n;
for (var i in arr) {
tempArr[i] = arr[i].match(/([^0-9]+)|([0-9]+)/g);
for (var j in tempArr[i]) {
if( ! isNaN(n = parseInt(tempArr[i][j])) ){
tempArr[i][j] = n;
}
}
}
tempArr.sort(function (x, y) {
for (var i in x) {
if (y.length < i || x[i] < y[i]) {return -1;}
if (x[i] > y[i]) {return 1;}
}
return 0;
});
for (var i in tempArr) {
arr[i] = tempArr[i].join('');
}
response.write(arr);