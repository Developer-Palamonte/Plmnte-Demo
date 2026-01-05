import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const addToCart = (product, pack, qty) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.pack === pack
      );

      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.pack === pack
            ? { ...i, qty: i.qty + qty }
            : i
        );
      }

      return [...prev, { ...product, pack, qty }];
    });

    setOpen(true);

    setToast(`Added ${qty} x ${product.title} (${pack}) to cart!`);
    setTimeout(() => setToast(null), 3000);
  };

  const updateQty = (index, delta) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const removeItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, open, setOpen, updateQty, removeItem, toast }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
