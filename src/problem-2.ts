{
  /*

    Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
    
    // Sample Input:
    removeDuplicates([1, 2, 2, 3, 4, 4, 5])

    // Sample Output:
    [1, 2, 3, 4, 5]

    */

  const removeDuplicates = (arr: number[]): number[] => {
    let array1: number[] = [];

    arr.forEach((value: number) => {
      //   console.log(value,"=", array1.includes(value));

      // check if array's value is inside the array or not
      if (!array1.includes(value)) {
        // console.log("ki pai?", value);
        array1.push(value);
      }
    });

    // console.log("baire", array1);
    return array1;
  };

  removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
}
