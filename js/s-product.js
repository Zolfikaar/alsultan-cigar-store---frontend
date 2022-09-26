fetch("products copy.json").then((res) => {
  return res.json()
}).then((products) => {
  let placeholder = document.querySelector('#s-product-holder')
  let out = ''
  for (let product of products) {
    out += `
    <div class="col-lg-6 col-md-12 col-12">
        <img src="imgs/shop/${product.imgs.mainImg}" class="img-fluid w-100 pb-1" id="MainImg">

        <div class="small-img-group">
          <div class="small-img-col">
            <img src="imgs/shop/${product.imgs.img1}" width="100%" class="small-img">
          </div>
          <div class="small-img-col">
            <img src="imgs/shop/${product.imgs.img2}" width="100%" class="small-img">
          </div>
          <div class="small-img-col">
            <img src="imgs/shop/${product.imgs.img3}" width="100%" class="small-img">
          </div>

        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-12">
        <h6 class="s-product-category">الرئيسية / ${product.category}</h6>
        <h3 class="py-4" class="s-product-name">${product.name}</h3>
        <h2>$${product.price}القطعة</h2>
        <div class="quantity my-2">
          <input type="button" value="-" class="minus" id="minus">
          <input type="number" value="1" id="quantity" step="1" min="1" max="50" inputmode="numeric" name="quantity"
            title="qty">
          <input type="button" value="+" class="plus" id="plus">
        </div>

        <button class="buy-btn my-2">أضف للسلة</button>
        <h4 class="my-5">تفاصيل المنتج</h4>
        <p class="s-product-desc">${product.desc}</p>
      </div>
    `
  }

  placeholder.innerHTML = out
})