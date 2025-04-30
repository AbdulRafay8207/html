    //CODWARS EXERCISE 1:

// function findAverage(array){
//   sum = 0
//   avg = array
//   if(avg.length === 0){
//     return 0
//   }
//   for(i=0;i<array.length;i++){
//     sum =sum+array[i]
//   }
//   avg = sum/array.length
//   return avg
  
// }

// array = [1,2,3,4,5]
// average = findAverage(array)
// console.log(average)

//CODWARS EXERCISE 2:------------------------------------------

// function abbrevName(name){
//   sep = name.split(" ")
//   sep = sep[0][0]+"."+sep[1][0]
//   return sep
// }

// testing = abbrevName("Sam Harris")
// console.log(testing);

// CODEWARS EXERCISE 5----------------------------
// function isItLetter(character) {
//     if((character >= "A" && character <= "Z") || (character >= "a" && character <= "z")) return true
//     else return false
//    }
//    console.log(isItLetter("T"));

// CODEWARS EXERCISE 6----------------------------

// function encode(str){
//     obj = {G:"A",A:"G",D:"E",E:"D",R:"Y",Y:"R",P:"O",O:"P",L:"U",U:"L",K:"I",I:"K"}
//     uppercase = str.toUpperCase()
//     encodeString = ""
//     for(i=0;i<uppercase.length;i++){
//       if(obj[uppercase[i]]){
//         encodeString += obj[uppercase[i]]
//       }else{
//         encodeString += uppercase[i]
//     } 
//   }
//   return encodeString
//   }
//   console.log(encode("asndjqwpipn"));

// CODEWARS EXERCISE 7-----------------

// function smallestInetger(arr){
//     let smallestValue = Infinity
//     for(i=0;i<arr.length;i++){
//       if(arr[i] < smallestValue){
//         smallestValue = arr[i]
//       }
//     }
//     return smallestValue
//   }
//   console.log(smallestInetger([1,-2,2,3,4,5]));

// CODWAR EXERCISE 8-------------
// function binrayToInterger(arr){
//     let array = arr.join("")
//     if(array === "0001"){
//       return 1
//     } else if(array === "0010"){
//       return 2
//     } else if(array === "0101"){
//       return 5
//     }else{
//       return "error"
//     }
//   }
//   console.log(binrayToInterger([0, 0, 1, 0]));

// CODEWAR EXERCISE 10------------------
// function reverseString(str){
//     reverse = ""
//     reverseArray = []
//     for(i=str.length-1;i>=0;i--){
//       reverse += str[i]
//     }
//     for(i=0;i<reverse.length;i++){
//       reverseArray.push(reverse.slice(i))
//     }
//     return reverseArray
//   }
//   console.log(reverseString("abcde"));

// CODEWARS EXERCISE 11-----------------------
// function occOfAnArray(arr,n){
//     let array = []
//     for(i=0;i<arr.length;i++){
//       if(arr[i] == n){
//         array.push(arr[i])
//       }
//     }
//     return array
//   }
//   console.log(occOfAnArray([6, 9, 3, 4, 3, 82, 11],3));

// CODEWARS EXERCISE 12----------------------------
// function digitize(n){
//     array = []
//     number = n.toString()
//     abc = ""
//     for(i=0;i<number.length;i++){
//       abc += number[i]
//     }
//     for(i=0;i<abc.length;i++){
//         l = parseInt(abc[i])
//         array.push(l)
//     }
//     return array
//   }
//   console.log(digitize(121231231231231233123));