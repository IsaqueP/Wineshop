// Caminho URL da API
const api_url = 'https://api.sampleapis.com/wines/reds';  

// conectando com o JSON
async function getWines(){
    const response = await fetch(api_url);
    const data = await response.json();

    // colocando os produtos com as informações da API
    const DOM = {

        // definindo o local onde será inserido os produtos
        productsContainer: document.querySelector('#main main'),

        // função para inserir os produtos
        addProduct(product, index){

            // criando o elemento e atribuindo uma classe e seu conteúdo
            const div = document.createElement('div')
            div.classList.add('product')
            div.innerHTML = DOM.innerHTMLProduct(product)

            DOM.productsContainer.appendChild(div)

        },

        // definindo a estrutura do conteúdo
        innerHTMLProduct(product){

            // criando números aleatórios para colocar no lugar dos preços
            let randomNumber = Math.random() * (150 - 50 + 1);
            
            const html = 
                `
                <div class="prices">
                    <span class="productPrice">R$${randomNumber.toFixed(2)}</span>
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

    // chamando os produtos
    for(let i = 1; i<=40; i++){
        DOM.addProduct(data[i])

    }
}

getWines()
