document.addEventListener("DOMContentLoaded", () => {
  const addProductBtn = document.querySelectorAll(".add-product-btn");
  const productContainer = document.getElementById("product-container");
  const discountSpan = document.getElementById("discount");
  const totalAmountSpan = document.getElementById("total-amount");
  const cartCountSpan = document.getElementById("cart-count");

  let discount = 0;
  let total = 0;

  addProductBtn.forEach(button => {
    button.addEventListener("click", () => {
        const product = createProduct("PEPE CAP", 50, "./img/caps-360.png");
        productContainer.appendChild(product);
        total += 50;
        updateTotals();
        updateCartCount();
        saveToLocalStorage();
    });
});

  function createProduct(name, price, imageUrl) {
    const product = document.createElement("div");
    product.classList.add("product");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const img = document.createElement("img");
    img.src = imageUrl;
    img.width = 88;
    img.height = 88;
    imgContainer.appendChild(img);

    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("product-name");
    nameSpan.textContent = name;
    detailsContainer.appendChild(nameSpan);

    const priceSpan = document.createElement("span");
    priceSpan.classList.add("product-price");
    priceSpan.textContent = `$${price}`;
    detailsContainer.appendChild(priceSpan);

    const controlContainer = document.createElement("div");
    controlContainer.classList.add("control-container");

    const sizeContainer = document.createElement("div");
    sizeContainer.classList.add("size-container");

    const sizeSpan = document.createElement("span");
    sizeSpan.classList.add("button-label");
    sizeSpan.textContent = "L";
    sizeContainer.appendChild(sizeSpan);

    const sizeBorder = document.createElement("div");
    sizeBorder.classList.add("size-border");
    sizeContainer.appendChild(sizeBorder);

    controlContainer.appendChild(sizeContainer);

    const quantityContainer = document.createElement("div");
    quantityContainer.classList.add("quantity-container");

    const decrementButtonContainer = document.createElement("div");
    decrementButtonContainer.classList.add("button-container");
    const decrementSvg = createSvgIcon(
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#000000'><path d='M10.033 24.471c0.414 0 0.809-0.169 1.111-0.471 0.282-0.301 0.452-0.696 0.452-1.111v-9.412c0-0.414-0.169-0.809-0.452-1.111-0.301-0.282-0.696-0.452-1.111-0.452s-0.809 0.169-1.111 0.452c-0.301 0.301-0.452 0.696-0.452 1.111v9.412c0 0.414 0.151 0.809 0.452 1.111s0.696 0.471 1.111 0.471zM25.713 5.647h-6.268v-1.581c0-1.242-0.508-2.447-1.374-3.332-0.885-0.885-2.089-1.374-3.332-1.374h-3.144c-1.242 0-2.447 0.489-3.332 1.374-0.866 0.885-1.374 2.089-1.374 3.332v1.581h-6.268c-0.414 0-0.809 0.151-1.111 0.452s-0.452 0.696-0.452 1.111c0 0.414 0.151 0.809 0.452 1.111 0.301 0.282 0.696 0.452 1.111 0.452h1.562v17.261c0 1.242 0.508 2.447 1.374 3.332 0.885 0.866 2.089 1.374 3.332 1.374h12.555c1.242 0 2.447-0.508 3.332-1.374 0.866-0.885 1.374-2.089 1.374-3.332v-17.261h1.562c0.414 0 0.809-0.169 1.111-0.452 0.301-0.301 0.471-0.696 0.471-1.111s-0.169-0.809-0.471-1.111c-0.301-0.301-0.696-0.452-1.111-0.452zM10.033 4.066c0-0.414 0.169-0.809 0.452-1.111 0.301-0.282 0.696-0.452 1.111-0.452h3.144c0.414 0 0.809 0.169 1.111 0.452 0.282 0.301 0.452 0.696 0.452 1.111v1.581h-6.268v-1.581zM21.007 26.033c0 0.414-0.169 0.809-0.452 1.111-0.301 0.282-0.696 0.452-1.111 0.452h-12.555c-0.414 0-0.809-0.169-1.111-0.452-0.282-0.301-0.452-0.696-0.452-1.111v-17.261h15.68v17.261zM16.301 24.471c0.414 0 0.809-0.169 1.111-0.471s0.471-0.696 0.471-1.111v-9.412c0-0.414-0.169-0.809-0.471-1.111-0.301-0.282-0.696-0.452-1.111-0.452s-0.809 0.169-1.111 0.452c-0.282 0.301-0.452 0.696-0.452 1.111v9.412c0 0.414 0.169 0.809 0.452 1.111 0.301 0.301 0.696 0.471 1.111 0.471z' /></svg>"
    );
    decrementSvg.classList.add("decrement");
    decrementButtonContainer.appendChild(decrementSvg);
    quantityContainer.appendChild(decrementButtonContainer);

    const quantitySpan = document.createElement("span");
    quantitySpan.classList.add("quantity");
    quantitySpan.textContent = "1";
    quantityContainer.appendChild(quantitySpan);

    const incrementButtonContainer = document.createElement("div");
    incrementButtonContainer.classList.add("button-container");
    incrementButtonContainer.textContent = "+";
    incrementButtonContainer.addEventListener("click", () => {
      let quantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = quantity + 1;
      total += price;
      updateTotals();
      saveToLocalStorage();
    });
    quantityContainer.appendChild(incrementButtonContainer);

    controlContainer.appendChild(quantityContainer);

    detailsContainer.appendChild(controlContainer);

    product.appendChild(imgContainer);
    product.appendChild(detailsContainer);

    decrementSvg.addEventListener("click", () => {
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 1) {
        quantitySpan.textContent = quantity - 1;
        total -= price;
        updateTotals();
        saveToLocalStorage();
      } else {
        product.remove();
        total -= price;
        updateTotals();
        updateCartCount();
        saveToLocalStorage();
      }
    });

    return product;
  }

  function createSvgIcon(svgString) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = svgString.trim();
    return wrapper.firstChild;
  }

  function updateCartCount() {
    const productCount = productContainer.children.length;
    cartCountSpan.textContent = `(${productCount})`;
  }

  function updateTotals() {
    if (discountSpan && totalAmountSpan) {
      let finalTotal = total + discount;
      discountSpan.textContent = discount.toFixed(2);
      totalAmountSpan.textContent = finalTotal.toFixed(2);
    } else {
      console.error("One of the required elements is null.");
    }
  }

  function saveToLocalStorage() {
    const products = [];
    productContainer.querySelectorAll(".product").forEach((product) => {
      const name = product.querySelector(".product-name").textContent;
      const price = parseInt(
        product.querySelector(".product-price").textContent.replace("$", "")
      );
      const quantity = parseInt(product.querySelector(".quantity").textContent);
      const imageUrl = product.querySelector("img").src;
      products.push({ name, price, quantity, imageUrl });
    });
    localStorage.setItem("cartDiscount", discount);
    localStorage.setItem("cartTotal", total);
    localStorage.setItem("cartProducts", JSON.stringify(products));
  }

  function loadFromLocalStorage() {
    const savedDiscount =
      parseFloat(localStorage.getItem("cartDiscount")) || -30; 
    const savedTotal = parseFloat(localStorage.getItem("cartTotal")) || 0;
    const savedProducts =
      JSON.parse(localStorage.getItem("cartProducts")) || [];

    discount = savedDiscount;
    total += 30; 

    savedProducts.forEach(({ name, price, quantity, imageUrl }) => {
      const product = createProduct(name, price, imageUrl);
      const quantitySpan = product.querySelector(".quantity");
      quantitySpan.textContent = quantity;
      productContainer.appendChild(product);
      total += price * quantity;
    });

    updateCartCount();
    updateTotals();
  }

  loadFromLocalStorage();
});
