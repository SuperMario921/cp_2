// Coding Project 2

function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
    .then(res => res.json())
    .then(data => {
        data.forEach(p => console.log(p.fields.name));
    })
    .catch(err => console.error("Fetch failed:", err));
}

async function fetchProductsAsync() {
    try{
        const res = await fetch("https://www.course-api.com/javascript-store-products");
        const data = await res.json();
        displayProducts(data);
    } catch (err) {
        handleError(err);
    }
}

function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    products.slice(0,5).forEach(p => {
        const { name, price, image } = p.fields;
        const card = document.createElement("div");
        card.classList.add("product-card");

        const img = document.createElement("img");
        img.src = image[0].url;
        img.alt = name;
        
        const title = document.createElement("h2");
        title.textContent = name;

        const priceTag = document.createElement("p");
        priceTag.textContent = `$${(price / 100).toFixed(2)}`;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(priceTag);

        container.appendChild(card);
    });
}

function handleError(error) {
    console.error("An error occurred:", error.message);
}

fetchProductsThen();
fetchProductsAsync();