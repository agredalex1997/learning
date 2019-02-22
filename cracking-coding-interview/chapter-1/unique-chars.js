/**
 * Return true is all the chars in the string are unique, false otherwise
 *
 * @param {string} str a string
 */

function allUniqueChars(str) {
    chars = str.split("");

    uniqueChars = chars.filter((char, index) => {
        return chars.indexOf(char) === index;
    });

    return chars.length === uniqueChars.length;
}

console.log(allUniqueChars("hello"));
console.log(allUniqueChars("alex"));