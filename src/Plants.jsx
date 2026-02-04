import PLANTS from "./data.js";

/** A navbar that allows users to choose between a list of shows */
export default function Plants() {
  return (
    <ul className="plants">
      {PLANTS.map((plant) => (
        <li key={plant.name}>{plant.name}</li>
      ))}
    </ul>
  );
}
