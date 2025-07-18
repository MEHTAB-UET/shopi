// Sidebar navigation logic for dynamic content switching

function dynamicImportAndLoad(loaderPath, loaderName) {
  import(loaderPath).then((module) => {
    module[loaderName]();
  });
}

document.addEventListener("click", function (e) {
  // Desktop sidebar
  if (e.target.closest(".sidebar-custom .sidebar-item")) {
    let item = e.target.closest(".sidebar-item");
    let text = item && item.textContent.trim();
    if (text === "Orders") {
      dynamicImportAndLoad(
        "/Shopii/components/Orders/OrderMainContent/OrderMainContent.js",
        "loadOrderMainContent"
      );
    }
    if (text === "Home") {
      dynamicImportAndLoad(
        "/Shopii/components/Home/HomeMainContent/HomeMainContent.js",
        "loadHomeMainContent"
      );
    }
    if (text === "Products") {
      dynamicImportAndLoad(
        "/Shopii/components/Products/ProductsMainContent/ProductsMainContent.js",
        "loadProductsMainContent"
      );
    }
    if (text === "Customers") {
      dynamicImportAndLoad(
        "/Shopii/components/Customers/CustomersMainContent/CustomersMainContent.js",
        "loadCustomersMainContent"
      );
    }
    if (text === "Marketing") {
      dynamicImportAndLoad(
        "/Shopii/components/Marketing/MarketingMainContent/MarketingMainContent.js",
        "loadMarketingMainContent"
      );
    }
    if (text === "Discounts") {
      dynamicImportAndLoad(
        "/Shopii/components/Discounts/DiscountsMainContent/DiscountsMainContent.js",
        "loadDiscountsMainContent"
      );
    }
    if (text === "Content") {
      dynamicImportAndLoad(
        "/Shopii/components/Content/ContentMainContent/ContentMainContent.js",
        "loadContentMainContent"
      );
    }
    if (text === "Markets") {
      dynamicImportAndLoad(
        "/Shopii/components/Markets/MarketsMainContent/MarketsMainContent.js",
        "loadMarketsMainContent"
      );
    }
    if (text === "Analytics") {
      dynamicImportAndLoad(
        "/Shopii/components/Analytics/AnalyticsMainContent/AnalyticsMainContent.js",
        "loadAnalyticsMainContent"
      );
    }
  }
  // Mobile offcanvas sidebar
  if (e.target.closest("#mobileSidebar .sidebar-item")) {
    let item = e.target.closest(".sidebar-item");
    let text = item && item.textContent.trim();
    if (text === "Orders") {
      dynamicImportAndLoad(
        "/Shopii/components/Orders/OrderMainContent/OrderMainContent.js",
        "loadOrderMainContent"
      );
      let offcanvas = bootstrap.Offcanvas.getOrCreateInstance(
        document.getElementById("mobileSidebar")
      );
      offcanvas.hide();
    }
    if (text === "Home") {
      dynamicImportAndLoad(
        "/Shopii/components/Home/HomeMainContent/HomeMainContent.js",
        "loadHomeMainContent"
      );
      let offcanvas = bootstrap.Offcanvas.getOrCreateInstance(
        document.getElementById("mobileSidebar")
      );
      offcanvas.hide();
    }
    if (text === "Products") {
      dynamicImportAndLoad(
        "/Shopii/components/Products/ProductsMainContent/ProductsMainContent.js",
        "loadProductsMainContent"
      );
      let offcanvas = bootstrap.Offcanvas.getOrCreateInstance(
        document.getElementById("mobileSidebar")
      );
      offcanvas.hide();
    }
    if (text === "Customers") {
      dynamicImportAndLoad(
        "/Shopii/components/Customers/CustomersMainContent/CustomersMainContent.js",
        "loadCustomersMainContent"
      );
      let offcanvas = bootstrap.Offcanvas.getOrCreateInstance(
        document.getElementById("mobileSidebar")
      );
      offcanvas.hide();
    }
    if (text === "Marketing") {
      dynamicImportAndLoad(
        "/Shopii/components/Marketing/MarketingMainContent/MarketingMainContent.js",
        "loadMarketingMainContent"
      );
      let offcanvas = bootstrap.Offcanvas.getOrCreateInstance(
        document.getElementById("mobileSidebar")
      );
      offcanvas.hide();
    }
    if (text === "Discounts") {
      dynamicImportAndLoad(
        "/Shopii/components/Discounts/DiscountsMainContent/DiscountsMainContent.js",
        "loadDiscountsMainContent"
      );
      let offcanvas = bootstrap.Offcanvas.getOrCreateInstance(
        document.getElementById("mobileSidebar")
      );
      offcanvas.hide();
    }
    if (text === "Content") {
      dynamicImportAndLoad(
        "/Shopii/components/Content/ContentMainContent/ContentMainContent.js",
        "loadContentMainContent"
      );
      let offcanvas = bootstrap.Offcanvas.getOrCreateInstance(
        document.getElementById("mobileSidebar")
      );
      offcanvas.hide();
    }
    if (text === "Markets") {
      dynamicImportAndLoad(
        "/Shopii/components/Markets/MarketsMainContent/MarketsMainContent.js",
        "loadMarketsMainContent"
      );
      let offcanvas = bootstrap.Offcanvas.getOrCreateInstance(
        document.getElementById("mobileSidebar")
      );
      offcanvas.hide();
    }
    if (text === "Analytics") {
      dynamicImportAndLoad(
        "/Shopii/components/Analytics/AnalyticsMainContent/AnalyticsMainContent.js",
        "loadAnalyticsMainContent"
      );
      let offcanvas = bootstrap.Offcanvas.getOrCreateInstance(
        document.getElementById("mobileSidebar")
      );
      offcanvas.hide();
    }
  }
});
