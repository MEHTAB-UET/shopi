// Media preview
if (document.getElementById("mediaInput")) {
  document
    .getElementById("mediaInput")
    .addEventListener("change", function (e) {
      const preview = document.getElementById("mediaPreview");
      preview.innerHTML = "";
      Array.from(e.target.files).forEach((file) => {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = function (evt) {
            const img = document.createElement("img");
            img.src = evt.target.result;
            preview.appendChild(img);
          };
          reader.readAsDataURL(file);
        } else {
          const span = document.createElement("span");
          span.textContent = file.name;
          preview.appendChild(span);
        }
      });
    });
}
