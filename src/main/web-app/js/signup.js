	
	function validateMyForm(){
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
			 validateRequired(firstnam.value.length, 0);
			 
			 underMin(firstnam.value.length, 2);
			 
			 overMax(firstnam.value.length, 30);
				 
			 }
		 function validateMiddleName(){
			 overMax(middleName.value.length, 30);
					
		 } 
		 function validateLastName(){
			 validateRequired(lastName.value.length, 0);
			
			 underMin(lastName.value.length, 2);
			
			 overMax(lastName.value.length, 30);
					
			 
		 }
			 
		function validateMonth(){ 
			validateRequired(month.value.length, 0);
				
			
			validateIfMonth(month.value);
				
			
				
		}
			 
		function validateDay(){	 
			 validateRequired(day.value.length, 0);
			validateIfDay(day.value);
			 
		}
			 
		function validateYear(){	 
			 validateRequired(year.value.length, 0);
			
			 underMin(year.value.length, 4);
		
			 overMax(year.value.length, 4);
					
		}
			 
		function validateCountry(){	 
			 validateRequired(countrySelect.value, 'choose');
			 
		}	 
		function validateState(){
			 validateRequired(stateSelect.value, 'choose');
			
		}
		function validateCity(){
			 	validateRequired(city.value.length, 0);
			
			 underMin(city.value.length, 3);

			 overMax(city.value.length, 30);	
		}	 	
		function validateZipcode(){	 	
			 validateRequired(zipcode.value.length, 0);
			
			 underMin(zipcode.value.length, 5);
			
			 overMax(zipcode.value.length, 5);
					
		}	 
		function validateEmail(){	 
			 validateRequired(email.value.length, 0);
			 
		}
		function validateUsername(){
			 validateRequired(username.value.length, 0);
			
			underMin(username.value.length, 6);
			
			 overMax(username.value.length, 15);
					
		}
		function validatePassword(){	 
			 validateRequired(password.value.length, 0);
			
			underMin(password.value.length, 6);
			
			 overMax(password.value.length, 15);
		}	 
		function validateConPassword(){	 
			validateRequired(cPassword.value.length, 0);
			confirmPassword(password.value.length,cPassword.value.length);
			
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
		function underMin(variableV, minVal){
			if(0 != variableV && variableV < minVal){
				result = false;
				validationMsg = validationMsg + "Please enter in more characters\r\n";
				
			}
		}
		function validateIfMonth(monthVal){
			if(monthVal != 0 && monthVal != "January" && monthVal != "Feburary" && monthVal != "March" && monthVal != "April" && monthVal != "May" && monthVal != "June" && monthVal != "July" && monthVal != "August" && monthVal != "September" && monthVal != "November" && monthVal != "December"){
				
				result = false;
				validationMsg = validationMsg + "Please enter in a valid month\r\n";
			} 
		}
		function validateIfDay(dayVal){
			if(dayVal != 0 && dayVal != 1 && dayVal != 2 && dayVal != 3 && dayVal != 4 && dayVal != 5 && dayVal != 6 && dayVal != 7 && dayVal != 8 && dayVal != 9 && dayVal != 10 && dayVal != 11 && dayVal != 12 && dayVal != 13 && dayVal != 14 && dayVal != 15 && dayVal != 16 && dayVal != 17 && dayVal != 18 && dayVal != 19 && dayVal != 20 && dayVal != 21 && dayVal != 22 && dayVal != 23 && dayVal != 24 && dayVal != 25 && dayVal != 26 && dayVal != 27 && dayVal != 28 && dayVal != 29 && dayVal != 30 && dayVal != 31 ){
				result = false;
				validationMsg = validationMsg + "Please enter in a valid day\r\n";
			}
		}
		function confirmPassword(passwordVal,cPasswordVal){
			if (passwordVal != 0 && passwordVal != cPasswordVal){
				
				result = false;
				validationMsg = validationMsg + "Passwords don't match";
			}
			
		}
			
		
			
		}
