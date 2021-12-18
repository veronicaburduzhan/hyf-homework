//EVENT APPLICATION
function getEventWeekday(daysFromToday) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //array with weekdays
    const day = new Date();
    let todaysDay = day.getDay(); //js method which returns eact today's day by it's number begins from 0 Sunday
    let eventDay = todaysDay + daysFromToday; //calculates number of event day
    let weekdayOfEvent = eventDay % 7; //transform number of the event day from 0 to 6
    console.log("Todays is " + weekdays[todaysDay] + ".");
    console.log("Event will be on " + weekdays[weekdayOfEvent] + ".");
    return weekdays[weekdayOfEvent];
}
//example:
getEventWeekday(10);