export function loadMarketingMainContent() {
  fetch(
    "/Shopii/components/Marketing/MarketingMainContent/MarketingMainContent.html"
  )
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("main-content-container").innerHTML = html;
      // Load CSS
      let cssId = "marketing-main-content-css";
      let oldCss = document.getElementById(cssId);
      if (oldCss) oldCss.remove();
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "/Shopii/components/Marketing/MarketingMainContent/MarketingMainContent.css";
      link.id = cssId;
      document.head.appendChild(link);
    });
}
