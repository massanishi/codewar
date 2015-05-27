function powers(list) {
  // Program me!
  return Math.power(2, list.length);

} 


function makeArrayForEachIndex(array){
	var arrayWithEachIndex = []; 
	for (var i = 0; i < array.length; i++) {
		var indexNum = array[i];
		arrayWithEachIndex.push([indexNum]);
	};
	console.log(arrayWithEachIndex);
}

function makeSubsetOfArray(array){
	var arrayWithEachIndexSubset = []; 
	for (var i = 0; i < array.length; i++) {
		for (var j = i+1; j < array.length; j++) {
			console.log(j);
			arrayWithEachIndexSubset.push([array[i],array[j]]);
		};
	};
	console.log(arrayWithEachIndexSubset);
}

function makeSubsetOfArray4Columns(array){
	var arrayWithEachIndexSubset = []; 
	for (var i = 0; i < array.length; i++) {
		for (var j = i+1; j < array.length; j++) {
			for (var k = j+1; i < array.length; i++) {
				array[i]
			};
			console.log(j);
			arrayWithEachIndexSubset.push([array[i],array[j]]);
		};
	};
	console.log(arrayWithEachIndexSubset);
}

function potentialSubset(array) {
	var magicalNum = array.length -1;
	var previousNum = 0;
	var holder = 0;
	for (var i = 1; i <= magicalNum; i++) {
		holder += i + previousNum;
		previousNum = i + previousNum;
	};
	var additional = array.length +1
	holder+= additional;
	return holder;
}

// makeArrayForEachIndex([1,2,3])
//makeSubsetOfArray([1,2,3,4])
console.log(potentialSubset([1,2,3,4,5]));