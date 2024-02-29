function printFilter(evento) {
  const text = evento.target.value;
  const found = products.filter((each) => each.title.includes(text));
  printProductCards(found, "products");
}
