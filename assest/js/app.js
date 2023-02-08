var cl = console.log;

// Higher Order Function is a function which accepts another function as parameter or arguments.
//CallBackFunction is a function which is passed as a parameter or arguments inside another function.
//arrayName.forEach(callBackFunction(para){ //para >> It will gives us each and every elements of array one by one })
// let arr = [1,2,3,4,5,6,7,8,9,10];
//  for( let i= 0; i<arr.length; i++){
//      if(i % 2 === 0){
//          cl(arr[i]);
//      }
//  } 
// arr.forEach((e) => {
//     if (e % 2 !== 0){
//         cl(e);
//     }
// })
let ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];
// lastIndex = ages.length-1;
// doubleAges
let doubleAges = [];
// for(let i=0; i<ages.length; i++){
//     cl(ages[i] * 2)
// }
//  ages.forEach(ele => {
//     doubleAges.push(ele * 2)
// })
// cl(doubleAges)
// MAP METHOD
// usecase of map method
// you have given array 
// you have to create new array from given array
// you have to apply same functionality of each and every element of given array
// it returns new array
// lenght of new array === lenght of given array
// arrayname.map(callback function(para){
//     para >> it returns each and every elements of an array
// })
//  doubleAges =ages.map(function (age){
//      return age * 2;
// })
// cl(doubleAges)
// doubleAges = ages.map( age =>  age * 2);
// cl(doubleAges)
// SQUARE ROOT
let sqrtAges = [];
// for(let i=0; i<ages.length; i++){
//     sqrtAges.push(Math.sqrt(ages[i]))
// }
// cl(sqrtAges);
// ages.forEach(function(ele){
//     sqrtAges.push(Math.sqrt(ele))
// })
// cl(sqrtAges);
// ages.forEach( ele => sqrtAges.push(Math.sqrt(ele)))
// cl(sqrtAges);
//  sqrtAges = ages.map(function(ele){
//     return Math.sqrt(ele)
//  })
//  cl(sqrtAges);
//  sqrtAges = ages.map(ele => Math.sqrt(ele))
//  cl(sqrtAges)
let companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
let compNameOnly = []

//using for loop                  
// for( let i=0; i<companies.length; i++){
//     compNameOnly.push(companies[i].name)
// }

// companies.forEach(function(ele){
//     compNameOnly.push(ele.name)
// })

// companies.forEach(ele => compNameOnly.push(ele.name))

// compNameOnly = companies.map(function(ele){
//     return ele.name
// })
compNameOnly = companies.map(ele => ele.name)
cl(compNameOnly)

//[{conpName : "company one", start : 1998}]
let compStart = [];

// for( let i = 0; i<companies.length; i++){
//     compStart.push({
//         compName : companies[i].name,
//         start : companies[i].start
//     })
// }
// cl(compStart)

// companies.forEach(function(ele){
//     compStart.push({
//         compName : ele.name,
//         start : ele.start
//     })
// })

// companies.forEach((ele) => {
//     compStart.push({
//         compName : ele.name,
//         start : ele.start
//     })
// })

// companies.forEach(ele => 
//     compStart.push({
//         compName : ele.name,
//         start : ele.start
//     })
// )

//  compStart = companies.map(function(ele){
//     return {
//         compName : ele.name,
//         start : ele.start
//     }
//  })
// cl(compStart)

// let newArrOfCopm = companies.map(ele => {
//     return {
//         compName : ele.name,
//         start : ele.start
//     }
// })

let newArrOfCopm = companies.map(ele => (
    {
        compName: ele.name,
        start: ele.start
    }
))
cl(newArrOfCopm)


let compDuration = [];

// for(let i=0; i<companies.length; i++){
//     compDuration.push({
//         CompName : companies[i].name,
//         Duration : companies[i].end - companies[i].start
//     })
// }

// companies.forEach(function(ele){
//     compDuration.push({
//         StartName : ele.name,
//         Duration : ele.end - ele.start
//     })
// })

// companies.forEach(ele => compDuration.push({
//     compName : ele.name,
//     Duration : ele.end - ele.start 
// }))

// compDuration = companies.map(function(ele){
//     return {
//         compName : ele.name,
//         Duration : ele.end - ele.start
//     }
// })

compDuration = companies.map(ele => (
    {
        compName: ele.name,
        Duration: ele.end - ele.start
    }
))
cl(compDuration);

// let categoryInfo = [] = companies.map(ele => (
//     {
//         compName : ele.name,
//         category : ele.category
//     }
// )) 
// cl(categoryInfo)

// let categoryInfo = [];
// companies.forEach(ele => categoryInfo.unshift({
//     compName : ele.name,
//     category : ele.category
// }))
// cl(categoryInfo)

// filter  >> return array
// you have a given array and atleast one condition
// you have to create new array of elements (of given array), who pass/satisfy the given condition
// length of new array is may or may not be equal of given array

ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];
let adultAges = [];

