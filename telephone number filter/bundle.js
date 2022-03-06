(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const phoneFormatter = require("phone-formatter");

const clean = (data) => {
    const tel = phoneFormatter.normalize(data);
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
console.log(clean("999.999.9999"));


},{"phone-formatter":2}],2:[function(require,module,exports){
module.exports = {
  
  normalize: function extract(phoneNumber) {

    return phoneNumber.replace(
      /^[\+\d{1,3}\-\s]*\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      "$1$2$3"
    );

  },

  format: function format(phoneNumber, formatString, options) {

    // Normalize the phone number first unless not asked to do so in the options
    if (!options || !options.normalize) {
      phoneNumber = this.normalize(phoneNumber)
    };

    for ( var i = 0, l = phoneNumber.length; i < l; i++ ) {
      formatString = formatString.replace("N", phoneNumber[i]);
    }
  
    return formatString;

  },

};

},{}]},{},[1]);
