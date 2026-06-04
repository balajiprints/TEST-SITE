let selectedCategory = null;
let selectedProduct = null;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let currentOrder = null;

document.addEventListener("DOMContentLoaded", () => {

    loadCategories();

    updateCartCount();

    loadOrders();

});

function loadCategories() {

    const container =
    document.getElementById("categoryContainer");

    container.innerHTML = "";

    PRODUCT_DATA.forEach(category => {

        container.innerHTML += `
        <div class="card">

            <img src="${category.image}" alt="">

            <h3>${category.category}</h3>

            <button onclick="openCategory(${category.id})">
            View Products
            </button>

        </div>
        `;
    });
}

function openCategory(id) {

    selectedCategory =
    PRODUCT_DATA.find(c => c.id === id);

    document.getElementById("productTitle").innerText =
    selectedCategory.category;

    document.getElementById("productContainer").innerHTML = "";

    selectedCategory.products.forEach((product,index)=>{

        document.getElementById("productContainer").innerHTML += `

        <div class="card">

            <img src="${product.image}" alt="">

            <h3>${product.name}</h3>

            <button onclick="openProduct(${index})">
            View Options
            </button>

        </div>
        `;
    });

    document.getElementById("productSection")
    .classList.remove("hidden");

    document.getElementById("subProductSection")
    .classList.add("hidden");

}

function openProduct(index){

    selectedProduct =
    selectedCategory.products[index];

    document.getElementById("subTitle").innerText =
    selectedProduct.name;

    const container =
    document.getElementById("subProductContainer");

    container.innerHTML = "";

    selectedProduct.subProducts.forEach(item=>{

        container.innerHTML += `

        <div class="card">

            <img src="${selectedProduct.image}" alt="">

            <h3>${item.name}</h3>

            <h4>₹${item.price}</h4>

            <button onclick='addToCart(
            "${selectedCategory.category}",
            "${selectedProduct.name}",
            "${item.name}",
            ${item.price}
            )'>
            Add To Cart
            </button>

            <button onclick='buyNow(
            "${selectedCategory.category}",
            "${selectedProduct.name}",
            "${item.name}",
            ${item.price}
            )'>
            Buy Now
            </button>

        </div>
        `;
    });

    document.getElementById("subProductSection")
    .classList.remove("hidden");
}

function showCategories(){

    document.getElementById("productSection")
    .classList.add("hidden");

    document.getElementById("subProductSection")
    .classList.add("hidden");
}

function showProducts(){

    document.getElementById("subProductSection")
    .classList.add("hidden");
}

function addToCart(category,product,sub,price){

    cart.push({

        category,
        product,
        sub,
        price,
        qty:1

    });

    localStorage.setItem(
    "cart",
    JSON.stringify(cart));

    updateCartCount();

    alert("Added To Cart");
}

function buyNow(category,product,sub,price){

    cart = [];

    cart.push({

        category,
        product,
        sub,
        price,
        qty:1

    });

    localStorage.setItem(
    "cart",
    JSON.stringify(cart));

    updateCartCount();

    openCheckout();
}

function updateCartCount(){

    document.getElementById("cartCount")
    .innerText = cart.length;
}

function openCart(){

    const modal =
    document.getElementById("cartModal");

    const container =
    document.getElementById("cartItems");

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        container.innerHTML += `

        <div>

            <h4>${item.sub}</h4>

            <p>₹${item.price}</p>

            <button onclick="removeCart(${index})">
            Remove
            </button>

        </div>

        <hr>
        `;
    });

    document.getElementById("cartTotal")
    .innerText = "₹"+total;

    modal.style.display="block";
}

function closeCart(){

    document.getElementById("cartModal")
    .style.display="none";
}

function removeCart(index){

    cart.splice(index,1);

    localStorage.setItem(
    "cart",
    JSON.stringify(cart));

    updateCartCount();

    openCart();
}

function openCheckout(){

    closeCart();

    let total = 0;

    cart.forEach(item=>{

        total += item.price;

    });

    document.getElementById("checkoutTotal")
    .innerText = total;

    document.getElementById("checkoutSection")
    .classList.remove("hidden");

    generateQR(total);
}

function generateQR(amount){

    const upi =

`upi://pay?pa=${SHOP_CONFIG.upiId}&pn=${SHOP_CONFIG.shopName}&am=${amount}&cu=INR`;

    document.getElementById("qrContainer")
    .innerHTML =

    `<img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upi)}">`;
}

function payViaUPI(){

    let total = 0;

    cart.forEach(item=>{

        total += item.price;

    });

    const upiLink =

`upi://pay?pa=${SHOP_CONFIG.upiId}&pn=${SHOP_CONFIG.shopName}&am=${total}&cu=INR`;

    window.location.href = upiLink;
}

document.getElementById("checkoutForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    const name =
    document.getElementById("customerName").value;

    const mobile =
    document.getElementById("customerMobile").value;

    const address =
    document.getElementById("customerAddress").value;

    const remark =
    document.getElementById("customerRemark").value;

    const file =
    document.getElementById("designFile").files[0];

    if(!file){

        alert("Upload Design File");

        return;
    }

    const orderId =
    "BP"+Date.now();

    let total = 0;

    cart.forEach(item=>{

        total += item.price;

    });

    currentOrder = {

        orderId,

        customer:name,

        mobile,

        address,

        remark,

        total,

        items:cart,

        payment:"Paid"

    };

    let orders =
    JSON.parse(localStorage.getItem("orders"))
    || [];

    orders.push(currentOrder);

    localStorage.setItem(
    "orders",
    JSON.stringify(orders));

    showSuccess();

    loadOrders();

});

function showSuccess(){

    document.getElementById("checkoutSection")
    .classList.add("hidden");

    document.getElementById("successSection")
    .classList.remove("hidden");

    document.getElementById("orderDetails")
    .innerHTML = `

    <h3>Order Number:
    ${currentOrder.orderId}</h3>

    <p>Name:
    ${currentOrder.customer}</p>

    <p>Mobile:
    ${currentOrder.mobile}</p>

    <p>Total:
    ₹${currentOrder.total}</p>

    <p>Status:
    ${currentOrder.payment}</p>
    `;
}

function sendWhatsAppOrder(){

    let text =

`*BALAJI PRINTS ORDER*

Order No : ${currentOrder.orderId}

Customer : ${currentOrder.customer}

Mobile : ${currentOrder.mobile}

Address : ${currentOrder.address}

Amount : ₹${currentOrder.total}

`;

    currentOrder.items.forEach(item=>{

        text +=
`${item.category}
${item.product}
${item.sub}
₹${item.price}

`;
    });

    const url =

`https://wa.me/${SHOP_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

    window.open(url,"_blank");
}

function loadOrders(){

    let orders =
    JSON.parse(localStorage.getItem("orders"))
    || [];

    const container =
    document.getElementById("adminOrders");

    container.innerHTML = "";

    orders.forEach(order=>{

        container.innerHTML += `

        <div class="card">

        <h3>${order.orderId}</h3>

        <p>${order.customer}</p>

        <p>${order.mobile}</p>

        <p>₹${order.total}</p>

        </div>
        `;
    });
}

function searchOrder(){

    const keyword =
    document.getElementById("searchOrder")
    .value
    .toLowerCase();

    const cards =
    document.querySelectorAll("#adminOrders .card");

    cards.forEach(card=>{

        if(
        card.innerText.toLowerCase()
        .includes(keyword)
        ){

            card.style.display="block";

        }else{

            card.style.display="none";
        }
    });
}
