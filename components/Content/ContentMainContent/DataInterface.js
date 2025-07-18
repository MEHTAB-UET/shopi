function createDataInterfaceRow() {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>
      <select class="data-interface-select">
        <option>Select</option>
        <option>Interface A</option>
        <option>Interface B</option>
      </select>
    </td>
    <td>
      <input type="number" class="data-interface-qty-input" min="0" value="0" />
    </td>
    <td>
      <button type="button" class="data-interface-remove-btn">&#10006;</button>
    </td>
  `;
  return tr;
}

function renderDataInterfaceTable(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!container.querySelector("table")) {
    const table = document.createElement("table");
    table.className = "data-interface-table";
    table.innerHTML = `
      <thead>
        <tr><th>Type</th><th>Quantity</th><th></th></tr>
      </thead>
      <tbody></tbody>
    `;
    container.appendChild(table);
  }
}

function addDataInterfaceRow(containerId) {
  renderDataInterfaceTable(containerId);
  const table = document.getElementById(containerId).querySelector("table");
  const tbody = table.querySelector("tbody");
  tbody.appendChild(createDataInterfaceRow());
}

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("data-interface-add-btn")) {
    addDataInterfaceRow("dataInterfaceTableContainer");
  }
  if (e.target && e.target.classList.contains("data-interface-remove-btn")) {
    const tr = e.target.closest("tr");
    if (tr) tr.remove();
  }
});

// Initial row for the table
window.addEventListener("DOMContentLoaded", function () {
  addDataInterfaceRow("dataInterfaceTableContainer");
});
