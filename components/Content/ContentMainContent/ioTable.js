function createIoRow(type) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>
      <select class="io-select">
        ${
          type === "digital"
            ? `
          <option>8 Channel digital input</option>
          <option>16 Channel digital input</option>
        `
            : `
          <option>4 Channel analog input</option>
          <option>8 Channel analog input</option>
        `
        }
      </select>
    </td>
    <td>
      <input type="number" class="io-qty-input" min="0" value="${
        type === "digital" ? "10" : "0"
      }" />
    </td>
    <td>
      <button type="button" class="io-remove-btn">&#10006;</button>
    </td>
  `;
  return tr;
}

function renderIoTable(containerId, type) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!container.querySelector("table")) {
    const table = document.createElement("table");
    table.className = "io-table";
    table.innerHTML = `
      <thead>
        <tr><th>Type</th><th>Quantity</th><th></th></tr>
      </thead>
      <tbody></tbody>
    `;
    container.appendChild(table);
  }
}

function addIoRow(containerId, type) {
  renderIoTable(containerId, type);
  const table = document.getElementById(containerId).querySelector("table");
  const tbody = table.querySelector("tbody");
  tbody.appendChild(createIoRow(type));
}

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("io-add-btn")) {
    const type = e.target.getAttribute("data-io-type");
    if (type === "digital") {
      addIoRow("digitalIoTableContainer", "digital");
    } else if (type === "analog") {
      addIoRow("analogIoTableContainer", "analog");
    }
  }
  if (e.target && e.target.classList.contains("io-remove-btn")) {
    const tr = e.target.closest("tr");
    if (tr) tr.remove();
  }
});

// Initial row for each table
window.addEventListener("DOMContentLoaded", function () {
  addIoRow("digitalIoTableContainer", "digital");
  addIoRow("analogIoTableContainer", "analog");
});
