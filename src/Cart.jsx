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
        <li>
          <p>
            {cartItem.image} {cartItem.name}
          </p>
          <p>
            <span>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </span>
          </p>
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
