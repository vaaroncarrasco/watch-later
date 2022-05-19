import { Link } from "./Link.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("link-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value,
      url = document.getElementById("url").value,
      tag = document.getElementById("tag").value,
      color = document.getElementById("color").value;

    // Create a new Oject Product
    const link = new Link(name, url, tag, color);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (name === "" || url === "" || tag === "" || color === "") {
      ui.showMessage("Please Insert data in all fields", "danger");
    }

    // Save Link
    ui.addLink(link);
    ui.showMessage("Link Added Successfully", "success");
    ui.resetForm();
  });

document.getElementById("link-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});
