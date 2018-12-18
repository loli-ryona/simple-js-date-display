//Date Display by Tristan
function fourDigitYear(number)	{						//creates a function to correctly calculate the year
	return (number < 1000) ? number + 1900 : number;	
}

today =  days[now.getDay()] + ", " +					//creates the date and time display at displays it on the html document
         months[now.getMonth()] + " " +
         date + ", " +
         (fourDigitYear(now.getYear())) ;
	document.write(today);
	
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

	function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
	
