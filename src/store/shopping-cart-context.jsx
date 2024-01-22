import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    onAddToCart: (id) => {},
    updateItemQuantity: (id, amount) => {}
})