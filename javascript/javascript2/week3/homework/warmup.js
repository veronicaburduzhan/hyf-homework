// General variables
const p = document.createElement("p");
const body = document.querySelector("body");
const div = document.createElement("div");

// 1. Log out text in 2,5 sec
setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);

// 2. Function with 2 paramaters: delay and stringToLog
function logInParticularTime(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}

logInParticularTime(5, "This logs out in 5 sec");
logInParticularTime(3, "This logs out in 3 sec");

// 3. Button to click on which logs out text in 5 sec
const myButton = document.createElement("button");
myButton.innerText = "Click me!";
body.appendChild(myButton);
myButton.addEventListener("click", myFunc);

function myFunc() {
  setTimeout(() => {
    console.log("Called after 5 sec");
  }, 5 * 1000);
}

// 4. Earth and Saturn
const earthLogger = () => {
  console.log("Earth");
};

const saturnLogger = () => {
  console.log("Saturn");
};

function planetLogFunction(callback) {
  callback();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// 5. Get user location by clicking on button
const locationButton = document.createElement("button");
locationButton.innerText = "Log location";
body.appendChild(p);
body.appendChild(locationButton);
const locationCoords = body.appendChild(div);

function success(geolocationPosition) {
  console.log(geolocationPosition.coords.latitude);
  console.log(geolocationPosition.coords.longitude);
  locationCoords.innerHTML = `<p>This is the lalitude: ${geolocationPosition.coords.latitude}</p>
                              <p> This is the longitude: ${geolocationPosition.coords.longitude}</p>`;
  initMap();
}

function error(error) {
  console.log(error.message);
}

locationButton.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(success, error);
});

// 6. Show coordinats on Google map (doesn't work!)
let map;
function initMap() {
  map = new google.maps.Map(locationCoords), {
    center: {
      lat: geolocationPosition.coords.latitude,
      lng: geolocationPosition.coords.longitude,
    },
    zoom: 8,
  }
};

// 7. Function with 2 parameters: delay and callback
function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}

runAfterDelay(4, () => {
  console.log("First callback function called with delay");
});

runAfterDelay(3, () => {
  console.log("Second callback function called with delay");
});

// 8. Double click on the page
body.addEventListener("dblclick", () => {
  console.log("Double click!");
});

// 9. Log out jokes
function logFunnyJoke() {
  console.log(
    "What’s the best thing about Switzerland? I don’t know, but the flag is a big plus."
  );
}

function logBadJoke() {
  console.log(
    "Helvetica and Times New Roman walk into a bar. “Get out of here!” shouts the bartender. “We don’t serve your type.”"
  );
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke(jokeCreator);
  } else {
    logBadJoke(jokeCreator);
  }
}

jokeCreator(false, logFunnyJoke, logBadJoke);
jokeCreator(true, logFunnyJoke, logBadJoke);

// FUNCTION AS A VARIABLE

// 1. Array of functions
const funcOne = () => {
  console.log("First element in the array of functions");
};
const funcTwo = () => {
  console.log("Second element in the array of functions");
};
const funcThree = () => {
  console.log("Third element in the array of functions");
};
const arrFunc = [funcOne, funcTwo, funcThree];
arrFunc.forEach((func) => func(arrFunc));

// 2. Functions as a const and normally
//funcAsVariable();
funcNormally();

const funcAsVariable = () => {
  console.log(
    'This function was created as a variable. We cannot call it before initialization unlike with "normal" function.'
  );
};
funcAsVariable();
function funcNormally() {
  console.log("This function was created normally");
}

//3. Object of function
const funcObject = {
  foo: function () {
    console.log("Hi! I'm in object");
  },
};

funcObject.foo();
