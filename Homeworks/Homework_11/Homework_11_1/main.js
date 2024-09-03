// Взяти https://dummyjson.com/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.

const cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;

        for (const cart of carts) {
            const cartContainer = document.createElement('div');
            cartContainer.classList.add('cart-container');

            const cartTitle = document.createElement('h2');
            cartTitle.innerText = `Cart number: ${cart.id}`;

            const productsContainer = document.createElement('ol');
            productsContainer.classList.add('products-container');
            for (const product of cart.products) {
                const singleProduct = document.createElement('li');
                const info = document.createElement('p');
                info.innerText = `
                      Id: ${product.id}, Title: ${product.title},
                      Price: ${product.price}, Quantity: ${product.quantity},
                      Total: ${product.total},
                      Discount Percentage: ${product.discountPercentage},
                      Discounted Total: ${product.discountedTotal},
                    `

                const img = document.createElement('img');
                img.src = product.thumbnail;
                singleProduct.append(img, info);
                productsContainer.appendChild(singleProduct);

            }

            const cartInfo = document.createElement('div');
            cartInfo.innerText = `
                    Total: ${cart.total},
                    Discounted Total: ${cart.discountedTotal},
                    User Id: ${cart.userId},
                    Total Products: ${cart.totalProducts},
                    Total Quantity: ${cart.totalQuantity}`



            cartContainer.append(cartTitle, productsContainer, cartInfo);
            cartsDiv.appendChild(cartContainer);
        }
    });