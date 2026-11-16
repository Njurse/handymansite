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

  var serviceSelect = document.getElementById("book-service");
  var weekLabel = document.getElementById("week-label");
  var prevWeek = document.getElementById("prev-week");
  var nextWeek = document.getElementById("next-week");
  var dayRow = document.getElementById("day-row");
  var slotsEl = document.getElementById("slots");
  var summary = document.getElementById("book-summary");
  var confirmBtn = document.getElementById("book-confirm");
  var bookNote = document.getElementById("book-demo-note");

  if (!dayRow || !slotsEl) return;

  var weeks = [
    {
      label: "[Week of Nov 16, 2026  -  example dates only]",
      days: [
        { name: "Mon", date: "16" },
        { name: "Tue", date: "17" },
        { name: "Wed", date: "18" },
        { name: "Thu", date: "19" },
        { name: "Fri", date: "20" },
        { name: "Sat", date: "21" },
        { name: "Sun", date: "22" }
      ]
    },
    {
      label: "[Week of Nov 23, 2026  -  example dates only]",
      days: [
        { name: "Mon", date: "23" },
        { name: "Tue", date: "24" },
        { name: "Wed", date: "25" },
        { name: "Thu", date: "26" },
        { name: "Fri", date: "27" },
        { name: "Sat", date: "28" },
        { name: "Sun", date: "29" }
      ]
    }
  ];

  var times = [
    "8:00 AM",
    "9:30 AM",
    "11:00 AM",
    "1:00 PM",
    "2:30 PM",
    "4:00 PM"
  ];

  var weekIndex = 0;
  var selectedDay = 0;
  var selectedTime = null;

  function serviceName() {
    if (!serviceSelect) return "[Service TBD]";
    var value = serviceSelect.value;
    return value ? value : "[Pick a service]";
  }

  function updateSummary() {
    if (!summary) return;
    var day = weeks[weekIndex].days[selectedDay];
    var time = selectedTime ? selectedTime : "[Time not chosen]";
    summary.textContent =
      "Selected (demo): " +
      serviceName() +
      " · " +
      day.name +
      " " +
      day.date +
      " · " +
      time;
  }

  function renderDays() {
    dayRow.innerHTML = "";
    weeks[weekIndex].days.forEach(function (day, index) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "day-btn" + (index === selectedDay ? " is-selected" : "");
      btn.innerHTML = day.name + "<strong>" + day.date + "</strong>";
      btn.setAttribute("aria-pressed", index === selectedDay ? "true" : "false");
      btn.addEventListener("click", function () {
        selectedDay = index;
        selectedTime = null;
        if (bookNote) bookNote.classList.remove("is-visible");
        renderDays();
        renderSlots();
        updateSummary();
      });
      dayRow.appendChild(btn);
    });
    if (weekLabel) weekLabel.textContent = weeks[weekIndex].label;
  }

  function renderSlots() {
    slotsEl.innerHTML = "";
    times.forEach(function (time) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "slot-btn" + (selectedTime === time ? " is-selected" : "");
      btn.textContent = time;
      btn.setAttribute("aria-pressed", selectedTime === time ? "true" : "false");
      btn.addEventListener("click", function () {
        selectedTime = time;
        if (bookNote) bookNote.classList.remove("is-visible");
        renderSlots();
        updateSummary();
      });
      slotsEl.appendChild(btn);
    });
  }

  if (prevWeek) {
    prevWeek.addEventListener("click", function () {
      weekIndex = (weekIndex + weeks.length - 1) % weeks.length;
      selectedDay = 0;
      selectedTime = null;
      if (bookNote) bookNote.classList.remove("is-visible");
      renderDays();
      renderSlots();
      updateSummary();
    });
  }

  if (nextWeek) {
    nextWeek.addEventListener("click", function () {
      weekIndex = (weekIndex + 1) % weeks.length;
      selectedDay = 0;
      selectedTime = null;
      if (bookNote) bookNote.classList.remove("is-visible");
      renderDays();
      renderSlots();
      updateSummary();
    });
  }

  if (serviceSelect) {
    serviceSelect.addEventListener("change", function () {
      if (bookNote) bookNote.classList.remove("is-visible");
      updateSummary();
    });
  }

  if (confirmBtn) {
    confirmBtn.addEventListener("click", function () {
      if (bookNote) {
        bookNote.classList.add("is-visible");
        bookNote.focus();
      }
    });
  }

  renderDays();
  renderSlots();
  updateSummary();
})();
