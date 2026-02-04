export default function Cart({ cart, setCart }) {
  if (cart.length === 0) {
    return <p>Add to see items in cart</p>;
  }

  return (
    <ul className="cart">
      {cart.map((cartItem) => (
        <li key={cartItem.name}>
          <span>
            {cartItem.image} {cartItem.name}
          </span>
          <span id="cart-buttons">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function addToCart(cart, plant, setCart) {
  console.log("I'M ADDING TO CART");
  const item = plant;
  setCart([...cart, item]);
}
