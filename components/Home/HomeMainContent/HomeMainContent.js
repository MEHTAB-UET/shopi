// JS for HomeMainContent (future logic can go here)

export function loadHomeMainContent() {
  fetch("/Shopii/components/Home/HomeMainContent/HomeMainContent.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("main-content-container").innerHTML = html;
      // Load CSS
      let cssId = "home-main-content-css";
      let oldCss = document.getElementById(cssId);
      if (oldCss) oldCss.remove();
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/Shopii/components/Home/HomeMainContent/HomeMainContent.css";
      link.id = cssId;
      document.head.appendChild(link);
    });
}
