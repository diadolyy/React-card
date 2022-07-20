import React from "react";
import Title from "./title";
import Code from "./code";
import Gallery from "./gallery";
import Counter from "./counter";
import Description from "./description";
import FullPrice from "./full-price";

function ProductPage({ product }) {
  return (
    <section>
      <Title>{product.name}</Title>
      <Code>{product.code}</Code>
      <div style={{ display: "flex" }}>
        <Gallery src={product.src} alt={product.name} />
        <div>
          <p>
            Цена:{" "}
            <FullPrice oldprice={product.oldPrice} price={product.price} />
          </p>
          <div>
            Количество: <Counter />
          </div>
          <p>
            <span>Доставка:</span> {product.delivery}
          </p>
          <button type="button">Купить</button>
        </div>
      </div>
      <Description text={product.description} />
    </section>
  );
}

export default ProductPage;
