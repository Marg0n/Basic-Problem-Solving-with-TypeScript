{
    /*
    
    Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

    // Sample Input 1:
    const car = new Car("Honda", "Civic", 2018);
    car.getCarAge();

    // Sample Output 1:
    6 (assuming current year is 2024)
    
    */

    class Car {

        // constructor
        constructor(public readonly name : string, public readonly model: string, public year: number){}

        getCarAge(){
            // get the current year
            const date = new Date().getFullYear();

            // difference between the current year and the car's year
            let yearDiff = date - this.year;

            console.log(yearDiff)

            return yearDiff;
        }
    }

    const car = new Car("Honda", "Civic", 2018);
    car.getCarAge();
}