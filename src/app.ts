const container = document.getElementById("container");

function renderProduct(title, description, price, imageURL) {
    return `<div class="product">
              <img class="image" src="${imageURL}" />
              <span class="product-title">${title}</span>
              <span class="description">${description}</span>
              <span class="price">${price}$</span>
           </div>
      `;
}

if(container)
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        for (const product of json.products) {
            let productElement = document.createElement('div');
            productElement.innerHTML = renderProduct(
                product.title, 
                product.description,
                product.price,
                product.thumbnail
            );
                container.appendChild(productElement);
        }
    })
