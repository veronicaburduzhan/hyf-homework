const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function findTravelTime(someObj) {
    const timeDistance = someObj.destinationDistance / someObj.speed;
    const hours = Math.floor(timeDistance);
    const decpart = timeDistance - hours;
    const minutes = Math.floor(decpart * 60);
    return `${hours} hours and ${minutes} minutes`; 
}

const travelTime = findTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
