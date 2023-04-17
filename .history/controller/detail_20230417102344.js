window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const paramProduct = urlParams.get("productId");
  let getProduct = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${paramProduct}`,
    method: "GET",
  })
    .then((resp) => {
      let product = resp.data.content;
      let buttonSize = ``;
      product.size.forEach((size) => {
        buttonSize += `<button class="button-size">${size}</button>`;
      });
      console.log(buttonSize);
      document.querySelector(".img_selected").innerHTML = `
      <img src="${product.image}" alt="" />
      `;
      document.querySelector(
        ".item_info"
      ).innerHTML = `<h2 class="item_name">${product.name}</h2>
        <p class="item_desc">
          ${product.description}
        </p>
        <div class="size">
          <p>Available Size</p>
            ${buttonSize}
        </div>
        <div class="price">
          <p>$${product.price}</p>
        </div>
        <div class="quantity">
          <button class="btn">+</button>
          <p>1</p>
          <button class="btn">-</button>
        </div>
        <div class="addToCart">
          <button class="add">add to cart</button>
        </div>`;
    })
    .catch((err) => {});
};


addMinusItem = () => {
    let i = 1;
    document.querySelector(".btnPlus").onclick = ;
    document.querySelector(".btnMinus").onclick = i-1;
    document.querySelector(".number").innerHTML = i;
}
