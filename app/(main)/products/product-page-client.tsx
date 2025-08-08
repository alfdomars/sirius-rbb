// app/products/product-page-client.tsx
"use client";
import { useState } from "react";
import ProductFormModal from "./product-form-modal";

type Product = { id: number; name: string; price: number };

export default function ProductPageClient({
  initialData,
}: {
  initialData: Product[];
}) {
  const [products, setProducts] = useState(initialData);

  const handleSubmit = (product: { name: string; price: number }) => {
    setProducts([...products, { id: Date.now(), ...product }]);
  };

  return <ProductFormModal onSubmit={handleSubmit} />;
}
