class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
    // converts price from EUR to chosen currency
    const basicPrice = this.price;
    const productName = this.name;
    (async function () {
      try {
        const response = await fetch(
          `http://api.exchangeratesapi.io/v1/latest?access_key=7a3901130b68c378280f5271cf4532c4`
        );
        const content = await response.json();
        const ratesObject = content.rates;
        const rates = Object.entries(ratesObject);
        rates.map((element) => {
          if (currency.toUpperCase().includes(element[0])) {
            console.log(
              `${productName}: ${Math.floor(basicPrice * element[1])} ${
                element[0]
              }`
            );
          }
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // adds a product to the products array
    this.products.push(product);
  }

  removeProduct(product) {
    // removes a product from the products array
    const productIndex = this.products.indexOf(product);
    this.products.splice(productIndex, 1);
  }

  searchProduct(productName) {
    // returns an array of product that match the productName parameter
    const products = this.products;
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(productName.toLowerCase());
    });
    console.log(filteredProducts);
  }

  renderProducts() {
    // renders the products to html
    const shoppingList = document.getElementById("shoppingList");
    for (let i = 0; i < this.products.length; i++) {
      const productItem = document.createElement("li");
      const productName = document.createElement("p");
      const productPrice = document.createElement("p");
      productName.innerHTML = this.products[i].name;
      productPrice.innerHTML = `${this.products[i].price} EUR`;
      productItem.appendChild(productName);
      productItem.appendChild(productPrice);
      shoppingList.appendChild(productItem);
    }
  }

  getTotal() {
    // gets the total price of the products in the shoppingcart
    const total = this.products.reduce((prev, next) => prev + next.price, 0);
    const totalAmount = document.getElementById("totalAmount");
    totalAmount.innerHTML = `${total} EUR`;
  }

  getUser(user) {
    // returns a promise with the data from api: https://jsonplaceholder.typicode.com/users/#
    (async function () {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${user}`
        );
        const content = await response.json();
        if (response.ok) {
          const userCart = document.getElementById("userCart");
          userCart.innerHTML = `Hi, ${content.name}!`;
          shoppingCart.renderProducts();
          shoppingCart.getTotal();
        } else {
          console.log(`Something wrong!`);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("Flat-screen", 650);
const iphone = new Product("iPhone", 1060);
const headphones = new Product("Headphones", 55);
const playstation5 = new Product("PlayStation 5", 560);
const ipad = new Product("iPad Pro", 1205);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(iphone);
shoppingCart.addProduct(headphones);
shoppingCart.addProduct(playstation5);
shoppingCart.addProduct(ipad);
shoppingCart.removeProduct(iphone);
shoppingCart.getUser(Math.floor(Math.random() * 10) + 1);
shoppingCart.searchProduct("PlayStation 5");
flatscreen.convertToCurrency("DKK");
iphone.convertToCurrency("USD");
headphones.convertToCurrency("GBP");
