var arr = [1,2,3,4,5,6,7,8,9,10];
// basic method
// for (var i = 0;i<arr.length;i++) {
//     console.log(arr[i]);
// }
// forEach
// arr.forEach((item) => console.log(item));
// Map
// arr.map((item) => console.log(item));
var obj = {
    Roxy: 13,
    Kate: 8,
    Sandy: 4
}
//forIn
// for (item in obj) {console.log(`${item}: ${obj[item]}`)}
//Object.entries
// for([key, value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`)
// }
// Object.keys
Object.keys(obj).map(key => console.log(`${key}: ${obj[key]}`));
Object.keys(obj).map(item => console.log(`${item} ${obj[item]}`))