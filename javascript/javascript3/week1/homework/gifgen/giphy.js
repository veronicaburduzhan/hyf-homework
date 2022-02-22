const keyWord = document.getElementById("keyWord");
const keyNumber = document.getElementById("keyNumber");
const searchGif = document.getElementById("searchGif");
const gifResultField = document.getElementById("gifResult");
const extraNotes = document.getElementById("notes");
const keyNumberValue = keyNumber.value;

function renderGif(arr) {
  arr.forEach((gifElement) => {
    let gifImg = document.createElement("img");
    gifImg.classList.add("gif-img");
    gifImg.src = gifElement.images.original.webp;
    gifResultField.appendChild(gifImg);
  });
}

searchGif.addEventListener("click", showGif);
function showGif() {
  if (!keyWord.value) {
    extraNotes.innerHTML = `Please, add a key word in the input field below to start searching gifs!`;
  } else {
    (async function () {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=5zbr13S6NWoo8p6lu9UZiq7zBY0Zz9qs&q=${keyWord.value}&limit=${keyNumber.value}&offset=0&rating=g&lang=en`
      );
      if (response.ok) {
        const content = await response.json();
        const resultGif = content.data;
        if (!keyNumber.value) {
          keyNumberValue = 25;
          renderGif(resultGif);
        } else {
          renderGif(resultGif);
        }
      }
    })();
  }
}




