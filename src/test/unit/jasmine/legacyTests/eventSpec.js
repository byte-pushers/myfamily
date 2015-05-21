/*  spec.js*/
describe('Event Tests', function() {
	it('can create empty event', function() {
		var event = new Event();

		expect(event).toBeDefined();
	});
	
	it('can create filled event', function() {
		var event = new Event("Jared", "Ramirez", "BirthDay", "http://aye.com", true, false, 
				"1004 West Oak", "", "Denton", "tx", "76201", "US", 1, 1, 1, 1, 1, "pm", 1, 1, 1, 1, 1, "pm");

		expect(event).toBeDefined();
	});
	
	it('can modify an event', function() {
		var event = new Event("Jared", "Ramirez", "BirthDay", "http://aye.com", true, false, 
				"1004 West Oak", "", "Denton", "tx", "76201", "US", 1, 1, 1, 1, 1, "pm", 1, 1, 1, 1, 1, "pm");
		 
		event.setStartMonth(2);
		expect(event.getStartMonth()).toBe(2);
	});
});

describe('Attendee Test', function() {
	it('can create empty attendee', function(){
		var attendee = new Attendee();
		
		expect(attendee).toBeDefined();
	}); 
	 
	it('can filled attendee', function(){
		var attendee = new Attendee("Jared", "Ramirez", "jaredramirez@me.com");
		
		expect(attendee).toBeDefined();
	});
	
	it('can modify attendee', function(){
		var attendee = new Attendee("Jared", "Ramirez", "jaredramirez@me.com");
		
		attendee.setFirstName("Max")
		expect(attendee.getFirstName()).toBeDefined("Max");
	});
});

describe('Textbox validation', function(){
	var alpha = new RegExp("^[A-Z]+$", "i"),
	    numeric = new RegExp("^[0-9]+$"),
	    alphaNumeric = new RegExp("^[A-Z0-9.!?]+$", "i");
	var test = document.createElement("SPAN");
	  
	it('can validate alpha textboxes', function() {
		test.value = "Jared"
		
		expect(textBoxValidation(test, "", 2, 10, alpha)).toBe(true);
	});
	
	it('can validate numeric textboxes', function() {
		test.value = "12345"
		
		expect(textBoxValidation(test, "", 2, 10, numeric)).toBe(true);
	});
	
	it('can validate alphaNumeric textboxes', function() {
		test.value = "1a2b3c4d"
		
		expect(textBoxValidation(test, "", 2, 10, alphaNumeric)).toBe(true);
	});
});

describe('Optional textbox validation', function(){
	var alpha = new RegExp("^[A-Z]+$", "i"),
	    numeric = new RegExp("^[0-9]+$"),
	    alphaNumeric = new RegExp("^[A-Z0-9.!?]+$", "i");
	var test = document.createElement("SPAN");
	  
	it('can validate alpha optional textboxes', function() {
		test.value = "Jared"
		
		expect(optionalTextBox(test, "", 2, 10, alpha)).toBe(true);
	});
	
	it('can validate numeric optional textboxes', function() {
		test.value = "12345"
		
		expect(optionalTextBox(test, "", 2, 10, numeric)).toBe(true);
	});
	
	it('can validate alphaNumeric optional textboxes', function() {
		test.value = "1a2b3c4d"
		
		expect(optionalTextBox(test, "", 2, 10, alphaNumeric)).toBe(true);
	});
});

describe('Dropdown', function(){
	it('can validate dropdown menus', function() {
		var test = document.createElement("SPAN");
		test.value = ""
		
		expect(dropDownValidation(test, "")).toBe(false);
	});
});

describe('Speical Validation', function(){
	it('can validate email', function() {
		emailRegex = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9]+.[A-Z]{3}$", "i");
		var test = document.createElement("SPAN");
		test.value = "test@me.com"
		
		expect(emailValidation(test, "", emailRegex)).toBe(true);
	});
	
	it('can validate URL', function() {
		var URLRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		var test = document.createElement("SPAN");
		test.value = "https://test.com"
		
		expect(URLValidation(test, "", URLRegex)).toBe(true);
	});
});

describe('basic validation', function() {
	it('can validate greater then Max', function() {
		var max = 5,
			string = "testtest"
		
		expect(isGreaterThanMaxLength(string, max)).toBe(true);
	});
	
	it('can validate less then Max', function() {
		var min = 5,
			string = "test"
		
		expect(isLessThanMinLength(string, min)).toBe(true);
	});
		
	it('can test to see if empty', function(){
		var test = "";
		
		expect(isEmpty(test)).toBe(true);
	});
});