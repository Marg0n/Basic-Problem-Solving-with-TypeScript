{
  /*
    
    Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    // Sample Input 1:
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

    // Sample Output 1:
    78.54;

    // Sample Input 2:
    const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
    });

    // Sample Output 2:
    24;

    */

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  const calculateShapeArea = (value: Circle | Rectangle): number => {
    let result: number = 0;

    // Type guard for rectangle
    if (value["shape"] == "rectangle") {
      result = value["width"] * value["height"];
    }
    // Type guard for circle
    else if (value["shape"] == "circle") {
      result = Math.PI * value["radius"] * value["radius"];
    //   result = Math.PI * value["radius"] * value["radius"].toFixed(2);
    } else {
      console.log("only circle and rectangle is allowed!");
    }

    // console.log(result, typeof result, Math.PI.toFixed(2));

    return result;
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
}
