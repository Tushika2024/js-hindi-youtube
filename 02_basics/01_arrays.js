// array->can contain elements of different datatypes

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)  add element at end
// myArr.push(7)  remove element end from end
// myArr.pop()

// myArr.unshift(9)  add start at begining
// myArr.shift()    remove from beg

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));  -1 if element not present 

// const newArr = myArr.join()  convert array to string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

//slice don't modify original array ,,,also last index not incl
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

//splice modifiy original array [1,2,3,4,5]=output=>[1,5]  ,,, also last index included
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
