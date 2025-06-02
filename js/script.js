// 🧠 Step 1: Grab the Browse button and dropdown
const browseBtn = document.querySelector('.browse-menu');
const dropdown = document.getElementById('browse-dropdown');

// 🧠 Step 2: Add a click event to the button
browseBtn.addEventListener('click', () => {
  // 🧠 Step 3: Toggle the dropdown menu on/off
  dropdown.classList.toggle('show');
});

