const cart = [
  {
    id: 1,
    image: "🌿",
    name: "Fern",
  },
];

export default function Cart() {
  return (
    <ul>
      {cart.map((cartItem) => (
        <li>{cartItem.name}</li>
      ))}
    </ul>
  );
}
