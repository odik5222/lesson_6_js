//2
let arr = ["Alex", "John", "ВоЬ", "Amir", "Azizbek", "Tyler"];
let arr2 = ["Davlat", "Arslan", "Steve", 32, true, 45];

let combinedArr = arr.concat(arr2);

let namesArr = combinedArr.filter(item => typeof item === 'string');

let newArr = namesArr.filter(name => name.startsWith('A'));

console.log(newArr);