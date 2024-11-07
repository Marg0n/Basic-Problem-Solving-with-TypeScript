{
  /*
    
    Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    // Sample Input:
    sumArray([1, 2, 3, 4, 5]);

    // Sample Output:
    15;
    
    */

  let sumArray = (arr: number[]): number => {
    let sum : number = 0;

    arr.forEach((i) => {
      sum = sum + i;
    });
    // console.log("baire", sum);
    return sum;
  };

  sumArray([1, 2, 3, 4, 5]);
}
