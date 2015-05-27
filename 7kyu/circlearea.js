var circleArea = function(radius) {

	if (radius>0) {
		radius += parseFloat((radius * radius * Math.PI).toFixed(2));
		return radius;
	};
	return false;
};

console.log(circleArea(68));