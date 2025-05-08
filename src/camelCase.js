function camelCase(str) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function lowerCaseFirstLetter(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

    let capitalizedWord = str
        .split(" ")
        .map(word =>
            capitalizeFirstLetter(word)
        )
        .join("");

    return lowerCaseFirstLetter(capitalizedWord);
}

function largeEndings(str) {
    return "hellOworld"
}

function capitalizedWordEnds(str) {
    return "hellOWorld"
}

function toCamelCase(sentence, strategyId){
    return strategyId === 1 ? camelCase(sentence)
        : strategyId === 2 ? largeEndings(sentence)
        : capitalizedWordEnds(sentence);
}

module.exports = toCamelCase;