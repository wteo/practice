// recursion should have 3 key features
// 1. A termination condition- used as a catch-all for bad-data
// 2. A base case - used as the goal of our recursive function
// 3. the recursion where the function is calling itself

//Example 1
function countDown(num) {
  if (num === 0) console.log(num) // termination condition
  if (num >= 0) { // base case
    console.log(num);
    return countDown(num - 1); // recursion 
  }
}

// Example 2
function sum(num) {
  if (num === 0) {
    console.log(num)
    return 0;
  }
  if (num > 0) {
    console.log(num)
    return num + sum(num - 1);
  }
}

// Example 3

const sonFamilyTree = {
  name      : "Bardock",
  children  : [{
              name      : "Son Goku / Kakkarot",
              children  : [{
                        name      : "Son Gohan",
                        children  : [{
                                    name      : "Pan",
                                    children  : []
                                    }]
                        }, {
                        name      : "Son Goten",
                        children  : []
                        }]
              },{
              name: "Raditz",
              children: []
              }]
  }

function findChildren(family) {
  if (family.children.length === 0) // termination condition - condition will terminate when person doesn't have a child
    return;
  family.children.forEach((person) => { // base case - looking for the names of the children borned to a parent
    console.log(person.name)
    findChildren(person); // the recursion
  })
}

console.log(findChildren(sonFamilyTree));