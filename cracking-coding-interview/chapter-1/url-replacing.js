/**
 * Replaces all the spaces from the string with "%20"
 *
 * @param {string} url A string
 */

function urlReplacing(url) {
    return url.replace(/ /ig, "%20");
}

console.log(urlReplacing("https://www.example.com/my first post"));