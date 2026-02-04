export default function Cart({ cart, setCart, addToCart, removeFromCart }) {
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
