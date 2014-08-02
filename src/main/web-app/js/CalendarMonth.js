function CalendarMonth(name,abbrivatedName){ 
	var longName = name,
		shortName = abbrivatedName;
	
	this.getLongName = function(){
		return longName;
	};
	
	this.getShortName = function(){
		return shortName;
	};
}
CalendarMonth.arrayOfMonths = [
    new CalendarMonth("January","Jan"),
    new CalendarMonth("Feburary","Feb"),
    new CalendarMonth("March","Mar"),
    new CalendarMonth("April","Apr"),
    new CalendarMonth("May","May"),
    new CalendarMonth("June","June"),
    new CalendarMonth("July","July"),
    new CalendarMonth("August","Aug"),
    new CalendarMonth("September","Sept"),
    new CalendarMonth("October","Oct"),
    new CalendarMonth("November", "Nov"),
    new CalendarMonth("December", "Dec")
 ];
CalendarMonth.isValidMonth = function(monthVal){
	var result = false;
	
	//TODO: loop through the array of months
	for(var i = 0;i < CalendarMonth.arrayOfMonths.length;i++){
		//TODO: get the month string out of the array of months
		//TODO: compare the month string to the monthVal parameter that is passed into the isValidMonth(monthVal) method
		//TODO: when month string equals the monthVal parameter, set results variable to true  
		result = (CalendarMonth.arrayOfMonths[i].getLongName() == monthVal || CalendarMonth.arrayOfMonths[i].getShortName() == monthVal)? true: false; 
		//if the result is true then we will break out of the loop
		if(result == true){
			break;
		}
	} 
	
	return result;
};