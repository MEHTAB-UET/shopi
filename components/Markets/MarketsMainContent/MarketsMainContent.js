export function loadMarketsMainContent() {
  fetch("/Shopii/components/Markets/MarketsMainContent/MarketsMainContent.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("main-content-container").innerHTML = html;
      // Load CSS
      let cssId = "markets-main-content-css";
      let oldCss = document.getElementById(cssId);
      if (oldCss) oldCss.remove();
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "/Shopii/components/Markets/MarketsMainContent/MarketsMainContent.css";
      link.id = cssId;
      document.head.appendChild(link);
    });
}
