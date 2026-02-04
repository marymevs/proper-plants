import PLANTS from "./data.js";

export default function Plants({ cart, addToCart, setCart }) {
  return (
    <ul className="plants">
      {PLANTS.map((plant) => (
        <li key={plant.name}>
          <p className="plantImage">{plant.image}</p>
          <h3>{plant.name}</h3>
          <button
            onClick={() => {
              addToCart(cart, plant, setCart);
            }}
          >
            Add to cart
          </button>
        </li>
      ))}
    </ul>
  );
}
