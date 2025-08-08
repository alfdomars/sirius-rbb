// app/products/page.tsx
import ProductPageClient from "./product-page-client";

export default async function Page() {
  const products = await fetch("http://localhost:3000/api/products").then((r) =>
    r.json()
  );

  return <ProductPageClient initialData={products} />;
}
