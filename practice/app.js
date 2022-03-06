const phoneFormatter = require('phone-formatter');

let string = "1 (223) 056-7890";


const clean = (data) => {
    const tel = phoneFormatter.normalize(data);
    console.log(tel);
    if (tel.length > 11) throw new Error("More than 11 digits");
    if (tel.length < 10) throw new Error("Incorrect number of digits");
    if (tel.match(/[A-Z]/gi)) throw new Error("Letters not permitted");
    if (tel.match(/[@:!]/gi)) throw new Error("Punctuations not permitted");
    if (tel[0] !== "1" && tel.length === 11) throw new Error("11 digits must start with 1");
    if (tel[0] === "1" && tel.length === 11) {
        if (tel[1] === "0" ) throw new Error("Area code cannot start with zero");
        if (tel[1] === "1") throw new Error("Area code cannot start with one");
        if (tel[4] === "0") throw new Error("Exchange code cannot start with zero");
        if (tel[4] === "1") throw new Error("Exchange code cannot start with one");
        return tel.slice(1);
    };
    if (tel.length === 10) {
        if (tel[0] === "0" ) throw new Error("Area code cannot start with zero");
        if (tel[0] === "1") throw new Error("Area code cannot start with one");
        if (tel[3] === "0") throw new Error("Exchange code cannot start with zero");
        if (tel[3] === "1") throw new Error("Exchange code cannot start with one");
    };
    return tel;
  };

console.log(clean(string));
