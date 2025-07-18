function createOperatorStationRow(type) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>
      <select class="operator-station-select">
        <option>Select</option>
        ${
          type === "monitor"
            ? '<option>24" Monitor</option><option>27" Monitor</option>'
            : "<option>Printer A</option><option>Printer B</option>"
        }
      </select>
    </td>
    <td>
      <input type="number" class="operator-station-qty-input" min="0" value="0" />
    </td>
    <td>
      <button type="button" class="operator-station-remove-btn">&#10006;</button>
    </td>
  `;
  return tr;
}

function renderOperatorStationTable(containerId, type) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!container.querySelector("table")) {
    const table = document.createElement("table");
    table.className = "operator-station-table";
    table.innerHTML = `
      <thead>
        <tr><th>Type</th><th>Quantity</th><th></th></tr>
      </thead>
      <tbody></tbody>
    `;
    container.appendChild(table);
  }
}

function addOperatorStationRow(containerId, type) {
  renderOperatorStationTable(containerId, type);
  const table = document.getElementById(containerId).querySelector("table");
  const tbody = table.querySelector("tbody");
  tbody.appendChild(createOperatorStationRow(type));
}

document.addEventListener("click", function (e) {
  // Show/hide operator station options
  if (e.target && e.target.name === "addOperatorStation") {
    const show = e.target.value === "yes";
    document.getElementById("operatorStationOptions").style.display = show
      ? "block"
      : "none";
  }
  // Add line item
  if (e.target && e.target.classList.contains("operator-station-add-btn")) {
    const type = e.target.getAttribute("data-ostype");
    if (type === "monitor") {
      addOperatorStationRow("monitorTableContainer", "monitor");
    } else if (type === "printer") {
      addOperatorStationRow("printerTableContainer", "printer");
    }
  }
  // Remove row
  if (e.target && e.target.classList.contains("operator-station-remove-btn")) {
    const tr = e.target.closest("tr");
    if (tr) tr.remove();
  }
});

// Initial row for each table (when options are shown)
window.addEventListener("DOMContentLoaded", function () {
  // Only add rows if options are visible (Yes selected)
  const yesRadio = document.querySelector(
    'input[name="addOperatorStation"][value="yes"]'
  );
  if (yesRadio && yesRadio.checked) {
    addOperatorStationRow("monitorTableContainer", "monitor");
    addOperatorStationRow("printerTableContainer", "printer");
  }
});
