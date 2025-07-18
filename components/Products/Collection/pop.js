document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "addCollectionBtn") {
    fetch("/Shopii/components/Products/Collection/pop.html")
      .then((res) => res.text())
      .then((html) => {
        const popup = document.getElementById("collectionPopup");
        popup.innerHTML = html;
        popup.style.display = "flex";
        // Load popup CSS
        let cssId = "collection-popup-css";
        let oldCss = document.getElementById(cssId);
        if (oldCss) oldCss.remove();
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/Shopii/components/Products/Collection/pop.css";
        link.id = cssId;
        document.head.appendChild(link);
        // Setup char counter and button enable/disable
        setTimeout(() => {
          const input = document.getElementById("collectionTitle");
          const counter = document.getElementById("collectionCharCount");
          const createBtn = document.getElementById("createCollectionBtn");
          function updateCounter() {
            const len = input.value.length;
            counter.textContent = len + "/40";
            createBtn.disabled = len === 0;
          }
          input.addEventListener("input", updateCounter);
          updateCounter();
        }, 0);
      });
  }
  if (
    e.target &&
    (e.target.id === "closeCollectionPopup" ||
      e.target.id === "cancelCollectionBtn")
  ) {
    document.getElementById("collectionPopup").style.display = "none";
  }
});
