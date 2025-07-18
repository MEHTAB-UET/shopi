export function loadCustomersMainContent() {
  fetch(
    "/Shopii/components/Customers/CustomersMainContent/CustomersMainContent.html"
  )
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("main-content-container").innerHTML = html;
      // Load CSS
      let cssId = "customers-main-content-css";
      let oldCss = document.getElementById(cssId);
      if (oldCss) oldCss.remove();
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "/Shopii/components/Customers/CustomersMainContent/CustomersMainContent.css";
      link.id = cssId;
      document.head.appendChild(link);
    });
}
