import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? 'bg-yeallow-400' : 'bg-blue-400'

  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2 ">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      {/* <p>{ product.description }</p> */}

      <button
        onClick={() => setDetails(true)}
        className="py-2 px-4 border bg-yeallow-400 text-black"
      >
        Show Details
      </button>

      <button
        onClick={() => setDetails(false)}
        className="py-2 px-4 border bg-blue-400 text-black"
      >
        Hide Details
      </button>

      <button
        onClick={() => setDetails(prev => !prev)}
        className={btnClasses.join(' ')}
      >
        { details? 'Hide Details' : 'Show Details'}
      </button>

      {details && (
        <div>
          <p>{product.description}</p>
          <p>Rate: <span style={{ fontWeight: 'bold'}}>{product.rating?.rate}</span></p>
        </div>
      )}
    </div>
  );
}
