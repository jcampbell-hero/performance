//Hide and show the an element from a button click event
function toggleElement(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }