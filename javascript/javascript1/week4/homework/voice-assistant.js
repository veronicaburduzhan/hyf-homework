let personName = "";
const toDoList = [];
const personBirthday = [];
const monthes = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getReply(command) {
  let commandSplit = command.split(" ");
  let userName = commandSplit[commandSplit.length - 1];

  //introducing to VA
  if (
    command.toLowerCase().includes("my name is") ||
    command.toLowerCase().includes("i am")
  ) {
    if (userName == personName) {
      return `Welcome back ${personName}!`;
    } else {
      personName = userName;
      return `Nice to meet you ${personName}`;
    }
  }
  //say user name
  if (
    command.toLowerCase().includes("what is my name") ||
    command.toLowerCase().includes("say my name")
  ) {
    if (personName == undefined || personName == "") {
      return `I don't know you name yet. Please, introduce yourself first.`;
    } else {
      return `You are ${personName}`;
    }
  }

  //add to to-do
  let activity = commandSplit.slice(1, -3).join(" ");
  if (
    command.toLowerCase().includes("add") &&
    command.toLowerCase().includes("to my todo")
  ) {
    toDoList.push(activity);
    return `${activity} has been added to your todos`;
  }

  //remove from to-do
  if (
    command.toLowerCase().includes("remove") &&
    command.toLowerCase().includes("from my todo")
  ) {
    let index = toDoList.indexOf(activity);
    if (index > -1) {
      toDoList.splice(index, 1);
      return `Removed ${activity} from your todo`;
    } else {
      return `There is no such activity in your todo`;
    }
  }

  //show full list of to-dos
  if (command.toLowerCase().includes("on my todo")) {
    if (toDoList.length === 1) {
      return `There is only 1 activity in your to-do list: ${toDoList[0]}`;
    } else if (toDoList.length > 1) {
      return `You have ${toDoList.length} activities in your to-do list. There are: ${toDoList}`;
    } else {
      return `You don't have any activities in your to-do list. Please, add some first`;
    }
  }

  //show current date
  let today = new Date();
  let date = today.getDate();
  let month = monthes[today.getMonth()];
  let year = today.getFullYear();
  if (
    command.toLowerCase().includes("day") &&
    command.toLowerCase().includes("today")
  ) {
    return `Today is ${date}. of ${month} ${year}`;
  }

  //simple math equation
  if (
    command.toLowerCase().includes("+") ||
    command.toLowerCase().includes("-") ||
    command.toLowerCase().includes("*") ||
    command.toLowerCase().includes("/")
  ) {
    let expression = commandSplit.slice(-3);
    if (command.toLowerCase().includes("+")) {
      return parseInt(expression[0]) + parseInt(expression[2]);
    }
    if (command.toLowerCase().includes("*")) {
      return parseInt(expression[0]) * parseInt(expression[2]);
    }
    if (command.toLowerCase().includes("-")) {
      return parseInt(expression[0]) - parseInt(expression[2]);
    }
    if (command.toLowerCase().includes("/")) {
      return parseInt(expression[0]) / parseInt(expression[2]);
    }
  }

  //set a timer (extra task: possibility to set timer either in minutes or in seconds)
  if (
    command.toLowerCase().includes("set") &&
    command.toLowerCase().includes("timer")
  ) {
    let timerStr = commandSplit.slice(4);
    console.log(`Timer set for ${timerStr.join(" ")}`);
    let timeInMilSec;
    if (timerStr[1] == "minutes" || timerStr[1] == "minute") {
      timeInMilSec = parseInt(timerStr[0]) * 60 * 1000;
    } else if (timerStr[1] == "seconds" || timerStr[1] == "second") {
      timeInMilSec = parseInt(timerStr[0]) * 1000;
    }
    setTimeout(() => {
      console.log("Timer done");
    }, timeInMilSec);
  }

  /* extra task */
  /* in a real situation this step should be right after greeting and introducing yourself */
  if (command.toLowerCase().includes("birthday")) {
    let birthday = commandSplit.slice(4);
    personBirthday.push(parseInt(birthday[0]));
    for (i = 0; i <= monthes.length; i++) {
      if (birthday[2] == monthes[i]) {
        personBirthday.push(monthes.indexOf(monthes[i]) + 1);
      }
    }
  }

  if (personBirthday[0] == date && personBirthday[1] == today.getMonth() + 1) {
    return `Happy Birthday ${personName}!`;
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add playing XBox to my todo"));
console.log(getReply("Remove playing XBox from my todo"));
console.log(getReply("Remove swimming from my todo")); // this activity haven't been added
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("4 * 12"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("I have birthday on 21 of January"));
