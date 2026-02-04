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
            <p>{cartItem.quantity}</p>
            <button>+</button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function addToCart(cart, plant, setCart) {
  const itemExists = cart.find((i) => i.id === plant.id);
  if (itemExists) {
    cart.map((item) =>
      item.id === plant.id ? { ...item, quantity: item.quantity++ } : item,
    );
  } else {
    const item = { ...plant, quantity: 1 };
    setCart([...cart, item]);
  }
}
