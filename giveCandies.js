function candies(kids) {
    if (kids.length <= 1) return -1;

    var maxKidCandies = Math.max.apply(null, kids);
    var totalDifferenceInCandies = 0;
    kids.map(function(candies) {
        totalDifferenceInCandies += maxKidCandies - candies;
    })
    return totalDifferenceInCandies;
}

console.log(candies([5, 8, 6, 4]));
console.log(candies([]));

// Best. Reduce and returning value might have looked cleaner

function candiesBest(kids) {
    if (kids.length < 2) return -1;

    var max = Math.max.apply(null, kids);
    var extraCandies = kids.reduce(function(total, kid) {
    	console.log(total, kid);
        return total + max - kid;
    }, 0);
    return extraCandies;
}
console.log(candiesBest([5, 8, 6, 4]));