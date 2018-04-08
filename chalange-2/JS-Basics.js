
 var currYear = 2018;
  function printFullAge(years) {
    var ages = [];
   
    var fullAges = [];
  	for(i = 0; i < years.length; i++) {
	console.log(ages.push(currYear - years[i]));
    }

    for(i = 0; i < ages.length; i++) {
   	  if(ages[i] >= 18) {
   		console.log('Person is ' + ages[i] + ' old and is of full age');
   		fullAges.push(true);
    	} else {
   		console.log('Person is ' + ages[i] + ' old and is NOT of full age');
   		fullAges.push(false);
   	}
   	return fullAges;
   }
  
  }
    var years = [1997, 2000, 2003, 1999, 1990];
    var vect_1 = printFullAge(years);
    