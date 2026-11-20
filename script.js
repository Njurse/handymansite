(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.textContent = open ? "Menu" : "Close";
      nav.classList.toggle("is-open", !open);
    });
  }

  var quoteForm = document.getElementById("quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var note = document.getElementById("quote-demo-note");
      if (note) {
        note.classList.add("is-visible");
        note.focus();
      }
    });
  }

  var reviewBtn = document.getElementById("leave-review");
  if (reviewBtn) {
    reviewBtn.addEventListener("click", function () {
      var note = document.getElementById("review-demo-note");
      if (note) note.classList.add("is-visible");
    });
  }
})();
