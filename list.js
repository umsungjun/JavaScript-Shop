{
  /* <div class="product-card">
              <div class="product-image-con">
                 <img src="public/assets/파프리카.jpg" alt="파프리카 2입">
                 <button type="button" class="cart-toggle-btn">
                    <img src="public/assets/cart.png" class="cart-image">
                 </button>
              </div>
              <div class="product-description">
                 <div class="product-name">파프리카 2입</div>
                 <div class="product-price-con">
                    <div class="product-discount-percent">20%</div>
                    <div class="product-price">2,000원</div>
                 </div>
                 <div class="product-original-price">2,500원</div>
              </div>
           </div> */
}

import { appendChildrenList, makeDOMWithProperties } from "./utils/dom.js";

const sectionDOM = document.getElementsByTagName("section")[0];

const productCard = makeDOMWithProperties("div", { className: "product-card" });
const productImgCon = makeDOMWithProperties("div", {
  className: "product-image-con",
});
const productImage = makeDOMWithProperties("img", {
  src: "public/assets/파프리카.jpg",
  alt: "파프리카 2입",
});
const cartToggleBtn = makeDOMWithProperties("button", {
  className: "cart-toggle-btn",
  type: "button",
});
const cartImage = makeDOMWithProperties("img", {
  className: "cart-image",
  src: "public/assets/cart.png",
  alt: "카트 이미지",
});

const productDescription = makeDOMWithProperties("div", {
  className: "product-description",
});

const productName = makeDOMWithProperties("div", {
  className: "product-name",
  innerText: "파프리카 2입",
});

const productPriceContainer = makeDOMWithProperties("div", {
  className: "product-price-con",
});

const productDiscount = makeDOMWithProperties("div", {
  className: "product-discount-percent",
  innerText: "20%",
});

const productPrice = makeDOMWithProperties("div", {
  className: "product-price",
  innerText: "2,000원",
});

const productOriginalPrice = makeDOMWithProperties("div", {
  className: "product-original-price",
  innerText: "2,500원",
});

cartToggleBtn.appendChild(cartImage);

appendChildrenList(productImgCon, [productImage, cartToggleBtn]);
appendChildrenList(productPriceContainer, [productDiscount, productPrice]);
appendChildrenList(productDescription, [
  productName,
  productPriceContainer,
  productOriginalPrice,
]);

appendChildrenList(productCard, [productImgCon, productDescription]);

sectionDOM.appendChild(productCard);
