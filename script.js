async function loadProducts() {
    const productsContainer = document.getElementById("products");

    try {
        const response = await fetch("content/products.json");
        const data = await response.json();
        const products = data.products || [];

        productsContainer.innerHTML = "";

        products.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.className = "product";

            productCard.innerHTML = `
                ${product.image ? `<img src="${product.image}" alt="${product.name}" class="product-image">` : ""}
                <h2>${product.name}</h2>
                <p class="price">৳${product.price}</p>
                <button onclick="addToCart('${product.name}')">কার্টে যোগ করুন</button>
            `;

            productsContainer.appendChild(productCard);
        });
    } catch (error) {
        productsContainer.innerHTML = "<p>পণ্য দেখাতে সমস্যা হচ্ছে।</p>";
        console.error("Product loading error:", error);
    }
}

function addToCart(productName) {
    alert(productName + " কার্টে যোগ করা হয়েছে!");
}

loadProducts();
