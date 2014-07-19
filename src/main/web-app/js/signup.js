	
	function validateMyForm(){

		 var valid = true; 
		 var validationMsg = "Please correct the following errors: \r\n";
		 var firstName = document.getElementById('firstnam');
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
		 
		 
		if(firstName.value.length == 0){
			validationMsg = validationMsg + "Please fill out first name\r\n";
			valid = false;
		} else if(firstName.value.length > 30){
			validationMsg = validationMsg + "Please enter less characters into first name\r\n";
			valid = false;
			
		}
		if(middleName.value.length == 0){
			validationMsg = validationMsg + "Please fill out middle name\r\n";
			valid = false;
		} else if(middleName.value.length > 30){
			validationMsg = validationMsg + "Please enter less characters into middle name\r\n";
			valid = false;
			
		}
		if(lastName.value.length == 0){
			validationMsg = validationMsg + "Please fill out last name\r\n";
			valid = false;
		} else if(lastName.value.length > 30){
			validationMsg = validationMsg + "Please enter less characters into last name\r\n";
			valid = false;
			
		}
		
		if(month.value.length == 0){
			validationMsg = validationMsg + "Please fill out the month of your birthday\r\n";
			valid = false;
		}else if(month.value.length > 8){
			validationMsg = validationMsg + "Please enter less characters into month of your birthday\r\n";
			valid = false;
		}
		
		if(day.value.length == 0){
			validationMsg = validationMsg + "Please fill out the day of your birthday\r\n";
			valid = false;
		}else if(day.value.length > 2){
			validationMsg = validationMsg + "Please enter less characters into the day of your birthday\r\n";
			valid = false;
		}
		
		if(year.value.length == 0){
			validationMsg = validationMsg + "Please fill out the year of your birthday\r\n";
			valid = false;
		}else if(year.value.length > 4){
			validationMsg = validationMsg + "Please enter less characters into the year of your birthday \r\n";
			valid = false;
		}
		
		if(countrySelect.value == 'choose'){
			validationMsg = validationMsg + "Please pick a country\r\n";
			valid = false;
		}
		
		if(stateSelect.value == 'choose'){
			validationMsg = validationMsg + "Please pick a state\r\n";
			valid = false;
		}
		if(city.value.length == 0){
			validationMsg = validationMsg + "Please put your current city\r\n";
			valid = false;
		}else if(city.value.length > 30){
			validationMsg = validationMsg + "Please enter less characters into your current city \r\n";
			valid = false;
		}
		if(zipcode.value.length == 0){
			validationMsg = validationMsg + "Please put your current zipcode\r\n";
			valid = false;
		}else if(zipcode.value.length > 5){
			validationMsg = validationMsg + "Please enter less characters into the your current zipcode \r\n";
			valid = false;
		}
		if(email.value.length == 0){
			validationMsg = validationMsg + "Please fill out your email\r\n";
			valid = false;
		}
		if(username.value.length == 0){
			validationMsg = validationMsg + "Please create a username\r\n";
			valid = false;
		}else if(username.value.length > 15){
			validationMsg = validationMsg + "Please enter less characters for you username \r\n";
			valid = false;
		}
		if(password.value.length == 0){
			validationMsg = validationMsg + "Please create a password\r\n";
			valid = false;
		}else if(password.value.length > 15){
			validationMsg = validationMsg + "Please enter less characters for your password \r\n";
			valid = false;
		}
		if(cPassword.value.length == 0){
			validationMsg = validationMsg + "Please confirm your password\r\n";
			valid = false;
		}else if(password.value != cPassword.value){
			validationMsg = validationMsg + "Please confirm you password\r\n";
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









