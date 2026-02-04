import { useState } from "react";
import Plants from "./Plants";
import Cart from "./Cart";
import { addToCart } from "./Cart";
export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <section>
          <h2>Plants</h2>
          <Plants cart={cart} addToCart={addToCart} setCart={setCart}></Plants>
        </section>
        <section id="cart-section">
          <h2>Cart</h2>
          <Cart cart={cart} setCart={setCart}></Cart>
        </section>
      </main>
    </>
  );
}
