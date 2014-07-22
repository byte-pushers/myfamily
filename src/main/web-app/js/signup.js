	
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
			 if (validateRequired(firstnam.value.length, 0)== false)
			 {
				 
			 }else if (underMin(firstnam.value.length, 2)== false){
				 
			 }
			 if (overMax(firstnam.value.length, 30)== false){
				 
			 }
	       }
		 function validateMiddleName(){
			 if(overMax(middleName.value.length, 30)== false){
					
			 }
		 } 
		 function validateLastName(){
			 if(validateRequired(lastName.value.length, 0)== false){
			
			 } else if(underMin(lastName.value.length, 2)== false){
			
			 }
			 if(overMax(lastName.value.length, 30)== false){
					
			 }
		 }
			 
		function validateMonth(){ 
			if (validateRequired(month.value.length, 0)== false){
			}
			else if (validateIfMonth(month.value)== false){
				
			}
				
		}
			 
		function validateDay(){	 
			 if(validateRequired(day.value.length, 0)== false){
			
			 }else if(overMax(day.value.length, 2)== false){
			 	
			 }
		}
			 
		function validateYear(){	 
			 if(validateRequired(year.value.length, 0)== false){
			
			 }else if(underMin(year.value.length, 4)== false){
		
			 }
			 if(overMax(year.value.length, 4)== false){
					
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
			
			 }else if(underMin(city.value.length, 3)== false){

			 }
			 	if(overMax(city.value.length, 30)== false){

				 }	
		}	 	
		function validateZipcode(){	 	
			 if(validateRequired(zipcode.value.length, 0)== false){
			
			 }else if(underMin(zipcode.value.length, 5)== false){
			
			 }
			 if(overMax(zipcode.value.length, 5)== false){
					
			 }
		}	 
		function validateEmail(){	 
			 if(validateRequired(email.value.length, 0)== false){
		
			 }
			 
		}
		function validateUsername(){
			 if(validateRequired(username.value.length, 0)== false){
			
			
			 }else if(underMin(username.value.length, 6)== false){
			
			 }
			 if(overMax(username.value.length, 15)== false){
					
			 }
		}
		function validatePassword(){	 
			 if(validateRequired(password.value.length, 0)== false){
			
			
			 }else if(underMin(password.value.length, 6)== false){
			
			 }
			 if(overMax(password.value.length, 15)== false){
				 
			 }
		}	 
		function validateConPassword(){	 
			 if(validateRequired(cPassword.value.length, 0)== false){
			
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
		function underMin(variableV, minVal){
			if(0 != variableV && variableV < minVal){
				result = false;
				validationMsg = validationMsg + "Please enter in more characters\r\n";
				
			}
		}
		function validateIfMonth(monthVal){
			if(monthVal != "January" && monthVal != "Feburary" && monthVal != "March" && monthVal != "April" && monthVal != "May" && monthVal != "June" && monthVal != "July" && monthVal != "August" && monthVal != "September" && monthVal != "November" && monthVal != "December"){
				
				result = false;
				validationMsg = validationMsg + "Please enter in a valid month\r\n";
			}
		}
			
		/*function confirmPass(passwordVal, cPasswordVal){
			if(passwordVal != cPasswordVal){
				result = false;
				validationMsg = validationMsg + "Password does not match confirmation";
			}
			
		}*/
		
		
	}
>>>>>>> refs/remotes/origin/master
