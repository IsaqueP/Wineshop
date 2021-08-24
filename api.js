// Caminho URL da API
const api_url = 'wine.json';


async function getWines(){
    const response = await fetch(api_url);
    const data = await response.json();

    const DOM = {
        productsContainer: document.querySelector('#main main'),

        addProduct(product, index){
            const div = document.createElement('div')
            div.classList.add('product')
            div.innerHTML = DOM.innerHTMLProduct(product)

            DOM.productsContainer.appendChild(div)

        },

        innerHTMLProduct(product){
            const html = 
                `
                <div class="prices">
                    <span class="productPrice">$79.00</span>
                </div>
                <img src='${product.image}' alt='${product.wine}'>
                <span class="productCountry">${product.location}</span>
                <div class="containerProductName">
                    <span class="productName">${product.wine}</span>
                </div>
                `
            return html;


            
        }
        
        
    }


    for(let i = 1; i<=40; i++){
        DOM.addProduct(data[i])

    }








    
}

getWines()
