/**
 * Return true if the strings are anagram, false otherwise
 *
 * @param {string} str1 some string
 * @param {string} str2 some string
 */

function anagrams(str1, str2) {
    str1array = str1.split("").sort();
    str2array = str2.split("").sort();

    if (str1array.length !== str2array.length) {
        return false;
    }

    for (let i = 0; i < str1array.length; i++) {
        if (str1array[i] !== str2array[i]) {
            return false;
        }
    }

    return true;
}

console.log(anagrams("hola", "halo"));
console.log(anagrams("hola", "ola"));