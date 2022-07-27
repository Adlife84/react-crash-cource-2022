import React, { useEffect, useState } from "react";
import { CreateProduct } from "./components/CreateProduct";
import { ErrorMessage } from "./components/ErrorMessage";
import { Modal } from "./components/Modal";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";

function App() {
  const { loading, error, products } = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading...</p>}
      {error && <ErrorMessage error={ error } />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <Modal title="Create new product">
        <CreateProduct />
      </Modal>
      {/* <Product product={ products[0] }/> */}
      {/* <Product product={ products[1] }/> */}
    </div>
  );
}

export default App;
