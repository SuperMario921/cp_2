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

