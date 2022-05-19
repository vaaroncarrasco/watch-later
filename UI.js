/**
 * User Interface Class
 */
 export class UI {
  /**
   * Add a New Link
   * @param {Object} link A new link Object
   */
  addLink(link) {
    const linkList = document.getElementById("link-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <span class="circle" data-color="${link.color}" style="background-color:#${link.color}"></span> - 
                    <strong>#${link.tag}</strong> - 
                    <a target="_blank" href="${link.url}" class="link">${link.name}</a> - 
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
    linkList.insertBefore(element, linkList.firstChild);
  }

  /**
   * Reset Form Values
   */
  resetForm() {
    document.getElementById("link-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Link Deleted Succsssfully", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
