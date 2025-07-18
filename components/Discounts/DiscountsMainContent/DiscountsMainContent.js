export function loadDiscountsMainContent() {
  fetch(
    "/Shopii/components/Discounts/DiscountsMainContent/DiscountsMainContent.html"
  )
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("main-content-container").innerHTML = html;
      // Load CSS
      let cssId = "discounts-main-content-css";
      let oldCss = document.getElementById(cssId);
      if (oldCss) oldCss.remove();
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "/Shopii/components/Discounts/DiscountsMainContent/DiscountsMainContent.css";
      link.id = cssId;
      document.head.appendChild(link);
    });
}
