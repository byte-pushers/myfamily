	
	function validateMyForm(){
<<<<<<< HEAD

		 var valid = true; 
		 var validationMsg = "Please correct the following errors: \r\n";
		
		if(document.getElementById('firstnam').value.length == 0){
			validationMsg = validationMsg + "Please fill out first name\r\n";
			valid = false;
			
		}
		if(document.getElementById('middlenam').value.length == 0){
			validationMsg = validationMsg + "Please fill out middle name\r\n";
			valid = false;
		}
		if(document.getElementById('lastnam').value.length == 0){
			validationMsg = validationMsg + "Please fill out last name\r\n";
			valid = false;
		}
		if(document.getElementById('monthE').value.length == 0){
			validationMsg = validationMsg + "Please fill out the month of your birthday\r\n";
			valid = false;
		}
		if(document.getElementById('dayE').value.length == 0){
			validationMsg = validationMsg + "Please fill out the day of your birthday\r\n";
			valid = false;
		}
		if(document.getElementById('yearE').value.length == 0){
			validationMsg = validationMsg + "Please fill out the year of your birthday\r\n";
			valid = false;
		}
		if(document.getElementById('countrySelect').value == 'choose'){
			validationMsg = validationMsg + "Please pick a country\r\n";
			valid = false;
		}
		if(document.getElementById('stateSelect').value == 'choose'){
			validationMsg = validationMsg + "Please pick a state\r\n";
			valid = false;
		}
		if(document.getElementById('city').value.length == 0){
			validationMsg = validationMsg + "Please put your current city\r\n";
			valid = false;
		}
		if(document.getElementById('zipcode').value.length == 0){
			validationMsg = validationMsg + "Please put your current zipcode\r\n";
			valid = false;
		}
		if(document.getElementById('email').value.length == 0){
			validationMsg = validationMsg + "Please fill out your email\r\n";
			valid = false;
		}
		if(document.getElementById('username').value.length == 0){
			validationMsg = validationMsg + "Please create a username\r\n";
			valid = false;
		}
		if(document.getElementById('password').value.length == 0){
			validationMsg = validationMsg + "Please create a password\r\n";
			valid = false;
		}
		if(document.getElementById('cPassword').value.length == 0){
			validationMsg = validationMsg + "Please confirm your password\r\n";
			valid = false;
		}
		
		if(valid == false){
			alert(validationMsg);
		}
		
	
}









































	



/*function validateNameElement(){
	if(isFirstNameValid = false){
		alert('error:fill out more');
	}
	else{
		validateFirstName();
	}
}
function validateFirstName(){
	if( > 30){
		alert('error:too many characters in first name');
	}
}		
		var middleNameElement = document.getElementById("middlenam");
		
		if(x.length == 0 ){
			alert('please enter in more information');
		}
		if(x.length > 30){
			alert('you have entered too many letters for your name');
		}
		if(y.length == 0){
			alert('please enter in more information');
		}
		if(y.length > 30){
			alert('you have entered too many letters for your name');
		}
		
		var firstNameValid = isFirstNameValid();

function isFirstNameValid(){
	var firstNameElement = document.getElementById("firstnam");
	isEmpty(firstNameElement.length);
	
}
*/









=======
		 var validationMsg = "Please correct the following errors: \r\n";
		 var firstnam = document.getElementById('firstnam');
		 var middleName = document.getElementById('middlenam');
		 var lastName = document.getElementById('lastnam');
		 var month = document.getElementById('monthE');
		 var day = document.getElementById('dayE');
		 var year = document.getElementById('yearE');
		 var countrySelect = document.getElementById('countrySelect');
		 var stateSelect = document.getElementById('stateSelect');
		 var city = document.getElementById('city');
		 var zipcode = document.getElementById('zipcode');
		 var email = document.getElementById('email');
		 var username = document.getElementById('username');
		 var password = document.getElementById('password');
		 var cPassword = document.getElementById('cPassword');
		
		 validateFirstName();
		 validateMiddleName();
		 validateLastName();
		 validateMonth();
		 validateDay();
		 validateYear();
		 validateCountry();
		 validateState();
		 validateCity();
		 validateZipcode();
		 validateEmail();
		 validateUsername();
		 validatePassword();
		 validateConPassword();
		 
		 function validateFirstName(){
			 if (validateRequired(firstnam.value.length, 0)== false)
			 {
			       
			 } 
			 else if(overMax(firstnam.value.length, 30)== false){

			 }	
	       }
		 function validateMiddleName(){
			 if(validateRequired(middleName.value.length, 0)== false){
			
			 } 	else if(overMax(middleName.value.length, 30)== false){
			
			 }
		 } 
		 function validateLastName(){
			 if(validateRequired(lastName.value.length, 0)== false){
			
			 } else if(overMax(lastName.value.length, 30)== false){
			
			 }
		 }
			 
		function validateMonth(){ 
			 if(validateRequired(month.value.length, 0)== false){
			
			 }else if(overMax(month.value.length, 8)== false){
			
			
			 }
		}
			 
		function validateDay(){	 
			 if(validateRequired(day.value.length, 0)== false){
			
			 }else if(overMax(day.value.length, 2)== false){
			 	
			 }
		}
			 
		function validateYear(){	 
			 if(validateRequired(year.value.length, 0)== false){
			
			 }else if(overMax(year.value.length, 4)== false){
		
			 }
		}
			 
		function validateCountry(){	 
			 if(validateRequired(countrySelect.value, 'choose')== false){
			
			 }
			 
		}	 
		function validateState(){
			 if(validateRequired(stateSelect.value, 'choose')== false){
			
			 }
			 
		}
		function validateCity(){
			 	if(validateRequired(city.value.length, 0)== false){
			
			 }else if(overMax(city.value.length, 30)== false){

			 }
		}	 	
		function validateZipcode(){	 	
			 if(validateRequired(zipcode.value.length, 0)== false){
			
			 }else if(overMax(zipcode.value.length, 5)== false){
			
			 }
		}	 
		function validateEmail(){	 
			 if(validateRequired(email.value.length, 0)== false){
		
			 }
			 
		}
		function validateUsername(){
			 if(validateRequired(username.value.length, 0)== false){
			
			
			 }else if(overMax(username.value.length, 15)== false){
			
			 }
		}
		function validatePassword(){	 
			 if(validateRequired(password.value.length, 0)== false){
			
			
			 }else if(overMax(password.value.length, 15)== false){
			
			 }
		}	 
		function validateConPassword(){	 
			 if(validateRequired(cPassword.value.length, 0)== false){
			
			 }else if(password.value != cPassword.value){
			
			 } 
		}	 
			 
		
		if(result == false){
			alert(validationMsg);
		}
		
	
		function validateRequired(valAndLen, actualValue){
			if (valAndLen == actualValue){
				result = false;
				validationMsg = validationMsg + "Please fill out more information\r\n";
			}
		}
		function overMax(variableVal,maxVal){
			if(variableVal > maxVal){
			result = false;
			validationMsg = validationMsg + "Please enter in less characters\r\n" ;
			}
		}
	}
>>>>>>> refs/remotes/origin/master
