function solution(pairs){
  // TODO: complete
  var str = '';
  for(var key in pairs){
  	str += key + ' = ' + pairs[key] + ',';
  }
  return str.slice(0, -1);
}

console.log(solution({a: 1, b: '2'}));

function solutionBest(pairs){
  return Object.keys(pairs)
    .map(function(k) { return k + ' = ' + pairs[k] })
    .join(',');
}

console.log(solutionBest({a: 1, b: '2'}));