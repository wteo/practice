// Example of a closure, 
// It's a combination of a func bundled together with refs to its surrounding state (the lexical environment).

function callName () {
    let name = "John";
    function greet() {
       console.log(`Hi, ${name}!`);
    }
    greet();
    greet();
    greet();
}

// const callJohn3Times = callName(); // cannot make callName function a variable as it hasn't returned a value.

// Example of a closure.

function call () {
    let name = "John";
    function greet() {
       return `Hi, ${name}!`;
    }
    return greet();
}

let greet = call();

// Main difference, inner function is returned from outer function before being executed.
// Purpose of closure is to gain access to the variables found outside its scope.

function multiply (x, y) {
    return function multiply2 (a, b) {
        return [a*x, b*y]
    }
}

const result1 = multiply(2,2); // the arguments references to the outer function arguments first, which are x & y.
const result2 = multiply(3,3);

// then, you call on the inner function arguments on the second round.

result1(2,8); // 4,16
result2(6,2); // 18,6

// Closures are useful as a one-size fit all function with multiple purposes / ranges for a func
// The example below allows you to check on the eligibility of a person to do something based on his/her age. 

function ageEligibility(min, max) {
    return age = (personAge) => {
      return (personAge < min || personAge > max) ? "Not eligible." : "Eligible.";
    }
  }
  
  const canDrive = ageEligibility(16, 65);
  const canWork = ageEligibility(15, 75);
