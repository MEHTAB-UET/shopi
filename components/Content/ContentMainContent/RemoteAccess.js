// This script ensures that only one of the Yes/No checkboxes can be checked at a time
// for the 'Would You Like To Add A Remote Data Portal?' question in the Remote Access section.
// It mimics radio button behavior using checkboxes for visual consistency with the rest of the UI.

// Listen for click events on the entire document
// (so it works for dynamically loaded content as well)
document.addEventListener("click", function (e) {
  // Check if the clicked element is one of the checkboxes for Remote Access
  if (e.target && e.target.name === "addRemotePortal") {
    // Get all checkboxes in this group (Yes and No)
    const group = document.querySelectorAll('input[name="addRemotePortal"]');
    // Uncheck all except the one that was just clicked
    group.forEach((cb) => {
      if (cb !== e.target) cb.checked = false;
    });
  }
});
