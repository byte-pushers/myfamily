	var calanderMonth={
		"longName" : "", "shortName" : ""
	};

	function validateMyForm(){
		 var validationMsg = {
				 "msg": "Please correct the following errors: \r\n"
		 };
		 
		 var firstNameInputTextElement = document.getElementById('firstName');
		 var middleNameInputTextElement = document.getElementById('middleName');
		 var lastNameInputTextElement = document.getElementById('lastName');
		 var monthInputTextElement = document.getElementById('month');
		 var dayInputTextElement = document.getElementById('day');
		 var yearInputTextElement = document.getElementById('year');
		 var countrySelectDropDownMenu = document.getElementById('countrySelect');
		 var stateSelectDropDownMenu = document.getElementById('stateSelect');
		 var cityInputTextElement = document.getElementById('city');
		 var zipcodeInputTextElement = document.getElementById('zipcode');
		 var emailInputTextElement = document.getElementById('email');
		 var usernameInputTextElement = document.getElementById('username');
		 var passwordInputPasswordElement = document.getElementById('password');
		 var cPasswordInputPasswordElement = document.getElementById('confirmPassword');
		
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
			 validateRequired(firstNameInputTextElement.value.length, 0, validationMsg, "your first name");
			 
			 underMin(firstNameInputTextElement.value.length, 2, validationMsg, "your first name");
			 
			 overMax(firstNameInputTextElement.value.length, 30, validationMsg, "your first name");
			 
			 ifValidFirstName(firstNameInputTextElement.value, validationMsg);
			
		 }
		 function validateMiddleName(){
			 overMax(middleNameInputTextElement.value.length, 30, validationMsg, "your middle name");
			 
			 underMin(middleNameInputTextElement.value.length, 2, validationMsg, "your middle name");
			 
			 ifValidMiddleName(middleNameInputTextElement.value, validationMsg);
					
		 } 
		 function validateLastName(){
			 validateRequired(lastNameInputTextElement.value.length, 0, validationMsg, "your last name");
			
			 underMin(lastNameInputTextElement.value.length, 2, validationMsg, "your last name");
			
			 overMax(lastNameInputTextElement.value.length, 30, validationMsg, "your last name");
			
			 ifValidLastName(lastNameInputTextElement.value, validationMsg);
			 
		 }
			 
		function validateMonth(){ 
			validateRequired(monthInputTextElement.value.length, 0, validationMsg, "your birth month");
				
			
			validateIfMonth(monthInputTextElement.value, validationMsg);
				
			
				
		}
			 
		function validateDay(){	 
			 validateRequired(dayInputTextElement.value.length, 0, validationMsg, "your birthday");
			validateIfDay(dayInputTextElement.value, validationMsg);
			 
		}
			 
		function validateYear(){	 
			 validateRequired(yearInputTextElement.value.length, 0, validationMsg, "your birth year");
			
			 underMin(yearInputTextElement.value.length, 4, validationMsg, "birth year");
		
			 overMax(yearInputTextElement.value.length, 4, validationMsg, "birth year");
					
		}
			 
		function validateCountry(){	 
			 validateRequired(countrySelectDropDownMenu.value, 'choose', validationMsg, "your country");
			 
		}	 
		function validateState(){
			 validateRequired(stateSelectDropDownMenu.value, 'choose', validationMsg, "your state");
			
		}
		function validateCity(){
			 	validateRequired(cityInputTextElement.value.length, 0, validationMsg, "your city");
			
			 underMin(cityInputTextElement.value.length, 3, validationMsg, "your city");

			 overMax(cityInputTextElement.value.length, 30, validationMsg, "your city");
			 
			 ifValidCity(cityInputTextElement.value, validationMsg);
		}	 	
		function validateZipcode(){	 	
			 validateRequired(zipcodeInputTextElement.value.length, 0, validationMsg, "your zipcode");
			
			 underMin(zipcodeInputTextElement.value.length, 5, validationMsg, "your zipcode");
			
			 overMax(zipcodeInputTextElement.value.length, 5, validationMsg, "your zipcode");
			 
			 ifValidZipcode(zipcodeInputTextElement.value, validationMsg);
		
					
		}	 
		function validateEmail(){	 
			 validateRequired(emailInputTextElement.value.length, 0, validationMsg, "your email");
			 
			 validateIfValidEmail(emailInputTextElement.value, validationMsg);
			 
		}
		function validateUsername(){
			 validateRequired(usernameInputTextElement.value.length, 0, validationMsg, "your username");
			
			underMin(usernameInputTextElement.value.length, 6, validationMsg, "your username");
			
			 overMax(usernameInputTextElement.value.length, 15, validationMsg, "your username");
			 
			 ifValidUserName(usernameInputTextElement.value, validationMsg);
					
		}
		function validatePassword(){	 
			 validateRequired(passwordInputPasswordElement.value.length, 0, validationMsg, "your password");
			
			underMin(passwordInputPasswordElement.value.length, 6, validationMsg, "your password");
			
			 overMax(passwordInputPasswordElement.value.length, 15, validationMsg, "your password");
			 
			 ifValidPassword(passwordInputPasswordElement.value, validationMsg);
		}	 
		function validateConPassword(){	 
			validateRequired(cPasswordInputPasswordElement.value.length, 0, validationMsg, "the confirm password textbox");
			
			confirmPassword(passwordInputPasswordElement.value.length,cPasswordInputPasswordElement.value.length, validationMsg);
			
		}	 
			 
		
		if(result == false){
			alert(validationMsg.msg);
		}	
	}
	function validateRequired(valAndLen, defaultValue, validationMsg, elementLabelName){
		elementLabelName = (elementLabelName == undefined || elementLabelName == null || elementLabelName.length == 0 )? "" : " " + elementLabelName + ".";
		
		if (valAndLen == defaultValue){
			result = false;
			validationMsg.msg += "Please fill out" + elementLabelName + "\r\n";
		} 
	}
	function overMax(variableVal,maxVal, validationMsg, elementLabelName){
		elementLabelName = (elementLabelName == undefined || elementLabelName == null || elementLabelName.length == 0 )? "" : "into " + elementLabelName + ".";
		if(variableVal > maxVal){
		result = false;
		validationMsg.msg = validationMsg.msg + "Please enter less characters\r\n" ;
		}
	}
	function underMin(variableV, minVal, validationMsg, elementLabelName){
		elementLabelName = (elementLabelName == undefined || elementLabelName == null || elementLabelName.length == 0 )? "" : " into " + elementLabelName + ".";
		if(0 != variableV && variableV < minVal){
			result = false;
			validationMsg.msg = validationMsg.msg + "Please enter more characters\r\n";
			
		}
	}
	function ifValidFirstName(fNameVal, validationMsg){
		var nVal= new RegExp("^[A-Z]+$","i");
		if (nVal.test(fNameVal)){
		}
		else if(fNameVal != 0){
			
			result = false;
			validationMsg.msg = validationMsg.msg + "Please enter a valid first name\r\n";
		}
	}
	function ifValidMiddleName(mNameVal, validationMsg){
		var nVal= new RegExp("^[A-Z]+$","i");
		if (nVal.test(mNameVal)){
		}
		else if (mNameVal != 0){
				result = false;
				validationMsg.msg = validationMsg.msg + "Please enter a valid middle name\r\n";
			}
	}
	function ifValidLastName(lNameVal, validationMsg){
		var nVal= new RegExp("^[A-Z]+$","i");
		if (nVal.test(lNameVal)){
		}
		else if (lNameVal != 0){			
				result = false;
				validationMsg.msg = validationMsg.msg + "Please enter a valid last name\r\n";
			}
		
	}
	function validateIfMonth(monthVal, validationMsg){
		if(monthVal != 0 && monthVal != "January" && monthVal != "Feburary" && monthVal != "March" && monthVal != "April" && monthVal != "May" && monthVal != "June" && monthVal != "July" && monthVal != "August" && monthVal != "September" && monthVal != "November" && monthVal != "December"){
			
			result = false;
			validationMsg.msg = validationMsg.msg + "Please enter  a valid month\r\n";
		} 
	}
	function validateIfDay(dayVal, validationMsg){
		if(dayVal != 0 && dayVal != 1 && dayVal != 2 && dayVal != 3 && dayVal != 4 && dayVal != 5 && dayVal != 6 && dayVal != 7 && dayVal != 8 && dayVal != 9 && dayVal != 10 && dayVal != 11 && dayVal != 12 && dayVal != 13 && dayVal != 14 && dayVal != 15 && dayVal != 16 && dayVal != 17 && dayVal != 18 && dayVal != 19 && dayVal != 20 && dayVal != 21 && dayVal != 22 && dayVal != 23 && dayVal != 24 && dayVal != 25 && dayVal != 26 && dayVal != 27 && dayVal != 28 && dayVal != 29 && dayVal != 30 && dayVal != 31 ){
			result = false;
			validationMsg.msg = validationMsg.msg + "Please enter  a valid day\r\n";
		}
	}
	function ifValidCity(citVal, validationMsg){
		var cVal= new RegExp("^[A-Z.']+$","i");
		if (cVal.test(citVal)){
		}
		else if (citVal != 0){			
				result = false;
				validationMsg.msg = validationMsg.msg + "Please enter a valid city\r\n";
			}
		
	}
	function ifValidZipcode(zipVal, validationMsg){
		var zVal= new RegExp("^[0-9]{5}$");
		if (zVal.test(zipVal)){
		}
		else if (zipVal != 0){			
				result = false;
				validationMsg.msg = validationMsg.msg + "Please enter a valid zipcode\r\n";
			}
		
	}
	
	function ifValidUserName(userVal, validationMsg){
		var uVal= new RegExp("^[A-Z@!#._-]+$","i");
		if (uVal.test(userVal)){
		}
		else if (userVal != 0){			
				result = false;
				validationMsg.msg = validationMsg.msg + "Please enter a valid username\r\n";
			}
		
	}
	function ifValidPassword(passVal, validationMsg){
		var pVal= new RegExp("^[A-Z0-9@!._-]+$","i");
		if (pVal.test(passVal)){
		}
		else if (passVal != 0){			
				result = false;
				validationMsg.msg = validationMsg.msg + "Please enter a valid password\r\n";
			}
		
	}
	
	function confirmPassword(passwordVal,cPasswordVal, validationMsg){
		if (passwordVal != 0 && passwordVal != cPasswordVal){
			
			result = false;
			validationMsg.msg = validationMsg.msg + "Passwords don't match\r\n";
		}
		
	}
	function validateIfValidEmail(emailVal, validationMsg){
		var eval= new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9]+.[A-Z]{3}$","i");
		if (eval.test(emailVal)){
		}
		else if (emailVal != 0){
			
			result = false;
			validationMsg.msg = validationMsg.msg + "Please enter a valid email\r\n";
		}
		
	}