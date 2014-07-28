function Attendee(fName, lName, emailAddress) {

	var firstName = fName, 
		lastName = lName,
		email = emailAddress,
		that = this;

	function setFirstName(firstname) {
		that.firstName = firstName;
	}

	function setLastName(lastName) {
		that.lastName = lastName;
	}

	this.getEmail = function() {
		return email;
	}
	
	this.setEmail = function(emailAddress) {
		email = emailAddress;
	}
	
	this.getFullName = function() {
		return firstName + " " + lastName;
	}
	
	this.setFullName = function(firstName, lastName) {
		setFirstName(firstName);
		setLastName(lastName);
	}
}