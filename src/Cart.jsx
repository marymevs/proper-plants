export default function Cart() {
  const cart = [
    {
      id: 1,
      image: "🌿",
      name: "Fern",
    },
    {
      id: 2,
      image: "🌵",
      name: "Cactus",
    },
    {
      id: 3,
      image: "🌻",
      name: "Sunflower",
    },
  ];
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

  function addToCart(plant) {
    const newCart = cart;
    newCart.push(plant);
    setCart(newCart);
  }
}
