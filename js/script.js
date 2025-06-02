// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Target both desktop and mobile triggers
    const browseBtn = document.querySelector('.browse-menu');        // desktop
    const mobileToggle = document.getElementById('hamburger-toggle'); // mobile
    const dropdown = document.getElementById('browse-dropdown');     // dropdown menu
  
    // Shared function to toggle dropdown
    const toggleDropdown = () => {
      dropdown.classList.toggle('show');
    };
  
    // Attach listeners if elements exist
    if (browseBtn) browseBtn.addEventListener('click', toggleDropdown);
    if (mobileToggle) mobileToggle.addEventListener('click', toggleDropdown);
  });
  



  