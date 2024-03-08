import printProductCards from "./printProductCards.js";

export default async function fetchOnSale() {
  try {
    let res = await fetch("./scripts/data/products.json");
    res = await res.json();
    const onsale = res.filter((each) => each.onsale);
    printProductCards(onsale, "product-container");
  } catch (error) {
    console.log(error);
  }
}
