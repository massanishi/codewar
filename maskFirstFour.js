// return masked string
function maskify(cc) {
	if(cc.length <5) return cc;
	var cleanStr = cc.substr(cc.length-4, cc.length);
	var hash = '';
	for (var i = 0; i < cc.length-4; i++) {
		hash += "#"
	};
	return hash + cleanStr;
  // return cc.splie('') replace((/.{4}.$/g), '#');
  
  // return cc.replace((/^\d{3}[a-zA-Z0-9]/g), '#');
}

console.log(maskify('4123dda'));

// Best 
// return masked string

function maskify2(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

function maskify3(cc) {
  return cc.replace(/.(?=....)/g, '#');
}

console.log(maskify2('da'));
console.log(maskify3('da'));