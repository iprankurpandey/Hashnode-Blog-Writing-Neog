import React from "react";
import { CartState } from "../context/Context";

function Home() {
  const {
    state: { products },
  } = CartState();

  return (
    <div>
      {/* <Filters /> */}
      <div className="productContainer">
        {products.map((prod) => {
          return <span>{prod.name}</span>;
        })}
      </div>
    </div>
  );
}

export default Home;
