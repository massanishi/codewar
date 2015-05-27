
String.prototype.toJadenCaseDoesNotWork = function () {
  //expression \b recognizes ' like I'll as the break point making it I'Ll.
  var upCase = '';
  upCase += this.toString().replace(/\b./g, function(a){
  	return a.toUpperCase();
  })
  return upCase;
};

String.prototype.toJadenCase = function () {
  //...
  var upCase = '';
  upCase += this.toString().replace(/\S\w*/g, function(a){
  	return a[0].toUpperCase() + a.slice(1, a.length);
  })
  return upCase;
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
