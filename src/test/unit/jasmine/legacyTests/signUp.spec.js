describe('testing isEmpty function', function() {
	var string = "",
		defaultValue = null;
	
	it('should validate is value empty', function() {
		
		expect(isEmpty(string,defaultValue)== true);
	});
	
	it('should validate is value not empty', function(){
		string = "Phoebe";
		expect(isEmpty(string, defaultValue)).toBe(false);
	});
	it('should validate is value equal to choose (empty)', function(){
		string = "choose";
		defaultValue = "choose";
		expect(isEmpty(string, defaultValue)).toBe(true);
	});
	it('should validate is value not equal to choose (empty)', function(){
		string = "hello";
		defaultValue = "choose";
		expect(isEmpty(string, defaultValue)).toNotBe(true);
	});
});

describe('testing underMin function',function(){
	var	stringLength = 1,
	 min = 2;
	
	it('should validate is the string length less than the minium', function(){
		expect(underMin(stringLength, min)).toBe(true);
	});
	
	it('should validate is the string length not less than the minium', function(){
		stringLength = 5;
		expect(underMin(stringLength, min)).toNotBe(true);
	});

});

describe('testing overMax function', function(){
	var stringLength = 12,
	max = 6;
	
	it('should validate is the string length over the max', function(){
		expect(overMax(stringLength, max)).toBe(true);
	});
	it('should validate is the string length not over the max', function(){
		stringLength = 6;
		expect(overMax(stringLength, max)).toNotBe(true);
	});
});

describe('testing is name inputs valid', function(){
	var string,
	regExp = new RegExp("^[A-Z]+$", "i");
	
	it('should validate the string is valid for first name input', function(){
		string = "Phoebe";
		expect(isValidFirstName(string, regExp)).toBe(true);
	});
	it('should validate the string is not valid for first name input', function(){
		string = "Phoe8be";
		expect(isValidFirstName(string,regExp)).toNotBe(true);
	});
	it('should validate the string is valid for middle name input', function(){
		string = "Phoebe";
		expect(isValidMiddleName(string, regExp)).toBe(true);
	});
	it('should validate the string is not valid for middle name input', function(){
		string = "Phoe8be";
		expect(isValidMiddleName(string,regExp)).toNotBe(true);
	});
	it('should validate the string is valid for last name input', function(){
		string = "Phoebe";
		expect(isValidLastName(string, regExp)).toBe(true);
	});
	it('should validate the string is not valid for last name input', function(){
		string = "Phoe8be";
		expect(isValidLastName(string,regExp)).toNotBe(true);
	});
});
describe('testing is valid birth month/birthday', function(){
	var elementValue;
	
	it('should validate elementValue is a valid month', function(){
		elementValue = "January";
		expect(CalendarMonth.isValidMonth(elementValue)).toBe(true);
	});
	it('should validate elementValue is a valid month abbreviation', function(){
		 elementValue = "Jan";
		 expect(CalendarMonth.isValidMonth(elementValue)).toBe(true);
	});
	it('should validate elementValue is not a valid month or month abbreviation', function(){
		elementValue = "Jan7";
		expect(CalendarMonth.isValidMonth(elementValue)).toNotBe(true);
	});
	it('should validate elementValue is a valid day', function(){
		elementValue = 7;
		expect(CalendarDay.isValidDay(elementValue)).toBe(true);
	});
	it('should validate elementValue is not a valid day', function(){
		elementValue = 32;
		expect(CalendarDay.isValidDay(elementValue)).toNotBe(true);
	});
});

describe('testing isValidYear function', function(){
	var string,
	regExp = new RegExp("^[0-9]{4}$");
	it('should validate string is a valid year', function(){
		string = 1314;
		expect(isValidYear(string, regExp)).toBe(true);
	});
	it('should validate string is not a valid year', function(){
		string = 4e43;
		expect(isValidYear(string, regExp)).toNotBe(true);
	});
	
});

describe('testing isValidCity function', function(){
	var string,
		regExp = new RegExp("^[A-Z.']+$", "i");
	it('should validate the city is valid',function(){
		string = "S'avannah";
		expect(isValidCity(string, regExp)).toBe(true); 
	});
	it('should validate the city is not valid', function(){
		string ="Savannahs8";
		expect(isValidCity(string, regExp)).toNotBe(true);
	});
});

describe('testing isValidZipcode function', function(){
	var string,
		regExp = new RegExp("^[0-9]{5}$", "i");
	it('should validate the zipcode is valid',function(){
		string = "76227";
		expect(isValidZipcode(string, regExp)).toBe(true); 
	});
	it('should validate the zipcode is not valid', function(){
		string ="77897j";
		expect(isValidZipcode(string, regExp)).toNotBe(true);
	});
});

describe('testing isValidEmail function', function(){
	var string,
		regExp = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9]+.[A-Z]{3}$", "i");
	it('should validate the email is valid',function(){
		string = "phoebe.baham@yahoo.com";
		expect(isValidEmail(string, regExp)).toBe(true); 
	});
	it('should validate the email is not valid', function(){
		string ="phoebe@";
		expect(isValidEmail(string, regExp)).toNotBe(true);
	});
});

describe('testing isValidUsername function', function(){
	var string,
		regExp = new RegExp("^[A-Z@!#._-]+$", "i");
	it('should validate the username is valid',function(){
		string = "Phoebe_b!#";
		expect(isValidUsername(string, regExp)).toBe(true); 
	});
	it('should validate the username is not valid', function(){
		string ="P4k.tt5";
		expect(isValidUsername(string, regExp)).toNotBe(true);
	});
});

describe('testing isValidPassword function', function(){
	var string,
		regExp = new RegExp("^[A-Z0-9@!._-]+$", "i");
	it('should validate the password is valid',function(){
		string = "Phoebe_b!";
		expect(isValidPassword(string, regExp)).toBe(true); 
	});
	it('should validate the password is not valid', function(){
		string ="PhoebeB*j";
		expect(isValidPassword(string, regExp)).toNotBe(true);
	});
});

describe('testing validateIsEqualPasswords function', function(){
	var password = "cats", 
	confirmPassword;
	it('should vaidate passwords match', function(){
		confirmPassword = "cats";
		expect(validateIsEqualPasswords(password,confirmPassword)).toBe(true);
	});
	it('should validate passwords do not match', function(){
		confirmPassword = "dogs";
		expect(validateIsEqualPasswords(password,confirmPassword)).toNotBe(true);
	});
});
