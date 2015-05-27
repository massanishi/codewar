//This function should return n!
function factorial (n) {
  if (n<0) {
    return null;
  }else if(n ===0){
    return 1;
  };  
  return n * factorial(n-1);

}



// Best solution
// It's shorter and clean code. Also, if n was negetive he ignores it completely where function automatically return undefined. It would have been perfect if the question stated you need to return null, not undefined. Falsy answer.
function factorial2 (n) {
  if (n > -1)
    return n == 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(-1));