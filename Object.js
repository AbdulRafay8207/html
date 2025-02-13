//To add something in object we use:
obj1 = {
  name : "rafay",
}
obj1.age = 18
// console.log(obj1)

//To remove something from object use:
obj2 = {
  name : "rafay",
  age : 18
}
delete obj2.age
// console.log(obj2);

//To modify something use same format like object:
obj3 = {
  name : "rafay",
  age : 18
}
obj3.name = "AbdulRafay"
// console.log(obj3)

//To concate or merge something use: "prefered method"
obj3 = {
  name : "rafay",
  age : 18,
  class : 11,
}
fullinfo = `${obj3.name} ${obj3.age} ${obj3.class}` //You can even modify it
// console.log(fullinfo)

//Another method
fulinfo = obj3.name+obj3.age+obj3.class
// console.log(fulinfo)

//TYPE CASTING
//To convert from string to number type


a = "18"
b = Number(a)
console.log(a)
console.log(b)
console.log(typeof a)
console.log(typeof b)

