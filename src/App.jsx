import Plants from "./Plants";
import Cart from "./Cart";
export default function App() {
  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <h2>Plants</h2>
        <Plants></Plants>
        <h2>Cart</h2>
        <Cart></Cart>
      </main>
    </>
  );
}
