
fetch('http://localhost:3000/api/products')
.then (data => {
    return data.json();
})
.then(products => {
    console.log(products);
    const html = products
    .map(products => {
        return `
        <div>
        <p><img src=${products.imageUrl} alt=${products.altTxt} width="250px" height="200px" </p>
        <p>${products.description}</p>
        <p>${products.imageUrl}</p>
        <p>${products.name}</p>
        <p>${products.price} €</p>
        <p>${products.id}</p>
        </div>
        `;
    }).join('');
    document.querySelector('.items').insertAdjacentHTML('afterbegin', html);
        })
       
.catch(e => {
        console.log(e)


      /* let products = 'http://localhost:3000/api/products'+  data. */
    });



   

    

    
/*  $.getJSON('http://localhost:3000/api/products', function(data){
    console.log(data);

    $.each(data, function(index, value){
        console.log(value);
    }) 
}); 
 */

/* fetch('http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926')
 .then(data => {
     return data.json();
 })
 .then(api => {
     console.log(api.colors);
     console.log(api.description);
 });

const update = {
    colors: 'colors',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    userId: "107fb5b75607497b96722bda5b504926",
};



const options = {
    method: 'ID',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
    }; */


   /*  fetch('https://jsonplaceholder.typicode.com/107fb5b75607497b96722bda5b504926')
  .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(products => {
      console.log(products);
       {
        //   
        id: '107fb5b75607497b96722bda5b504926'
        };
      }).catch(e => {
      console.log(e);
      });
 */
      
/*    

      const getProducts = () => {
        const request = new XMLHttpRequest();

      // fires every time there is a state change 
      request.addEventListener('readystatechange', () => {
         // console.log(request, request.readyState);
         if( request.readyState === 4 && request.status === 200){
             console.log(request.responseText);
         }else if (request.readyState === 4 ){
             console.log('could not fetch the data');
         }
      });

      request.open('GET','http://localhost:3000/api/products' );
      request.send();
    };

    getProducts(); */