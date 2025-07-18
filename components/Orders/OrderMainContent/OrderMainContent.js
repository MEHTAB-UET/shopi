// JS for OrderMainContent (future logic can go here)

export function loadOrderMainContent() {
  fetch("/Shopii/components/Orders/OrderMainContent/OrderMainContent.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("main-content-container").innerHTML = html;
      // Load CSS
      let cssId = "order-main-content-css";
      let oldCss = document.getElementById(cssId);
      if (oldCss) oldCss.remove();
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "/Shopii/components/Orders/OrderMainContent/OrderMainContent.css";
      link.id = cssId;
      document.head.appendChild(link);
    });
}
