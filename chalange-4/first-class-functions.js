function interviewQuestion(job) {
   if(job === 'programmer') {
   	  return function(name) {
   	  	console.log(name + ' , what does algorythm mean?');
   	   }
   	  } else if (job === 'coach') {
   	  	return function(name) {
   	  		console.log('What is your fav exercise ' + name + '?');
   	  	}
   	  }
   }

var interviewOfProgrammer = interviewQuestion('programmer');
interviewOfProgrammer('Ksena');
var interviewOfCoach = interviewQuestion('coach');
interviewOfCoach('Max');
