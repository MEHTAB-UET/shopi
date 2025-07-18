document.addEventListener("click", function (e) {
  // Handle Products dropdown (desktop and mobile)
  const productsBtn = e.target.closest(
    '.sidebar-item[data-dropdown="products"]'
  );
  const allDropdowns = document.querySelectorAll(
    '.sidebar-sublist[data-dropdown-list="products"]'
  );
  const isSubOption = e.target.closest(
    '.sidebar-sublist[data-dropdown-list="products"] .sidebar-item'
  );

  if (productsBtn) {
    // Toggle Products sublist
    allDropdowns.forEach((list) => {
      list.style.display = list.style.display === "block" ? "none" : "block";
    });
    // Prevent closing immediately
    e.stopPropagation();
    return;
  } else if (isSubOption) {
    // Clicked a sub-option: do nothing (keep sublist open)
    return;
  } else {
    // Clicked elsewhere: close Products sublist
    allDropdowns.forEach((list) => {
      list.style.display = "none";
    });
  }
});
