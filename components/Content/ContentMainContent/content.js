// Make Yes/No checkboxes behave like radio buttons
document
  .querySelectorAll(
    ".vessel-checkbox-group, .io-checkbox-group, .extension-alarm-checkbox-group, .operator-station-checkbox-group, .power-management-checkbox-group, .remote-access-checkbox-group"
  )
  .forEach(function (group) {
    group.addEventListener("change", function (e) {
      if (e.target.type === "checkbox") {
        const checkboxes = group.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((cb) => {
          if (cb !== e.target) cb.checked = false;
        });
      }
    });
  });

//It finds all groups of checkboxes for Yes/No questions (using their group class names).
// When you check one box in a group, it automatically unchecks the other box in that same group.
// This ensures you can't select both "Yes" and "No" at the same time for any question.

document.querySelectorAll(".content-accordion-title").forEach(function (title) {
  title.addEventListener("click", function () {
    const item = title.closest(".content-accordion-item");
    const allItems = document.querySelectorAll(".content-accordion-item");
    allItems.forEach(function (otherItem) {
      if (otherItem !== item) {
        otherItem.classList.remove("open");
      }
    });
    item.classList.toggle("open");
  });
});
