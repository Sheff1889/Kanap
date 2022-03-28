




 function getParameter ( parameterName) {
  let parameters = new URLSearchParams ( window.location.search);
  return parameters.get( parameterName);
}
// in console write: getParameter('id'); 














//display id in console
const fetchPromise = fetch('http://localhost:3000/api/products/');

fetchPromise.then((response) => {
  return response.json();
})
.then((products) => {
  const id = products.map((products) => {
    return products._id
  }).join("\n");
  //console.log(id);
}); 












const productTitle = document.querySelector('#title') ;
const productId = getParameter('id');
const fetchDescription = fetch(`http://localhost:3000/api/products/${productId}`);

fetchDescription.then((response) => {
  return response.json();
})
.then((product) => {
  console.log(product);
 
  productTitle.textContent =  product.productTitle;
  
}); 



const api = 'http://localhost:3000/api/products/';




fetch(api + productId)
  .then((response) => response.json())
  .then((data) => createCard(data));

  function createCard(object) {

    //function for getting image
    function imageSofa() {
      var frame = document.querySelector('.item__img');
      var img = document.createElement("IMG");
      img.src = ` ../images/logo.png`;
      //img.width = "300";
      frame.appendChild(img);
    }
    
    imageSofa(); 


    let name = document.getElementById('title');
    name.innerText = object.name;
    let price = document.getElementById('price');
    price.innerText = object.price;

    let description = document.getElementById('description');
    description.innerText = object.description;
    


    



  // chose color for sofa  

    let optionsProduct = document.getElementById('colors');

  // for loop with options (color)
  for (let i = 0; i < object.colors.length; i++) {

    let option = document.createElement('option');
    option.innerText = object.colors[i];
    optionsProduct.appendChild(option);
  }

  };





  


























