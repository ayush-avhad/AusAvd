// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Visit My Blog button
document.addEventListener("DOMContentLoaded", () => {
    const visitBlogButton = document.getElementById("visit-blog");

    if (visitBlogButton) {
        visitBlogButton.addEventListener("click", () => {
            window.location.href = "blog.html"; // Make sure blog.html exists
        });
    }
});


