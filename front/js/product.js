const idProduct = new URL(window.location.href).searchParams.get("id");
console.log(idProduct)


//getting the product elements
let imgProduct = document.querySelector(".item__img");
let img = document.createElement("img");
imgProduct.appendChild(img);
let titleProduct = document.getElementById("title");
let priceProduct = document.getElementById("price");
let descriptionProduct = document.getElementById("description");
let colorsProduct = document.getElementById("colors");



// call function
getProductArticle();

//Displaying the items on the product page
async function getProductArticle() {
  //returns a promise
  await fetch("http://localhost:3000/api/products/" + idProduct)
  // add .then to get the data out of the promise +responds from the API
 .then(response =>  {
  // convert the response into JSON, that returns another promise
  return response.json()
 })
 // get the data(JSON from the API) from the URL/idProducts
 .then(product => {
  //console.log(product)
  title.innerHTML = `<h1>${product.name}</h1>`;
  price.innerHTML = `${product.price}`;
  description.innerHTML = `${product.description}`;
  imgProduct.innerHTML=`<img src="${product.imageUrl}" alt="${product.altTxt}">`
  img.setAttribute("src", product.imageUrl);
  img.setAttribute("alt", product.altTxt);


     for (let i=0; i < product.colors.length; i++) {
         var color = product.colors[i]
        colors.innerHTML += `<option value="${color}">${color}</option> `
     }
 })
 // if there is an error
 .catch((error) => {
  console.error(error);
 });
}

// adding an article to the cart
let addToCartButton = document.getElementById("addToCart");
addToCartButton.addEventListener("click", addToCart);

function addToCart() {
    
};