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


     }
    }