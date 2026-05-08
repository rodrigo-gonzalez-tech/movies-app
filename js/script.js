const global = {
  currentPage: window.location.pathname,
};

// Highlight Active Page Link
function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

// Init App
function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("Home");
      break;
    case "/movies.html":
      console.log("Movies");
      break;
    case "/movie-details.html":
      console.log("Movie Details");
      break;
    case "/shows.html":
      console.log("TV Shows");
      break;
    case "/tv-details.html":
      console.log("TV Details");
      break;
    case "/search.html":
      console.log("Search");
      break;
  }

  highlightActiveLink();
}

// Event Listeners
document.addEventListener("DOMContentLoaded", init);
