




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
  // console.log(id);
}); 






 





























