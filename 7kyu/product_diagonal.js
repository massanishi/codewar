function mainDiagonalProduct(mat){
  // ...
 	var product = 1;
 	for (var i = 0; i < mat.length; i++) {
 	 	product *= mat[i][i];
 	 }; 
 	 return product;
}

console.log(mainDiagonalProduct([[1,0], [0,1]]));

// Best
// reduce takes in array and taken cb arguments as first number, second number, and index of current array. The second argument is initial value. It starts with 1 in this case.
function mainDiagonalProduct(mat){
  return mat.reduce(function(n, v, i){ return n * v[i] }, 1);
}