function sillycase(silly) {
    //your code
    var firstHalfCnt = Math.ceil(silly.length / 2);
    var lowerStr = silly.substr(0, firstHalfCnt).toLowerCase();
    var upperStr = silly.substr(firstHalfCnt).toUpperCase();
    return lowerStr + upperStr;
}

console.log(sillycase('codewars'));