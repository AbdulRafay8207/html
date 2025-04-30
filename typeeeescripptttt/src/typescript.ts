function getFirstItem<T>(arr: T[]): T {
    return arr[0];
  }
  
  const firstNum = getFirstItem([1, 2, 3]);      // number
  const firstStr = getFirstItem(["a", "b", "c"]); // string
  console.log(firstNum);
  console.log(firstStr);
  
  