// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const map = str
        .split('')
        .reduce((acc, item) => {
            acc[item] = acc[item] ? acc[item] + 1 : 1;
            return acc;
        }, {});

        let result = 0;
        for (let key in map) {
            result = map[key] > result ? key : result;
        }

    return result;
}

module.exports = maxChar;
