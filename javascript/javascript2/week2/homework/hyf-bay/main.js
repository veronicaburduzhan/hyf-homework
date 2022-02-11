console.log("Script loaded");

const products = getAvailableProducts();
const productsList = document.getElementById("productList");
console.log(products);

//creates and adds INPUT elements to html document
const searchPanel = document.getElementById("searchPanel");
const searchProduct = document.createElement("input");
searchProduct.setAttribute("type", "text");
searchProduct.setAttribute("id", "searchProduct");
searchProduct.setAttribute("placeholder", "Product name");
searchPanel.appendChild(searchProduct);

const searchPrice = document.createElement("input");
searchPrice.setAttribute("type", "text");
searchPrice.setAttribute("id", "searchPrice");
searchPrice.setAttribute("placeholder", "Product price");
searchPanel.appendChild(searchPrice);

function renderProducts(products) {
  products.forEach((product) => {
    const productInfo = document.createElement("li");
    productInfo.innerHTML = `
            <ul class="product-info">
                <li class="product-name">${product.name}</li>
                <li>Price: ${product.price}</li>
                <li>Rating: ${product.rating}</li>
            </ul>
        `;
    productsList.appendChild(productInfo);
  });
}
renderProducts(products);

//searching by product name
searchProduct.addEventListener(`input`, function (event) {
  const inputProductName = event.target.value;
  const filteredProductByName = products.filter((product) =>
    product.name.toLowerCase().indexOf(inputProductName.toLowerCase() != -1)
  );
  renderProducts(filteredProductByName);
});

//searching by product price
searchPrice.addEventListener("input", function (event) {
  const inputProductPrice = event.target.value;
  const filteredProductByPrice = products.filter(function (product) {
    return product.price <= parseInt(inputProductPrice);
  });
  renderProducts(filteredProductByPrice);
});

//sorting by name
function sortProductByName(arr) {
  arr.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return renderProducts(arr);
}

function sortProductByPrice(arr) {
  arr.sort((a, b) => a.price - b.price);
  return renderProducts(arr);
}

function sortProductByRating(arr) {
  arr.sort((a, b) => b.rating - a.rating);
  return renderProducts(arr);
}

console.log(sortProductByRating(products));

const sortingDropdown = document.getElementById("sorting");
sortingDropdown.onchange = function (event) {
  let optionChosen = sortingDropdown.value;
  if ((optionChosen = "byName")) {
    sortProductByName(products);
  } else if ((optionChosen = "byPrice")) {
    sortProductByPrice(products);
  } else if ((optionChosen = "byRating")) {
    sortProductByRating(products);
  }
};

/*I checked the console and all of the function works properly but, unfortunately, none of them affect on the product list.
I've tried a bunch of methods and solutions but it just doesn't work. Please, check it and suggest any solution.
P.S. I assume there is a small mistake I've made that ruins everything :)*/