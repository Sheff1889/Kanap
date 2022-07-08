let productLocalStorage = JSON.parse(localStorage.getItem("cart"));


if (productLocalStorage === null || productLocalStorage == 0) {

    // cart is empty 
 
 } else {
 
     for (let i=0; i < productLocalStorage.length; i++) {
 
         // Creation of the "article" tag and insertion in the section
         let productArticle = document.createElement("article");
         document.querySelector("#cart__items").appendChild(productArticle);
         productArticle.className = "cart__item";
         productArticle.setAttribute("data-id", productLocalStorage[i].idSofa);
 
 
         console.log(productArticle)
 
         // Inserting the "div" element for the product image
         let productDivImg = document.createElement("div");
         productArticle.appendChild(productDivImg);
         productDivImg.className = "cart__item__img";
 
         console.log(productDivImg)
 
         // Insertion de l'image
         // [i] = whichever element in the loop that we are in
          let productImg = document.createElement("img");
         productDivImg.appendChild(productImg);
         productImg.src = productLocalStorage[i].imgItem;
         productImg.alt = productLocalStorage[i].altImg;
 
 
         // Inserting the "div" element for the product description
         let productItemContent = document.createElement("div");
         productArticle.appendChild(productItemContent);
         productItemContent.className = "cart__item__content";
 
         // Inserting the "div" element
         let productItemContentTitlePrice = document.createElement("div");
         productItemContent.appendChild(productItemContentTitlePrice);
         productItemContentTitlePrice.className = "cart__item__content__titlePrice";
 
         // IInserting the h2 title
         let productTitle = document.createElement("h2");
         productItemContentTitlePrice.appendChild(productTitle);
         productTitle.innerHTML = productLocalStorage[i].nameItem;
         productTitle.style.fontSize = "2em"
 
         // Inserting the color
         let productColor = document.createElement("p");
         productTitle.appendChild(productColor);
         productColor.innerHTML = productLocalStorage[i].colorItem;
         productColor.style.fontSize = ".6em";
 
         // Insertion of the price
         let productPrice = document.createElement("p");
         productItemContentTitlePrice.appendChild(productPrice);
         productPrice.innerHTML = productLocalStorage[i].priceItem + " €";
 
         // Inserting the "div" element
         let productItemContentSettings = document.createElement("div");
         productItemContent.appendChild(productItemContentSettings);
         productItemContentSettings.className = "cart__item__content__settings";
 
         // Inserting the "div" element
         let productItemContentSettingsQuantity = document.createElement("div");
         productItemContentSettings.appendChild(productItemContentSettingsQuantity);
         productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";
 
         // Inserting the quantity
         let productQuantity = document.createElement("p");
         productItemContentSettingsQuantity.appendChild(productQuantity);
         productQuantity.innerHTML = "Quantity: ";
 
         // Inserting the quantity
 
         let quantityInput = document.createElement("input");
         productItemContentSettingsQuantity.appendChild(quantityInput);
         quantityInput.type = "number";
         quantityInput.name = "itemQuantity";
         quantityInput.className = "itemQuantity";
         quantityInput.min = "1";
         quantityInput.max = "100";
         quantityInput.value = productLocalStorage[i].quantityItem;

         // Inserting the "div" element
        let productItemContentSettingsDelete = document.createElement("div");
        productItemContentSettings.appendChild(productItemContentSettingsDelete);
        productItemContentSettingsDelete.className = "cart__item__content__settings__delete";

        // Insertion of "p" delete
        let productDelete = document.createElement("p");
        productItemContentSettingsDelete.appendChild(productDelete);
        productDelete.className = "deleteItem";
        productDelete.innerHTML = "Delete Article";
        productDelete.addEventListener("click", (event) => {
            event.preventDefault;

             // save the selected id and color with the delete button
             let deleteId = productLocalStorage[i].idSofa;
            let deleteColor = productLocalStorage[i].colorItem;

            // filter the item clicked by the delete button
            productLocalStorage = productLocalStorage.filter( value => {
                return  value.idSofa !== deleteId || value.colorItem !== deleteColor
            } );
            if (totalQuantity.innerHTML == "0") {
                localStorage.removeItem("product");
                cartItems.innerHTML = "Cart is empty";
              }
              //If all items have been deleted, disable order button
              disableOrder();

            // send the new data to the localStorage
            localStorage.setItem('cart', JSON.stringify(productLocalStorage));


            // notify of the deletion and reload the page
            alert('Your article was cancelled');

            location.reload();
        });


     }
    }


    // modifying the total article

    let articleQuantity = document.getElementById('totalQuantity');
    totalQuantity = 0 ;


    productLocalStorage.forEach(e => {
        totalQuantity += Number(e.quantityItem)
     articleQuantity.innerHTML = totalQuantity
    });

console.log(totalQuantity)


// displaying the total Price of each article


let productTotalPrice = document.getElementById('totalPrice');
let totalPrice = 0;


productLocalStorage.forEach(element => {

totalPrice += element.priceItem * element.quantityItem
productTotalPrice.innerHTML = totalPrice
})

console.log(totalPrice)