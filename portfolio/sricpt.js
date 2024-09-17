document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling effect for nav links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            const target = document.querySelector(this.getAttribute('href')); 
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth' 
                });
                // If on mobile, hide the nav menu after clicking a link
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active'); 
                    backButton.style.display = 'none'; 
                    toggleButton.style.display = 'block';
                }
            }
        });
    });
}
)
document.getElementById("ecommerceLink").addEventListener("click", function(event) {
    event.preventDefault(); 

    var contentArea = document.getElementById("contentArea");
    
    // Toggle visibility of the content area
    if (contentArea.style.display === "none" || contentArea.style.display === "") {
        contentArea.style.display = "block"; 
    } else {
        contentArea.style.display = "none"; 
    }
});

