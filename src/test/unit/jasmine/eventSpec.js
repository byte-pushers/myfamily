/*  spec.js
it('can create attendee', function() {
	var attendee = new Attendee("Jared", "Ramirez", "jaredramirez@me.com");
	attendee.setFullName("Rob", "Smith");
	var expected = attendee.getFirstName() + " " + attendee.getLastName();
	expect(attendee).toBeDefined();
	expect(attendee.getFullName()).toEqual(expected);
}); */

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
	it('can validate alpha characters', function() {
		
	})
})