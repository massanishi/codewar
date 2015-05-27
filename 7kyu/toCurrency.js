function toCurrencyDummy(price) {
    //your code here
    price = price.toString();
    var str = '';
    for (var i = price.length - 1; 0 <= i; i--) {
        console.log(i);
        str += i % 3 !== 0 ? price[i] : price[i] + ',';
    };
    return str;
}

function toCurrency(price) {
    price = price.toString();
    price = reverse(price);
    console.log(price);
    var coronedString = price.match(/.{1,3}/g).join(',');
    coronedString = reverse(coronedString);
    return coronedString;
}

function reverse(string) {
    return string.split("").reverse().join("");
}


function toCurrencyLoop(price) {
    var str = price = price.toString();
    var chunks = [];

    for (var i = 0, charsLength = str.length; i < charsLength; i += 3) {
        chunks.push(str.substring(i, i + 3));
    }
    return chunks.join(',');
}

// Best.
// $ makes it count from backward
// + makes sure the next matches is the multiples of the former group.
// (\d{3}) takes in 3 digits as a group
// ?= look ahead not mkaing this group part of the regex match
// (\d) match a digit
function toCurrencyBest(price) {
    return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

console.log(toCurrencyBest(123456789));