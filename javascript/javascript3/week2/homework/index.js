// Movies API
(async function () {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    const movies = await response.json();
    console.log(`Total amount of movies: ${movies.length}`);
    // 1. Bad movies array
    const badMovies = movies.filter((movie) => movie.rating < 7);
    console.log(badMovies);
    // 2. Bad movies since 2000
    const badMoviesSince2000 = badMovies.filter((movie) => movie.year >= 2000);
    console.log(badMoviesSince2000);
  } catch (error) {
    console.log(error);
  }
})();

//Promise after set time
function resolvePromiseAfterSetTime(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), resolveAfter * 1000);
  });
}
resolvePromiseAfterSetTime(3).then(() => {
  console.log("I'm called asynchronously");
});

async function resolveAfterSetTimeAsyncAwait(resolveAfter) {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), resolveAfter * 1000);
  });
  try {
    console.log("I'm called asynchronously with async/await");
  } catch (error) {
    console.log(error);
  }
}
resolveAfterSetTimeAsyncAwait(4);

//Rewrite time
async function setTimeoutPromise(timeout) {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), timeout * 1000);
  });
  try {
    console.log("Called after 5 seconds with async");
  } catch (error) {
    console.log(error);
  }
}
setTimeoutPromise(5);

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentLocation((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      resolve(`This is ${lat} and ${lon}`);
    });
  });
}
getCurrentLocation()
  .then((position) => console.log(position))
  .catch((error) => console.log(error));

//Fetching and waiting
//1. promises and .then
function resolveAfterTimeOutPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://yesno.wtf/api")
        .then((yesNoData) => yesNoData.json())
        .then((yesNoData) => {
          resolve(yesNoData);
        });
    }, 3000);
  });
}
resolveAfterTimeOutPromise()
  .then((yesNoData) => {
    console.log(`The answer with promises/.then is ${yesNoData.answer}`);
  })
  .catch((error) => {
    console.log(error);
  });

//2. async
async function resolveAfterTimeOutAsync() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
      const movies = await response.json();
      console.log(`There are ${movies.length} movies in the this API`);
    } catch (error) {
    console.log(error);
  }
}
resolveAfterTimeOutAsync();


