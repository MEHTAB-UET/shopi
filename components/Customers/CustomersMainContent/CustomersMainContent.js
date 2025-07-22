// Custom Tag Input for Choose Tags

document.addEventListener("DOMContentLoaded", function () {
  const tagInputBox = document.getElementById("tag-input-box");
  if (!tagInputBox) return;

  // Tag options (customize as needed)
  const tagOptions = [
    "Los Angeles",
    "San Antonio",
    "New York",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
  ];
  let selectedTags = [];

  // Create placeholder
  const placeholder = document.createElement("span");
  placeholder.className = "tag-input-placeholder";
  placeholder.textContent = "Choose Tags";
  tagInputBox.appendChild(placeholder);

  // Create dropdown
  const dropdown = document.createElement("div");
  dropdown.className = "tag-input-dropdown";
  dropdown.style.display = "none";
  tagInputBox.appendChild(dropdown);

  // Render tags
  function renderTags() {
    // Remove all tags except placeholder and dropdown
    Array.from(tagInputBox.querySelectorAll(".tag-input-tag")).forEach((el) =>
      el.remove()
    );
    if (selectedTags.length === 0) {
      placeholder.style.display = "";
    } else {
      placeholder.style.display = "none";
    }
    selectedTags.forEach((tag) => {
      const pill = document.createElement("span");
      pill.className = "tag-input-tag";
      pill.textContent = tag;
      const close = document.createElement("span");
      close.className = "tag-input-tag-remove";
      close.textContent = "×";
      close.title = "Remove";
      close.onclick = function (e) {
        e.stopPropagation();
        selectedTags = selectedTags.filter((t) => t !== tag);
        renderTags();
        renderDropdown();
      };
      pill.appendChild(close);
      tagInputBox.insertBefore(pill, dropdown);
    });
  }

  // Render dropdown
  function renderDropdown() {
    dropdown.innerHTML = "";
    const available = tagOptions.filter((tag) => !selectedTags.includes(tag));
    if (available.length === 0) {
      const none = document.createElement("div");
      none.className = "tag-input-dropdown-none";
      none.textContent = "No tags available";
      dropdown.appendChild(none);
      return;
    }
    available.forEach((tag) => {
      const item = document.createElement("div");
      item.className = "tag-input-dropdown-item";
      item.textContent = tag;
      item.onclick = function (e) {
        e.stopPropagation();
        selectedTags.push(tag);
        renderTags();
        renderDropdown();
        closeDropdown();
      };
      dropdown.appendChild(item);
    });
  }

  // Show/hide dropdown
  function openDropdown() {
    renderDropdown();
    dropdown.style.display = "block";
    tagInputBox.classList.add("active");
    dropdown.style.zIndex = 1000;
  }
  function closeDropdown() {
    dropdown.style.display = "none";
    tagInputBox.classList.remove("active");
  }

  // Always open dropdown on click anywhere in the box
  tagInputBox.addEventListener("mousedown", function (e) {
    e.preventDefault(); // Prevents focus loss
    openDropdown();
  });

  // Keyboard navigation (optional)
  tagInputBox.addEventListener("keydown", function (e) {
    if (e.key === "Tab" || e.key === "Escape") {
      closeDropdown();
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("mousedown", function (e) {
    if (!tagInputBox.contains(e.target)) {
      closeDropdown();
    }
  });

  // Initial render
  renderTags();
  renderDropdown();
});
