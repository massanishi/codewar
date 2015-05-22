function zipvalidate(postcode){
	// ^ means the match starts at the first character
	// \d means it contains digits
	// {6} means there must come 6 digits squence wise.
	// $ means there is nothing to be followed after that 6 digits
  return new RegExp(/(^\d{6}$)/).test(postcode) && !new RegExp(/^([05789])/).test(postcode);
  //return new RegExp(/^([05789])/).test(postcode);
}


// Best. It went not excluding by simply requiring. Also note that bracket is reduced to 5 since first letter is already tested.
function zipvalidateBest(postcode){
  return /^[12346]\d{5}$/.test(postcode)
}

console.log(zipvalidateBest('219221'));