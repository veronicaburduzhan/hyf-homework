//CactusIO-interactive (Smart phone usage app)

//ADDING AN ACTIVITY
const activities = [];
function addActivity(activity, duration) {
  const activityNote = new Object();
  let date = new Date();
  activityNote.date = date.toLocaleDateString(`en-US`);
  activityNote.activity = activity;
  activityNote.duration = duration;
  activities.push(activityNote);
}

addActivity(`Youtube`, 30);
addActivity(`Facebook`, 20);
addActivity(`Instagram`, 45);

activities.push({ date: `12/27/2021`, activity: `Youtube`, duration: 30 });
activities.push({ date: `12/29/2021`, activity: `Instagram`, duration: 40 });
activities.push({ date: `12/29/2021`, activity: `Youtube`, duration: 25 });
activities.push({ date: `12/29/2021`, activity: `Facebook`, duration: 40 });

console.log(activities);

//SHOWING STATUS OF SCREEN TIME ON A CERTAIN DATE
function showStatus(date) {
  let totalDurationStatus = 0;
  let numberActivities = 0;
  const limit = 100;
  for (i = 0; i < activities.length; i++) {
    if (activities[i].date == date) {
      numberActivities++;
      totalDurationStatus += activities[i].duration;
    }
  }
  if (numberActivities < 1) {
    console.log(`Add some activities before calling showStatus!`);
  } else {
    console.log(
      `You have added ${numberActivities} activities. They amount to ${totalDurationStatus} min of usage.`
    );
  }
  if (totalDurationStatus >= limit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  } else {
    console.log(
      `You have left ${limit - totalDurationStatus} min of limited time.`
    );
  }
}

showStatus(`12/29/2021`);

//MOST SPENT TIME
function countSpentTime() {
  const obj = {};
  //function below group all activities from array activities and creates an object with key - activities and value - total spent time for a particular activity
  activities.forEach(function (activityNote) {
    if (obj.hasOwnProperty(activityNote.activity)) {
      obj[activityNote.activity] = obj[activityNote.activity] + activityNote.duration;
    } else {
      obj[activityNote.activity] = activityNote.duration;
    }
  });
  let maxTime = Math.max(...Object.values(obj)); //finds max value of spent time through all activity types
  const maxTimeTitle = Object.keys(obj).filter((key) => obj[key] === maxTime); //filters through obj to return all keys with max value
  console.log(maxTimeTitle);
}
countSpentTime();


