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

fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;

    // Check if the nav is present after insertion
    const nav = document.querySelector('.navigation');
    console.log(nav); // Log to verify if it's found

    if (nav) {
      // Add event listener for toggling visibility
      document.querySelector('.hamburger').addEventListener('click', function () {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      });

      // Highlight the active link when the page loads
      highlightActiveLink();

      // Add an event listener for 'hashchange' event to update active link
      window.addEventListener('hashchange', highlightActiveLink);
    } else {
      console.error('Navigation element not found after insertion.');
    }
  })
  .catch(error => console.error('Error fetching nav.html:', error));

