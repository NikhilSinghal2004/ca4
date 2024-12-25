// JavaScript to enhance the resume page

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Theme toggle button
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "Toggle Theme";
    themeToggle.style.position = "fixed";
    themeToggle.style.bottom = "20px";
    themeToggle.style.right = "20px";
    themeToggle.style.padding = "10px 20px";
    themeToggle.style.border = "none";
    themeToggle.style.borderRadius = "5px";
    themeToggle.style.cursor = "pointer";
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // Add animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    });

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
        section.classList.add("hidden");
    });

});
