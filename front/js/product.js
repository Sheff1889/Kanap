/* const singleProduct = './product.html?id=';


const urlParams = new URLSearchParams(window.location.search)
let productId = urlParams.get("id")

fetch(api + productId)
 .then((response) => response.json())
 .then((data) => createCard(data));


function createCard(obj) {
  const container = document.getElementById('card-container');
  const row = document.createElement('div')
  const firstCol = document.createElement('div');
  const secondCol = document.createElement('div');} */


 /*  const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')

console.log(id); */




function getParameter ( parameterName) {
  let parameters = new URLSearchParams ( window.location.search);
  return parameters.get( parameterName);
}
// in console write: getParameter('id');



/* let url = window.location.href;
let newURL = new URL(url);
let id = newURL.searchParams.get('id');
let price = newURL.searchParams.get('price');

console.log(newURL)  */