// 1. Programming Basics

const dishes = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmon",
];
for (i = 0; i < dishes.length; i++) {
  console.log(dishes[i]);
}

// 2. DOM manipulation
const body = document.querySelector("body");
const btn = document.createElement("button");
btn.setAttribute("name", "clickMe");
btn.innerText = "Click Me";
body.appendChild(btn);
btn.addEventListener("click", () => {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Javascript Text";
  body.appendChild(h1);
  body.style.backgroundColor = "red";
});

// 3. Async API calls
(async function () {
  try {
    const response = await fetch(`https://reqres.in/api/users`);
    const content = await response.json();
    const user1 = content.data[0].first_name;
    const user2 = content.data[1].first_name;
    const user3 = content.data[2].first_name;
    const div = document.createElement("div");
    div.innerHTML = `<p>${user1}</p><p>${user2}</p><p>${user3}</p>`;
    document.querySelector("body").appendChild(div);
  } catch (error) {
    console.log(error);
  }
})();

// 4. Class
class Person {
    constructor(firstname) {
        this.firstname = firstname;
    }
    sayHello() {
        console.log(`Hellow my name is ${this.firstname}`)
    }
}
const anna = new Person("Anna");
anna.sayHello(); 