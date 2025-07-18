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
      // Load JS for I/O table
      let jsId = "io-table-js";
      let oldJs = document.getElementById(jsId);
      if (oldJs) oldJs.remove();
      let script = document.createElement("script");
      script.src = "/Shopii/components/Content/ContentMainContent/ioTable.js";
      script.id = jsId;
      document.body.appendChild(script);
      // Load DataInterface CSS
      let diCssId = "data-interface-css";
      let oldDiCss = document.getElementById(diCssId);
      if (oldDiCss) oldDiCss.remove();
      let diLink = document.createElement("link");
      diLink.rel = "stylesheet";
      diLink.href =
        "/Shopii/components/Content/ContentMainContent/DataInterface.css";
      diLink.id = diCssId;
      document.head.appendChild(diLink);
      // Load DataInterface JS
      let diJsId = "data-interface-js";
      let oldDiJs = document.getElementById(diJsId);
      if (oldDiJs) oldDiJs.remove();
      let diScript = document.createElement("script");
      diScript.src =
        "/Shopii/components/Content/ContentMainContent/DataInterface.js";
      diScript.id = diJsId;
      document.body.appendChild(diScript);
      // Load OperatorStation CSS
      let osCssId = "operator-station-css";
      let oldOsCss = document.getElementById(osCssId);
      if (oldOsCss) oldOsCss.remove();
      let osLink = document.createElement("link");
      osLink.rel = "stylesheet";
      osLink.href =
        "/Shopii/components/Content/ContentMainContent/OperatorStation.css";
      osLink.id = osCssId;
      document.head.appendChild(osLink);
      // Load OperatorStation JS
      let osJsId = "operator-station-js";
      let oldOsJs = document.getElementById(osJsId);
      if (oldOsJs) oldOsJs.remove();
      let osScript = document.createElement("script");
      osScript.src =
        "/Shopii/components/Content/ContentMainContent/OperatorStation.js";
      osScript.id = osJsId;
      document.body.appendChild(osScript);
      // Load ExtensionAlarm CSS
      let eaCssId = "extension-alarm-css";
      let oldEaCss = document.getElementById(eaCssId);
      if (oldEaCss) oldEaCss.remove();
      let eaLink = document.createElement("link");
      eaLink.rel = "stylesheet";
      eaLink.href =
        "/Shopii/components/Content/ContentMainContent/ExtensionAlarm.css";
      eaLink.id = eaCssId;
      document.head.appendChild(eaLink);
      // Load ExtensionAlarm JS
      let eaJsId = "extension-alarm-js";
      let oldEaJs = document.getElementById(eaJsId);
      if (oldEaJs) oldEaJs.remove();
      let eaScript = document.createElement("script");
      eaScript.src =
        "/Shopii/components/Content/ContentMainContent/ExtensionAlarm.js";
      eaScript.id = eaJsId;
      document.body.appendChild(eaScript);
      // Load RemoteAccess CSS
      let raCssId = "remote-access-css";
      let oldRaCss = document.getElementById(raCssId);
      if (oldRaCss) oldRaCss.remove();
      let raLink = document.createElement("link");
      raLink.rel = "stylesheet";
      raLink.href =
        "/Shopii/components/Content/ContentMainContent/RemoteAccess.css";
      raLink.id = raCssId;
      document.head.appendChild(raLink);
      // Load RemoteAccess JS
      let raJsId = "remote-access-js";
      let oldRaJs = document.getElementById(raJsId);
      if (oldRaJs) oldRaJs.remove();
      let raScript = document.createElement("script");
      raScript.src =
        "/Shopii/components/Content/ContentMainContent/RemoteAccess.js";
      raScript.id = raJsId;
      document.body.appendChild(raScript);
    });
}

document.addEventListener("click", function (e) {
  const title = e.target.closest(".content-accordion-title");
  if (title) {
    const item = title.parentElement;
    const allItems = document.querySelectorAll(".content-accordion-item");
    allItems.forEach((i) => {
      if (i !== item) i.classList.remove("open");
    });
    item.classList.toggle("open");
  }
});
