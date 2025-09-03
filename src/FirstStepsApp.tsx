import { itemInCart } from "./data/item-in-cart";
import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>
      {itemInCart.map((cart) => (
        <ItemCounter key={cart.id} name={cart.productName} value={cart.quantity} />
      ))}
    </>
  )
}