async function loadProducts() {
    const response = await fetch("products.json");
    const products = await response.json();

    displayProducts(products);

    const searchBox = document.getElementById("searchBox");

    searchBox.addEventListener("input", function () {
        const search = this.value.toLowerCase();

        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(search)
        );

        displayProducts(filteredProducts);
    });
}

function displayProducts(products) {

    const container = document.getElementById("products");

    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = "<h2>No Products Found</h2>";
        return;
    }

    products.forEach(product => {

        container.innerHTML += `
        <div class="card">

            <img src="${product.image}" alt="${product.name}">

<div class="card-content">
    <h3>${product.name}</h3>

    <a class="view-btn" href="${product.link}" target="_blank">
        Buy Now
    </a>
</div>

        </div>
        `;

    });

}

loadProducts();