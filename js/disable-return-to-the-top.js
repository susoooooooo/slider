// Get all the anchor elements on the page
const links = document.querySelectorAll('a');

// Add a click event listener to each anchor element
links.forEach(link => {
  link.addEventListener('click', handleLinkClick);
});

// Function to handle the link click event
function handleLinkClick(event) {
  // Prevent the default behavior of scrolling to the top
  event.preventDefault();

  // Get the target element based on the href attribute of the link
  const target = document.querySelector(this.getAttribute('href'));

  // Scroll to the target element
  target.scrollIntoView({ behavior: 'smooth' });
}
