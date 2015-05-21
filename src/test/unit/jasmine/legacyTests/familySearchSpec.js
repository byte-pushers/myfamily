describe("familySearch", function(){
	it("can determine if '123' contains a number in it", function(){
		var targetString = "123"; 
		var expectedResult = true;
		var actualResult = hasNumber(targetString);
		expect(actualResult).toBe(expectedResult);
	});
	
	it("can determine if 'A8C' contains a number in it", function(){
		var targetString = "A8C";
		var expectedResult = true;
		var actualResult = hasNumber(targetString);
		expect(actualResult).toBe(expectedResult);
	});
	
	it("can determined if 'ABC' contains a number in it", function(){
		var targetString = "ABC";
		var expectedResult = false;
		var actualResult = hasNumber(targetString);
		expect(actualResult).toBe(expectedResult);
	});
	
	it("can determine if 'malayshiamonay' is less than 20 characters", function(){
		var targetString = "malayshiamonay";
		var expectedResult = false;
		var actualResult = isGreaterThan(targetString.length, 20);
		expect(actualResult).toBe(expectedResult);
	});
	
	it("can determine if 'malayshiamonaypouncillaylay' is greater than 20 characters", function(){
		var targetString = "malayshiamonaypouncillaylay";
		var expectedResult = false;
		var actualResult = isGreaterThan(targetString);
		expect(actualResult).toBe(expectedResult);
	});

	it("can determine if 'a' is less than 2 characters", function(){
		var targetString = "a";
		var expectedResult = false;
		var actualResult = isLesserThan(targetString);
		expect(actualResult).toBe(expectedResult);
	});
	
	it("can determine if '35234' has only numbers", function (){
		var targetString = "35234";
		var expectedResult = false;
		var actualResult = hasOnlyNumbers(targetString);
		expect(actualResult).toBe(expectedResult);
		
	});
	
	it("can determine if 'abd532' has only numbers", function (){
		var targetString = "abd532";
		var expectedResult = false;
		var actualResult = hasOnlyNumbers(targetString);
		expect(actualResult).toBe(expectedResult);
	});
	it("can determine if '12345' has nothing but numbers", function(){
		var targetString = "12345";
		var expectedResult = false;
		var actualResult = hasNothingButNumbers(targetString);
		expect(expectedResult).toBe(actualResult);
	});
}); 