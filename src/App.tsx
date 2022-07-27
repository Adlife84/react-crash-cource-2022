import React, { useEffect, useState } from "react";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";

function App() {
  const { loading, error, products } = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-400">{ error }</p>}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {/* <Product product={ products[0] }/> */}
      {/* <Product product={ products[1] }/> */}
    </div>
  );
}

export default App;
