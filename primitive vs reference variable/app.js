// In JS< variables can be stored in 2 types of data: 
// i. Primitive; or 
// ii. Refernece
// If value is a number, string, boolean, undefined, unll or symbol, it's primitive.
// All primitives are immutable.
// Anything else, it's reference. i.objects. arrays, functions.
// Primities refer to the store of the value itself. Reference refers to the location of the object in memory

let colour = "green";
let colour2 = "green"

//console.log(colour);
//console.log(colour2);
//console.log(colour===colour2); // Both has the value "green". Hence, true.

let person = {
    name : "Amy", 
    age  : 12
}

let person2 = {
    name : "Amy",
    age  : 12
}

//console.log(person); // {name : Amy, age : 12}
//console.log(person2); // {name : Amy, age : 12}
//console.log(person === person2);  // Both variable has the same properties and values. 
                                    // Though, still saved in different locations of computer memory. 
                                    // Hence, false.