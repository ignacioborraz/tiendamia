const options = [
  {
    title: "Ofertas de la semana",
    href: "./index.html",
    refs: ["Laptops", "Audio", "Auticulares"],
  },
  {
    title: "Cómo comprar",
    href: "./index.html",
    refs: ["Formas de pago", "Envios", "Devoluciones"],
  },
  {
    title: "Costos y tarifas",
    href: "./index.html",
    refs: ["Impuestos", "Facturación"],
  },
  {
    title: "Mis pedidos",
    href: "./index.html",
    refs: ["Pedir nuevamente", "Lista de deseos"],
  },
  { title: "Garantía de Entrega", href: "./index.html", refs: [] },
];

function hideSearch() {
  const pathname = location.pathname;
  if (!pathname.includes("index")) {
    document
      .querySelector(".header-form")
      .removeChild(document.querySelector(".header-input"));
  }
}

function printNavBar(opts, id) {
  let template = "";
  for (const each of opts) {
    template =
      template +
      `
      <li class="nav-li">
        <a class="nav-a" href="${each.href}">${each.title}</a>
      </li>
    `;
  }
  const selector = document.getElementById(id);
  selector.innerHTML = template;
}

function printFooter(opts, id) {
  let template = "";
  for (const each of opts) {
    template =
      template +
      `
        <ul class="footer-ul">
        <li class="footer-main-item">
          <a class="footer-a" href="./index.html">${each.title}</a>
        </li>
        ${each.refs
          .map(
            (ref) =>
              `<li class="footer-li"><a class="footer-a" href="./index.html">${ref}</a></li>`
          )
          .join("")}
      </ul>
    `;
  }
  const selector = document.getElementById(id);
  selector.innerHTML = template;
}
