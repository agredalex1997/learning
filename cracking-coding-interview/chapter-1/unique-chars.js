function allUniqueChars(string) {
    chars = string.split("");

    uniqueChars = chars.filter((char, index) => {
        return chars.indexOf(char) === index;
    });

    return chars.length === uniqueChars.length;
}

console.log(allUniqueChars("hello"));
console.log(allUniqueChars("alex"));