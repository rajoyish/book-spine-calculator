document
  .getElementById("calculate-spine")
  .addEventListener("submit", function (e) {
    // 3 : Hide results
    document.getElementById("results").style.display = "none";

    // 3.1 : Show loader
    document.getElementById("loading").style.display = "block";

    // 3.2 : calculate results after 1 seconds
    setTimeout(calculateResults, 1000);

    e.preventDefault();
  });

function calculateResults(e) {
  // UI Vars
  const paperWeight = document.getElementById("paperWeight");
  const pages = document.getElementById("pages");
  const mm = document.getElementById("mm");
  const cm = document.getElementById("cm");
  const inch = document.getElementById("inch");

  // Math
  const weightVal = parseFloat(paperWeight.value);
  const totalPages = parseFloat(pages.value);
  const spineMm = weightVal * totalPages;
  const spineCm = spineMm / 10;
  const spineInch = spineMm / 25.4;

  if (isFinite(spineMm)) {
    mm.value = Math.round(spineMm);
    cm.value = spineCm.toFixed(1);
    inch.value = spineInch.toFixed(2);

    // 3.3 : showing result
    document.getElementById("results").style.display = "block";
    // 3.4 hide spinner loader
    document.getElementById("loading").style.display = "none";
  } else {
    // 2.4 Showing errors if nothing is typed in the form
    showError("Please check your numbers");
  }
}

// 2.5 Show Error
function showError(error) {
  // 5 : hiding both result and spiner if nothing is typed on the form
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "none";

  // create a div
  const errorDiv = document.createElement("div");

  // Get elements : where to put error
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add class
  errorDiv.className = "alert alert-danger";

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // 2.6 Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// 2.7 : clear error
function clearError() {
  document.querySelector(".alert").remove();
}
