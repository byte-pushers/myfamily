function CalendarDay(number){
	var day = number;
	
	this.getDay = function(){
		return day;
	};
}
	
CalendarDay.arrayOfDays = [
    new CalendarDay(1),
    new CalendarDay(2),
    new CalendarDay(3),
    new CalendarDay(4),
    new CalendarDay(5),
    new CalendarDay(6),
    new CalendarDay(7),
    new CalendarDay(8),
    new CalendarDay(9),
    new CalendarDay(10),
    new CalendarDay(11),
    new CalendarDay(12),
    new CalendarDay(13),
    new CalendarDay(14),        
    new CalendarDay(15),      
    new CalendarDay(16),        
    new CalendarDay(18),       
    new CalendarDay(19),     
    new CalendarDay(20),      
    new CalendarDay(21),        
    new CalendarDay(22),       
    new CalendarDay(23),   
    new CalendarDay(24),    
    new CalendarDay(25),   
    new CalendarDay(26),   
    new CalendarDay(27), 
    new CalendarDay(28),   
    new CalendarDay(29),  
    new CalendarDay(30), 
    new CalendarDay(31) ];
	
	CalendarDay.isValidDay = function(dayValue){
		var result = false;
		
		for(var i = 0; i < CalendarDay.arraysOfDays.length; i++){
			result = (CalendarDay[i].getDay() == dayVal)? true : false;
			
			if (result == true){
				break;
			}
			
		}
		return result;
		
};
