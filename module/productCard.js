import { appendChildrenList, makeDOMWithProperties } from "../utils/dom.js";

export const getProductCard = ({
  imgSrc,
  name,
  discountPercent,
  price,
  originalPrice,
}) => {
  const productCard = makeDOMWithProperties("div", {
    className: "product-card",
  });
  const productImgCon = makeDOMWithProperties("div", {
    className: "product-image-con",
  });
  const productImage = makeDOMWithProperties("img", {
    src: imgSrc,
    alt: name,
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
    innerHTML: name,
  });

  const productPriceContainer = makeDOMWithProperties("div", {
    className: "product-price-con",
  });

  const productDiscount = makeDOMWithProperties("div", {
    className: "product-discount-percent",
    innerHTML: `${discountPercent}%`,
  });

  const productPrice = makeDOMWithProperties("div", {
    className: "product-price",
    innerHTML: `${price.toLocaleString()}원`,
  });

  const productOriginalPrice = makeDOMWithProperties("div", {
    className: "product-original-price",
    innerHTML: `${originalPrice.toLocaleString()}원`,
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
  return productCard;
};
