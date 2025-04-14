//    TASk ARRAY

library = [{title : "JungleBook", author : "Ahmed", yearPublished : 2015 },
           {title : "Mathematics", author : "Abdul", yearPublished : 2018},
           {title : "English", author : "John", yearPublished : 2022}]

library.push({title : "Computer", author : "Rafay", yearPublished : 2024}) // push new book

for(i = 0; i < library.length; i++){
if(library[i].title == "Computer"){  // finding specific book
   // console.log(library[i])
}
}
library.splice(1,1)         //removing 1 book
// console.log(library) 

library[1].yearPublished = 2014 //Updating year 
console.log(library)