// spec.js
it('can create attendee', function() {
	var attendee = new Attendee("Jared", "Ramirez", "jaredramirez@me.com");
	attendee.setFullName("Rob", "Smith");
	var expected = attendee.getFirstName() + " " + attendee.getLastName();
	expect(attendee).toBeDefined();
	expect(attendee.getFullName()).toEqual(expected);
});
