// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I: function takes in a string
O: function returns a number of the length of the inout string
C: NA
E: NA
*/



function length(string) {
    // YOUR CODE BELOW HERE //
    
    // return the input string's length
  
    return string.length;

    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   
 return string.toLowerCase()   

    // YOUR CODE ABOVE HERE //
}


/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

return string.toUpperCase()

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

  return string.replace(/\s+/g, '-').toLowerCase()

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
/*
I: given input string and a single character
O: return true if string begins with character, false otherwise
C: case insensitive
E: NA
*/
    // YOUR CODE BELOW HERE //
/*
    // set string and char to lowercase
    var newString = string.toLowerCase()
    console.log(newString)
    var newChar = char.toLowerCase()
    console.log(newChar)
    // return true if string begins with char
    if (newString[0] === newChar){
        return true
    } else {
        return false
    }
    // return false if not equal
    
*/
   return string[0].toLowerCase() === char.toLowerCase()
    // YOUR CODE ABOVE HERE //
}

console.log(beginsWith("Christian", "c"))

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

return string[string.length - 1].toLowerCase() === char.toLowerCase()

    // YOUR CODE ABOVE HERE //
}

console.log(endsWith("Christian", "c"))

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

return stringOne + stringTwo

    // YOUR CODE ABOVE HERE //
}
console.log("christian","Hermann")

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    console.log(args)
    return args.join('')

    // YOUR CODE ABOVE HERE //
}
console.log(join("Christian","Hermann", "he", "her"))

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
/*
I: given two strings
O: return the longest string 
C: NA
E: what if they're the same length
*/
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

// find lengths of the strings

// compare the lengths of the strings
if (stringOne.length > stringTwo.length){
    return stringOne
} else {
    return stringTwo
}
// return the longest string


    // YOUR CODE ABOVE HERE //
}

console.log(longest("Christian", "Kit"))

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/*
I: given two strings
O: return 1 if first string is higher in alphabetical order than second string
   return -1 if second string is higer in alphabetical order than first string
   return 0 if equal
C: NA
E: NA
*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

 return stringTwo.localeCompare(stringOne)
  

r

    // YOUR CODE ABOVE HERE //
}
console.log(sortAscending("Chritian", "Hermann"))


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

return stringOne.localeCompare(stringTwo)


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}