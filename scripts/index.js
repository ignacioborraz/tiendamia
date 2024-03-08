import { printNavBar, printFooter, printIcons } from "./modules/printLayout.js";
import printProductCards from "./modules/printProductCards.js";
import printFilter from "./modules/printFilter.js";

printIcons();

fetch("./scripts/data/layoutOptions.json")
  .then((res) => {
    //console.log(res);
    return res.json();
  })
  .then((res) => {
    //console.log(res);
    printNavBar(res, "navbar");
    printFooter(res, "footer");
  })
  .catch((err) => console.log(err));

fetch("./scripts/data/products.json")
  .then((res) => res.json())
  .then((res) => printProductCards(res, "products"))
  .catch((err) => console.log(err));

const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", printFilter);
