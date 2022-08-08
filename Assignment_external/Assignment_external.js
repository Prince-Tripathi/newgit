const lodash = require('lodash')
//1
//const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//let monthResult =lodash.chunk(month,3)
console.log(monthResult)
req.send(monthResult)

//2
//Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console
// let oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// let newPr = lodash.tail(oddNum, n=4)
// console.log(newPr)
//res.send(newPr)

//3
// Create 5 arrays of numbers containing a few duplicate values. Using the function union 
// create a merged array with only unique values and print them on console
// const arr = [22,33]
// const arr2= [44,55,33]
// const arr3= [66,77,88,22]
// const arr4= [33,999,222,777]
// const arr5= [66,888,222];
// let result = lodash.union(arr, arr2, arr3, arr4, arr5);
// console.log(result)
// res.send(result)

// 4
// const movieName = [["Horror", "Tumbad"],["Drama","Saat Uchakke"],["RealLife", "No One Killded Jessica"],["Murder", "Talwar"]];
// let mName = lodash.fromPairs(movieName)
// console.log(mName)
