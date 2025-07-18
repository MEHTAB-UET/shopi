function createExtensionAlarmRow() {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>
      <select class="extension-alarm-select">
        <option>Select</option>
        <option>Alarm Type A</option>
        <option>Alarm Type B</option>
      </select>
    </td>
    <td>
      <input type="number" class="extension-alarm-qty-input" min="0" value="0" />
    </td>
    <td>
      <button type="button" class="extension-alarm-remove-btn">&#10006;</button>
    </td>
  `;
  return tr;
}

function renderExtensionAlarmTable(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!container.querySelector("table")) {
    const table = document.createElement("table");
    table.className = "extension-alarm-table";
    table.innerHTML = `
      <thead>
        <tr><th>Type</th><th>Quantity</th><th></th></tr>
      </thead>
      <tbody></tbody>
    `;
    container.appendChild(table);
  }
}

function addExtensionAlarmRow(containerId) {
  renderExtensionAlarmTable(containerId);
  const table = document.getElementById(containerId).querySelector("table");
  const tbody = table.querySelector("tbody");
  tbody.appendChild(createExtensionAlarmRow());
}

function clearExtensionAlarmTable(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const table = container.querySelector("table");
  if (table) {
    table.remove();
  }
}

document.addEventListener("click", function (e) {
  // Show/hide alarm table
  if (e.target && e.target.name === "addExtendedAlarm") {
    // Only one checkbox per group (mimic radio)
    const group = document.querySelectorAll('input[name="addExtendedAlarm"]');
    group.forEach((cb) => {
      if (cb !== e.target) cb.checked = false;
    });
    const yesChecked = document.querySelector(
      'input[name="addExtendedAlarm"][value="yes"]'
    ).checked;
    const section = document.getElementById("extensionAlarmTableSection");
    if (yesChecked) {
      section.style.display = "block";
      // If table is empty, add a row
      if (
        !document
          .getElementById("extensionAlarmTableContainer")
          .querySelector("table")
      ) {
        addExtensionAlarmRow("extensionAlarmTableContainer");
      }
    } else {
      section.style.display = "none";
      clearExtensionAlarmTable("extensionAlarmTableContainer");
    }
  }
  // Add line item
  if (e.target && e.target.classList.contains("extension-alarm-add-btn")) {
    addExtensionAlarmRow("extensionAlarmTableContainer");
  }
  // Remove row
  if (e.target && e.target.classList.contains("extension-alarm-remove-btn")) {
    const tr = e.target.closest("tr");
    if (tr) tr.remove();
  }
  // Only one checkbox per group (mimic radio) for other groups
  if (e.target && e.target.type === "checkbox") {
    const name = e.target.name;
    if (name === "deadManAlarm" || name === "bnwas") {
      const group = document.querySelectorAll('input[name="' + name + '"]');
      group.forEach((cb) => {
        if (cb !== e.target) cb.checked = false;
      });
    }
  }
});

// Initial row for the table (if Yes is checked)
window.addEventListener("DOMContentLoaded", function () {
  const yesChecked = document.querySelector(
    'input[name="addExtendedAlarm"][value="yes"]'
  ).checked;
  if (yesChecked) {
    addExtensionAlarmRow("extensionAlarmTableContainer");
  } else {
    clearExtensionAlarmTable("extensionAlarmTableContainer");
    document.getElementById("extensionAlarmTableSection").style.display =
      "none";
  }
});
