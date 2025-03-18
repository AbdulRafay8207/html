function findAverage(array){
  sum = 0
  for(i=0;i<array.length;i++){
    sum =sum+array[i]
    avg = sum/array.length
    
    
    console.log(sum)
    console.log(avg)
    
  }
  
}

array = [2,4,6,8,10]// sum is 30 and avg is 6
findAverage(array)