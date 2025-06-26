//Import and Export Methods----------------------\

// function sum(a,b){
//     return a+b
// }

// function subtract(a,b){
//     return a-b
// }

// function multi(a,b){
//     return a*b
// }

// function div(a,b){
//     return a/b
// }

// export default{
//     sum,
//     subtract,
//     multi,
//     div
// }

// 2nd method----------------------\----------------------\

// function sum(a,b){
//     return a+b
// }

// function subtract(a,b){
//     return a-b
// }

// function multi(a,b){
//     return a*b
// }

// function div(a,b){
//     return a/b
// }

// module.exports = {
//     sum,
//     subtract,
//     multi,
//     div
// }

//------------------------------------------------------------------

// module.exports = {
//     createServer (callback){
//         return {
//             callback({}, {}){}
//         }
//     }
// }

//---------------------------------------------------------

url = "http://localhost:3000/users?active=true&course=psdc"

q1 = url.split("?")
q2 = q1[1].split("&")
console.log(q1, q2);


