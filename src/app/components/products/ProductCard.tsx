import React from "react";
import Image from "next/image";
import { Product } from "@/app/types";

import { ProductCardSkeleton } from "./ProductCardSkeleton";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, description, images, id, price, brand, rating } = product;
  return (
    <article
      role="listitem"
      aria-label="Product card"
      className="bg-gray-50 rounded-md overflow-clip shadow-md"
      key={id}
    >
      <Image
        alt={description}
        src={images[0]}
        width={500}
        height={500}
        priority
      />
      <div className="p-4 space-y-2 bg-red-robin-900 text-gray-100 ">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm">{description}</p>
        <p className="font-medium italic">{brand}</p>
        <div className="flex justify-between">
          <p>${price}</p>
          <p>{rating}</p>
        </div>
      </div>
    </article>
  );
};
