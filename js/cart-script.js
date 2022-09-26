// we get this data in (products.json) form sending request to the server when we open shop page
fetch("products.json").then((response) => {
  return response.json()
}).then((data) => {
  // save data in local storage
  localStorage.setItem("products", JSON.stringify(data))

  // check if there is no "cart" entry in ls, so that we create one
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]")
  }
})

// globar varaibles we need to access them from inside the functions

let products = JSON.parse(localStorage.getItem("products"))
let cart = JSON.parse(localStorage.getItem("cart"))

// Adding product in cart
function addItemToCart(productId) {
  let product = products.find((product) => {
    return product.id == productId
  })

  if (cart.length == 0) {
    cart.push(product)
  } else {
    let res = cart.find(ele => ele.id == productId)
    if (res === undefined) {
      cart.push(product)
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  // update cart item count span in navbar
  // let cartItemsCount = localStorage.getItem("cart").length
  // let cartSpan = document.querySelector('#cartItemsCount').textContent
  // cartSpan = cartItemsCount
}



// Remove a product from cart
function removeItemFromCart(productId) {
  let temp = cart.filter(item => item.id != productId)

  localStorage.setItem("cart", JSON.stringify(temp))

}






// Calculate cart total sum
function getTotal() {
  let temp = cart.map((item) => {
    return parseFloat(item.price)
  })

  let sum = temp.reduce((prev, next) => {
    return prev + next
  }, 0)
  return sum
}

// Updating product quatity in cart
function updateQuantity(productId, qty) {
  for (let product of cart) {
    if (product.id == productId) {
      product.qty = qty
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart))
}

window.onload = () => {

  let cartItems = JSON.parse(localStorage.getItem("cart"))
  let tbody = document.querySelector('tbody')
  let out = ''
  for (let product of cartItems) {
    out += `
    <tr>
      <td><img src="imgs/shop/${product.img}"></td>
      <td>
        <h5>${product.name}</h5>
      </td>
      <td>
        <h5>$<span class="itemPrice">${product.price}</span></h5>
      </td>
      <td>
        <div class="quantity my-2">
          <input type="button" value="-" class="minus" id="minus" onclick="">
          <input type="number" value="${product.qty}" class="qty" step="1" min="1" max="50" inputmode="numeric" name="quantity"
            title="qty">
          <input type="button" value="+" class="plus" id="plus" onclick="">
        </div>
      </td>
    
      <td>
        <h5>$<span class="totalItemPrice"></span> </h5>
      </td>
      <td><a onclick='removeItemFromCart(${product.id})'><i class='bx bxs-trash' style="color: red;"></i></a></td>
    </tr>
    `

  }

  tbody.innerHTML = out

  let renderTotal = document.querySelector('.total')
  let total = getTotal()
  let output = ''
  output += `
<div>
  <h5>المجموع النهائي</h5>
  <div class="d-flex justify-content-between">
    <h6>المجموع</h6>
    <p>$ <span class="subTotal">${getTotal()}</span></p>
  </div>
  <div class="d-flex justify-content-between">
    <h6>التوصيل</h6>
    <p>$ <span class="delivery">10</span> </p>
  </div>
  <hr class="second-hr">
  <div class="d-flex justify-content-between">
    <h6>المجموع الكلي</h6>
    <p>$ <span class="grandTotal">${total + 10}</span></p>
  </div>

  <button class="ml-auto">تأكيد الطلب</button>
</div>
`

  renderTotal.innerHTML = output
}

addItemToCart(1)
addItemToCart(2)
// addItemToCart(3)
// updateQuantity(2, 4)
// removeItemFromCart(3)
getTotal()