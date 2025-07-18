export function loadContentMainContent() {
  fetch("/Shopii/components/Content/ContentMainContent/ContentMainContent.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("main-content-container").innerHTML = html;
      // Load CSS
      let cssId = "content-main-content-css";
      let oldCss = document.getElementById(cssId);
      if (oldCss) oldCss.remove();
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "/Shopii/components/Content/ContentMainContent/ContentMainContent.css";
      link.id = cssId;
      document.head.appendChild(link);
    });
}
