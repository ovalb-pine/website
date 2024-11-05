// Function to highlight the active link
function highlightActiveLink() {
  const currentPath = window.location.pathname.split("/").pop(); // Current page
  const currentHash = window.location.hash; // Hash part (e.g., #team)

  // Iterate over each link in the navigation
  document.querySelectorAll(".nav-item").forEach(function(link) {
    const linkHref = link.getAttribute("href").split("/").pop(); // Filename and fragment (if any)

    // Remove the active class from all links
    link.classList.remove("active");

    // Add 'active' class to the link that matches the current path and hash
    if (linkHref === currentPath + currentHash || linkHref === currentPath) {
      link.classList.add("active");
    }
  });
}

// Fetch the navigation HTML
fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;

    // Highlight the active link initially when the page loads
    highlightActiveLink();

    // Add an event listener for the 'hashchange' event to update the active link when hash changes
    window.addEventListener('hashchange', highlightActiveLink);
  });
