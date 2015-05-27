function deleteNth(arr, x) {
    var numbers = arr.join('');

    // var regex = new RegExp("/(\w)\\" + x + "+/g");
    var regex = new RegExp(/(.)\1/g);
    var numbers = numbers.replace(regex, '');
    return numbers;
}

function deleteNthForLoop(arr, x) {
    var holder = [];
    var duplicateCheck = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
        	//console.log(arr[i]);
            if (arr[i] === arr[j]) {
                duplicateCheck++;
                if (x < duplicateCheck) {
                    holder.push(j);
                };
            };
        };
        duplicateCheck = 0;
    };
    console.log(holder);
    for (var i = holder.length - 1; i >= 0; i--) {
    	console.log(i);
        arr.splice(holder[i], 1);
    }
    return arr;
}

console.log(deleteNth([1, 2, 2, 2, 1, 4], 1));


// "aabcdd".replace(/(\w)\1+/g, function (str, match) {
//     return match[0]
// });