function vectorLength(vector){
	// Formulate is AB = sqrt((x2-x1)^2 + (y2-y1)^2)
	return Math.sqrt(Math.pow(vector[1][0] - vector[0][0], 2) + Math.pow(vector[1][1]-vector[0][1], 2))
}

console.log(vectorLength([[0, 3],[4, 0]]));

var ary = [1,2,3,4,5];
ary.map(function(m){
	console.log(m);
})