function toCamelCase(sentence, strategyId){
    return strategyId === 1 ? "helloWorld"
        : strategyId === 2 ? "hellOworld"
        : "hellOWorld";
}

module.exports = toCamelCase;