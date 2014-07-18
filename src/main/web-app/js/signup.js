	
	function validateMyForm(){

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









