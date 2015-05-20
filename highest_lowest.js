

function highAndLow(numbers){
	var numAry = numbers.split(' ');
	for (var i = 0; i < numAry.length; i++) {
		numAry[i] = parseInt(numAry[i]);
	};
	return Math.max.apply(null, numAry).toString() +" " + Math.min.apply(null, numAry).toString();
	
}

function bubbleSort(numbers){
	var numAry = numbers.split(' ');
	for (var i = 0; i < numAry.length; i++) {
		numAry[i] = parseInt(numAry[i]);
	};

	for (var i = 0; i < numAry.length; i++) {
		for(var j = 0; j< numAry.length -i; j++){
			if (numAry[j] > numAry[j+1]) {
				var temp = numAry[j];
				numAry[j] = numAry[j+1];
				numAry[j+1] = temp;
			};
		}
	};
	return numAry;
}

console.log(highAndLow('0 4 2 3 -1'));
//console.log(bubbleSort('0 4 2 3 -1'));









