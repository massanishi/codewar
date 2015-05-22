function spy(func) {
  return function(input){
  	this.hi = 1; 
  	var report = function(){
  		console.log(input);
  		return {
  			totalCalls : input
  		}
  	}
  	console.log('this.report');
  	return report;  
  }
}

var spied = spy(function(){});

spied(1);
console.log(spied.hi);
var report = spied.report(); 
console.log(report.totalCalls === 1); //The total number calls
