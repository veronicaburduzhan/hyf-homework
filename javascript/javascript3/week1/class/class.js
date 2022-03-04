console.log("hi");

let jsn = `{"reference":"John 3:16","verses":[{"book_id":"JHN","book_name":"John","chapter":3,"verse":16,"text":"For God had such love for the world that he gave his only Son, so that whoever has faith in him may not come to destruction but have eternal life."}],"text":"For God had such love for the world that he gave his only Son, so that whoever has faith in him may not come to destruction but have eternal life.","translation_id":"bbe","translation_name":"Bible in Basic English","translation_note":"Public Domain"}`;

const bib = JSON.parse(jsn);
console.log(bib);

let astroJson = `{"people": [{"craft": "ISS", "name": "Mark Vande Hei"}, {"craft": "ISS", "name": "Pyotr Dubrov"}, {"craft": "ISS", "name": "Anton Shkaplerov"}, {"craft": "Shenzhou 13", "name": "Zhai Zhigang"}, {"craft": "Shenzhou 13", "name": "Wang Yaping"}, {"craft": "Shenzhou 13", "name": "Ye Guangfu"}, {"craft": "ISS", "name": "Raja Chari"}, {"craft": "ISS", "name": "Tom Marshburn"}, {"craft": "ISS", "name": "Kayla Barron"}, {"craft": "ISS", "name": "Matthias Maurer"}], "message": "success", "number": 10}`;

const response = await fetch("http://api.open-notify.org/astros.json");
if (response.ok) {
  const clone = response.clone();
  const content = await response.json();
  const astroP = document.createElement("p");
  const body = document.querySelector("body");

  const astronameUl = document.createElement("ul");
  astroP.innerHTML = `There are ${content.people.length} astronants in space.`;
  body.appendChild(astroP);
  body.appendChild(astronameUl);
  for (let i = 0; i < content.people.length; i++) {
    const astroNames = document.createElement("li");
    astroNames.innerHTML = content.people[i].name;
    astronameUl.appendChild(astroNames);
  }
}

const dogImg = document.createElement("img");
const body = document.querySelector("body");
body.appendChild(dogImg);
setInterval(async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  if (response.ok) {
    const clone = response.clone();
    const content = await response.json();

    dogImg.src = content.message;
  }
}, 2000);

const responseBreed = await fetch("https://dog.ceo/api/breeds/list/all");
if (responseBreed.ok) {
  const contentBreed = await responseBreed.json();
  const body = document.querySelector("body");

  const breedUl = document.createElement("ul");
  body.appendChild(breedUl);
  for (let i = 0; i < contentBreed.message.length; i++) {
    const breedNames = document.createElement("li");
    breedNames.innerHTML = contentBreed.message[i];
    breedUl.appendChild(breedNames);
  }
}
