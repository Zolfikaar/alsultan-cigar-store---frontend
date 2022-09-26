fetch("products.json").then((res) => {
  return res.json()
}).then((products) => {
  // localStorage.setItem("products", JSON.stringify(products))
  let placeholder = document.querySelector('#place-holder')
  let out = ''
  for (let product of products) {
    out += `
    <div class="product text-center col-lg-3 col-md-4 col-12">
      <div  onclick="window.location.href = 's-product.html'">
        <img src="imgs/shop/${product.img}" class="img-fluid mb-3" />
    
        <h5 class="p-name">${product.name}</h5>
        <h4>$<span class="p-price">${product.price}</span></h4>
        </div>
        <button class="buy-btn" onclick='addItemToCart(${product.id})'>أضف للسلة</button>
    </div>
    `
  }

  placeholder.innerHTML = out
})