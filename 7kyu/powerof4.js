function powerOf4(n) {
	var power = Math.log(n)/Math.log(4);
	if ((power%1) === 0 && power > 0) {
		return true;
	};
	return false;
}

console.log(powerOf4(1));
// console.log(Math.pow(1024, 1/4));
// console.log(Math.pow(4, 5));

// Best. I didn't need to use logarithm. 
function powerOf4(n) {
    if (n < 4) return false;
    while ( n >= 4) n /= 4;
    return n === 1;  
}