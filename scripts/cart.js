import options from "./data/layoutOptions.js";

import {
  hideSearch,
  printNavBar,
  printFooter,
  printIcons,
} from "./modules/printLayout.js";
import printCartCards from "./modules/printCartCards.js";
import printCartTotal from "./modules/printCartTotal.js";

hideSearch();
printIcons();
printNavBar(options, "navbar");
printFooter(options, "footer");

let cartproducts = JSON.parse(localStorage.getItem("cart"));
printCartCards(cartproducts, "productscart");
printCartTotal(cartproducts, "total");
