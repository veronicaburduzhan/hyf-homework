//ODD DOUBLED NUMBERS
const numbers = [1, 2, 3, 4];

const newNumbers = numbers
  .filter((number) => number % 2 !== 0)
  .map((number) => number * 2);

console.log(`The doubled numbers are: ${newNumbers}`);

//MOVIES
// 1 - short movie titles
const shortTitleMovies = movies
  .filter((movie) => movie.title.length <= 6)
  .map((movie) => movie.title);

console.log(shortTitleMovies);

// 2 - long movie titles
const longTitleMovies = movies
  .filter((movie) => movie.title.length >= 12)
  .map((movie) => movie.title);

console.log(longTitleMovies);

// 3 - numbers of movies from 1980-1989
const moviesFrom80th = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);

console.log(`The number of movies from 80': ${moviesFrom80th.length}`);

// 4 - array of movies with extra key - "tag"
const moviesWithExtraKey = movies.map((movie) => {
  if (movie.rating < 4) {
    movie.tag = "Bad";
  } else if (movie.rating >= 4 && movie.rating < 7) {
    movie.tag = "Average";
  } else {
    movie.tag = "Good";
  }
  return movie;
});

console.log(moviesWithExtraKey);

// 5 - array of rating movies with rating higher than 6
const highRatingMovies = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);

console.log(highRatingMovies);

//6 - Surfer, Alien, Benjamin 

const titlesWithBenjamin = movies.filter((movie) =>
  movie.title.toLowerCase().includes("benjamin")
);
const titlesWithAlien = movies.filter((movie) =>
  movie.title.toLowerCase().includes("alien")
);
const titlesWithSurfer = movies.filter((movie) =>
  movie.title.toLowerCase().includes("surfer")
);
const total =
  titlesWithAlien.length + titlesWithBenjamin.length + titlesWithSurfer.length;

console.log(
  `The number of movies with specific words in their titles: ${total}`
);

//7 - duplicated words in a title
const movieTitles = movies.map((movie) => movie.title);
const movieTitlesToLowerCase = movieTitles.map((title) =>
  title.toLowerCase().split(" ")
);
const movieDuplicatedTitlesSplitted = [];

for (const title of movieTitlesToLowerCase) {
  title.filter((word, index) => {
    if (title.indexOf(word) !== index) {
      movieDuplicatedTitlesSplitted.push(title);
    }
  });
}
const movieDuplicatedTitles = movieDuplicatedTitlesSplitted.map((title) =>
  title.join(" ")
);
console.log(movieDuplicatedTitles);

//8 - calculate average rating
const averageRating =
  movies.reduce((prev, next) => prev + next.rating, 0) / movies.length;

console.log(`The average rating of the movies is ${averageRating}`);

//9 - numbers of good, average and bad movies
const groupByTag = moviesWithExtraKey.reduce((groupByTagObject, movie) => {
  if (movie.tag in groupByTagObject) {
    groupByTagObject[movie.tag]++;
  } else {
    groupByTagObject[movie.tag] = 1;
 }
  return groupByTagObject;
}, {});

console.log(groupByTag);