// for(let i=0; i<ages.length; i++){
//     if(ages[i] >= 18){
//         adultAges.push(ages[i])
//     }
// }

// ages.forEach(ele => {
//    if(ele >= 18){
//      adultAges.push(ele)
//    }
// })

// using filter method
// adultAges = ages.filter(function (age){
//     if(age >= 18){
//         return true   
//     }else{
//         return false
//     }
// })

// adultAges = ages.filter(function (age) {
//     return (age >= 18)
// })

adultAges = ages.filter(age => age >= 18)
cl(adultAges)

// using companies array
let compRetail = []
// for(let i = 0; i<companies.length; i++){
//     if(companies[i].category.toLowerCase().trim() === 'retail'){
//         compRetail.push(companies[i])
//     }
// }

// companies.forEach(function(ele){
//     if(ele.category.toLowerCase().trim() === 'retail'){
//         compRetail.push(ele)
//     }
// })

// companies.forEach(ele => {
//     if(ele.category.toLowerCase().trim() === 'retail'){
//         compRetail.push(ele)
//     }
// })

// compRetail = companies.filter(ele => {
//     return ele.category.toLowerCase().trim() === 'retail'
// })

compRetail = companies.filter(ele => ele.category.toLowerCase().trim() === 'retail')
cl(compRetail);

// condition based duration of company
let compAtLeast10 = []
// for (let i = 0; i < companies.length; i++) {
//     if (companies[i].end - companies[i].start >= 10) {
//         compAtLeast10.push({
//             compName : companies[i].name,
//             category : companies[i].category
//         })
//     }
// }
//  companies.forEach(ele => {
//      if(ele.end - ele.start >= 10){
//          compAtLeast10.push({
//             compName : ele.name,
//             category : ele.category
//          })
//      }
//  })
//  cl(compAtLeast10)

compAtLeast10 = companies.filter(ele => ele.end - ele.start >= 10).map(ele => ({ CompName: ele.name, category: ele.category }))
cl(compAtLeast10)

//  the companies, who started in between 1980 to 1989
// [{compName: 'Company One', lifeSpend: '1981 2003'}] 
let comp80s = [];
// for(let i=0; i<companies.length; i++){
//     if(companies[i].start >= 1980 && companies[i].start <= 1989){
//         comp80s.push({
//             compName : companies[i].name,
//             Duration : `${companies[i].start} ${companies[i].end}`
//         })
//     }
// }

// companies.forEach(ele => {
//     if (ele.start >= 1980 && ele.start <= 1989) {
//         comp80s.push({
//             compName: ele.name,
//             Duration: ele.end - ele.start`
//         })
//     }
// })
comp80s = companies.filter(ele => (ele.start >= 1980 && ele.start <= 1989)).map(ele => ({ compName: ele.name, Duration: ele.end - ele.start }))
cl(comp80s)

let compFinance = [];
// for(let i = 0; i < companies.length; i++){
//     if(companies[i].category.toLowerCase().trim() === 'finance'){
//         compFinance.push({
//             compName : companies[i].name,
//             LifeSpend : `${companies[i].start} - ${companies[i].end}`,
//         })
//     }
// }
// companies.forEach(ele => {
//     if(ele.category.toLowerCase().trim() === 'finance'){
//         compFinance.push({
//             compName : ele.name,
//             lifeSpend : `${ele.start} - ${ele.end}`
//         })
//     }
// })
compFinance = companies.filter(ele => ele.category.toLowerCase().trim() === 'finance').map(ele => ({ CompName: ele.name, lifeSpend: `${ele.start} - ${ele.end}` }))
cl(compFinance)

// FIND()  >> return object
// you have given a array and one condition
// and we have to find object which is passed in given condition

companies = [
    { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: "2", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: "4", category: "RetAil", start: 1989, end: 2010 },
    { name: "Company Five", id: "5", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: "8", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: "9", category: " retail ", start: 1981, end: 1989 }
];

let givenId = 4
let getObj;
// companies.forEach(comp => {
//     if(Number(comp.id) === givenId){
//         getObj = comp;
//     }
// })

// find()    >>if conditon get fullfill then find() method stop the execution
// filter()  >>if conditon get fullfill then also filter() method get itrate till end
getObj = companies.find(comp => {    // find method is used to find the condition 
    return +comp.id === givenId
})
cl(getObj)

// reduce()
ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];

totalAges = 0;
// ages.forEach(age => {
//     totalAges += age
// })

totalAges = ages.reduce((accum, nxtVal) => accum = accum + nxtVal)
cl(totalAges)

let mulAges = ages.reduce((mul, nextVal) => mul *= nextVal)
cl(mulAges)

let compDur = companies.reduce((accu, dur) => {
    accu.push({
        compName: dur.name,
        Duration: dur.end - dur.start
    })
    return accu
}, [])
cl(compDur)

let compAge = companies.reduce((age, next) => {
    return age += next.end - next.start
}, 0)
cl(compAge)