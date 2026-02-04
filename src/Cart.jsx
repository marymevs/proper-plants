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
            <button onClick={() => removeFromCart(cart, cartItem, setCart)}>
              -
            </button>
            <p>{cartItem.quantity}</p>
            <button onClick={() => addToCart(cart, cartItem, setCart)}>
              +
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function addToCart(cart, plant, setCart) {
  const itemExists = cart.find((i) => i.id === plant.id);
  if (itemExists) {
    setCart(
      cart.map((item) =>
        item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  } else {
    const item = { ...plant, quantity: 1 };
    setCart([...cart, item]);
  }
}

export function removeFromCart(cart, plant, setCart) {
  const itemExists = cart.find((i) => i.id === plant.id);
  if (!itemExists) return;
  setCart(
    cart
      .map((item) =>
        item.id === plant.id ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0),
  );
}
