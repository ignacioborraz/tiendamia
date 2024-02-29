hideSearch();
printNavBar(options, "navbar");
printFooter(options, "footer");

let cartproducts = JSON.parse(localStorage.getItem("cart"));
printCartCards(cartproducts, "productscart");
printCartTotal(cartproducts, "total");

const buySelector = document.getElementById("buy");
buySelector.addEventListener("click", () => {
  localStorage.removeItem("cart")
  cartproducts = [];
  printCartCards(cartproducts, "productscart");
  printCartTotal(cartproducts, "total");
});
