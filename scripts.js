const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all')
const buttonMapaAll = document.querySelector('.map-all');
const buttonSumAll = document.querySelector('.sum-all');
const buttonFilterAll = document.querySelector('.filter-all');
const searchInput = document.querySelector('#search-input');

function showAll(productsArray) {
    let myli = '';

    productsArray.forEach((product) => {
        myli += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price.toFixed(2)}</p>
            </li>
        `
    })

    list.innerHTML = myli;
}

buttonShowAll.addEventListener('click', () =>

    showAll(menuOptions));

buttonMapaAll.addEventListener('click', () => {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.90 // Multiplicar por 0.90 reduz o valor em 10%
    }));

    showAll(newPrices);
});

buttonSumAll.addEventListener('click', () => {
    const totalValue = menuOptions.reduce((acc, currentProduct) => {
        return acc + currentProduct.price
    }, 0);
    list.innerHTML = `
        <li class="total-row">
            <p>O valor total dos itens é:</p>
            <p class="item-price">R$ ${totalValue.toFixed(2)}</p>
        </li>
    `;
});

buttonFilterAll.addEventListener('click', () => {
    const veganProducts = menuOptions.filter((product) => product.vegan === true);

    showAll(veganProducts);
});


searchInput.addEventListener('input', () => {

    const searchValue = searchInput.value.toLowerCase();

    const filteredProducts = menuOptions.filter((product) => {
        return product.name.toLowerCase().includes(searchValue);
    });

    showAll(filteredProducts);
});


