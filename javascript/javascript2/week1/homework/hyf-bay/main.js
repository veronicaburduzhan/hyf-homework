console.log("Script loaded");

const products = getAvailableProducts();
//console.log(products);

function renderProducts(products) {
  // your code here
    
    for (i = 0; i <= products.length; i++) {
        const productList = document.getElementById("product-list");
        const productInfo = document.createElement("li");
        const productName = document.createElement("h2");
        const productPrice = document.createElement("p");
        const productRating = document.createElement("p");
        productName.innerHTML = products[i].name;
        productPrice.innerHTML = `price: ${products[i].price}`;
        productRating.innerHTML = `rating: ${products[i].rating}`;
        productList.appendChild(productInfo);
        productInfo.appendChild(productName);
        productInfo.appendChild(productPrice);
        productInfo.appendChild(productRating);
        productName.style.color = `#1A1A40`;
        productInfo.style = `padding-bottom: 20px;`;
        productList.style = `margin: 50px;`
        productPrice.style.color = `#323232`;
        productRating.style.color = `#323232`;
    }
}
renderProducts(products);