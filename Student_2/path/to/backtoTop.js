// Wait for the DOM to load
{
  // Get the header element by its ID
  const header = document.getElementById("header");
      
  // Get the arrow icon element by its class name
  const backToTopButton = document.querySelector(".backtoTop");
        
  // Function to scroll to the header smoothly
  function scrollToHeader() {
  header.scrollIntoView({ behavior: "smooth" });
  }
        
  // Attach a click event listener to the arrow icon
  backToTopButton.addEventListener("click", scrollToHeader);
};
