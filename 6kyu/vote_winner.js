function getWinner(listOfBallots) {
    var sortedVotes = sortDuplicate(listOfBallots);
    var maxVoted = checkForTopVoted(sortedVotes)

    if (maxVoted.count > listOfBallots.length / 2) {
        return maxVoted.name;
    } else {
        return null;
    };
}

function checkForTopVoted(sortedVotes) {
    var maxVoted = {
        count: 0,
        name: ''
    };

    Object.keys(sortedVotes).map(function(voted) {
        if (maxVoted.count < sortedVotes[voted]) {
            maxVoted.count = sortedVotes[voted];
            maxVoted.name = voted;
        }
    })
    return maxVoted;

}
x

function sortDuplicate(array) {
    var objWithCnt = {};
    for (var i = 0; i < array.length; i++) {
        if (objWithCnt[array[i]]) {
            objWithCnt[array[i]]++;
        } else {
            objWithCnt[array[i]] = 1;
        }
    };
    return objWithCnt;
}

console.log(getWinner(['a', 'b', 'a', 'b', 'a', 'a', 'b', 'b', 'b']));

// Best. The use of filter is new. It's also smart that it's only checking more than half one instead of checking the maximum first.
function getWinner(list) {
    var result = {};
    var winNumber = list.length / 2;
    list.forEach(function(char) {
        ++result[char] || (result[char] = 1);
    });
    var answer = Object.keys(result).filter(function(key) {
        if (result[key] > winNumber) return key;
    });
    return answer[0] || null;
}