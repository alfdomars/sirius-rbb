// app/products/product-form-modal.tsx
"use client";

type Product = { name: string; price: number };

type Props = {
  onSubmit: (product: Product) => void;
};

export default function ProductFormModal({ onSubmit }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name: "Test", price: 100 });
      }}
    >
      <button type="submit">Save</button>
    </form>
  );
}
