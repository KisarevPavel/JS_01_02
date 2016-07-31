var num = prompt("Укажите число");
var degree = prompt("Укажите степень");


pow(num,degree);


function pow(num, degree){
	var i;
	var result = 1;	
	
		if( num == 0 ){
			console.log(0);
			return
			}
		
		if ( degree == 0 ){
			console.log(1);
			return
			}
			
		if ( degree > 0){
			  for (i = 1; i <= degree; i++)
				  {
					  result *= num;
				  }
			  console.log("FINAL RESULT = ",result);
			}
			
		if ( degree < 0){
			degree *= -1;
			  for (i = 1; i <= degree; i++)
				  {
					  result *= num;
				  }
			  result = 1/result;
			  console.log("FINAL RESULT = ",result);
			}

	}