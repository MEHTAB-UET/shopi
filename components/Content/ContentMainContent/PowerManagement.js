document.addEventListener("click", function (e) {
  if (e.target && e.target.name === "addPowerManagement") {
    const group = document.querySelectorAll('input[name="addPowerManagement"]');
    group.forEach((cb) => {
      if (cb !== e.target) cb.checked = false;
    });
  }
});
