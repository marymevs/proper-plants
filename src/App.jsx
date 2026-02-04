import { useState } from "react";
import Plants from "./Plants";
import Cart from "./Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(cart, plant, setCart) {
    const itemExists = cart.find((i) => i.id === plant.id);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  }

  function removeFromCart(cart, plant, setCart) {
    const itemExists = cart.find((i) => i.id === plant.id);
    if (!itemExists) return;
    setCart(
      cart
        .map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

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
          <Cart
            cart={cart}
            setCart={setCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          ></Cart>
        </section>
      </main>
    </>
  );
}
