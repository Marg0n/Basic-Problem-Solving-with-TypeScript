{
    /*
    
    Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

    // Sample Input:
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));

    // Sample Output:
    true;
    
    */

    interface T {
        name: string;
        age: number;
        email: string;
      }

    const validateKeys = (obj: T, keys: (keyof T)[]) : boolean =>{

        let booleanValue : boolean = false;
        console.log(keys)

        keys.forEach(key => {
            // console.log(key, obj[key], key in obj)

            // matches with bool if the key of array/keys with the key of the object
            if(key in obj) booleanValue = true;
            else booleanValue = false;
            // console.log(booleanValue);
        })
        // console.log('baire',booleanValue);

        return booleanValue;
    };


    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
}