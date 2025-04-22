function fill_gaps(inputArray) {
    // [1, null, 2, null, 2, null, 1]
    function getNameOfClosedBracket(startIndex){
        for (let i = startIndex; i < inputArray.length; i++){
            let currentValue = inputArray[i];
            if (currentValue !== null){
                return currentValue;
            }
        } 
        return null;
    }
    let outputArray = [];
    let bracketName = undefined;
    for (let i = 0; i < inputArray.length; i++) {
        let currentValue = inputArray[i];
        if (currentValue !== null) {
            bracketName = currentValue;
            outputArray.push(bracketName);
        } else {
            let closedBracketName = getNameOfClosedBracket(i);
            outputArray.push(
                closedBracketName !== bracketName? currentValue : bracketName);
        }
    }
    return outputArray;
}

module.exports = fill_gaps;