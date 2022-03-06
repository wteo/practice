import {normalize} from "./node_modules/phone-formatter/index-copy.js";

const clean = (data) => {
    const tel = normalize(data);
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

console.log(clean("+1 (212) 555-1212"));
console.log(clean("211.819.9801"));

