function Attendee(firstName, lastName, emailAddress) {

	this.setEmail = function(emailAddress) {
		email = emailAddress;
	};
	
	this.getEmail = function() {
		return email;
	};
	
	this.setFirstName = function(input) {
		firstName = input;
	};
	
	this.getFirstName = function() {
		return firstName;
	};
	
	this.setLastName = function(input){
		lastName = input;
	};
	
	this.getLastName = function() {
		return lastName;
	};
	
	this.setFullName = function(firstName, lastName) {
		setFirstName(firstName);
		setLastName(lastName);
	};
	
	this.getFullName = function() {
		return firstName + " " + lastName;
	};
}