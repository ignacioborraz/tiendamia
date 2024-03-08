import products from "../data/products.js";

import printProductCards from "./printProductCards.js";

export default function printFilter(evento) {
  const text = evento.target.value;
  const found = products.filter((each) =>
    each.title.toLowerCase().includes(text.toLowerCase())
  );
  printProductCards(found, "products");
}
