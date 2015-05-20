function solution(str, ending){
  // TODO: complete
  var strCnt = str.length -1;
  if (ending.length===0) {
  	return false;
  };
  for(var i = ending.length - 1; i >= 0; i--){
  	console.log(str.charAt(strCnt));
  	console.log(ending.charAt(i));
  	if (str.charAt(strCnt) !== ending.charAt(i) ){
  		return false;
  	};
  	strCnt --;
  }
  return true;
}



function bestSolution(str, ending){
  return new RegExp(ending+"$", "i").test(str);
}

console.log(bestSolution('test', 'st'));
