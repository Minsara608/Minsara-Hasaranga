document.addEventListener("DOMContentLoaded", () => {
    // Simple alert when the page loads
    alert("Welcome to my website!");

    // Example of adding interactivity
    const section = document.querySelectorAll("section");
    section.forEach(section => {
        section.addEventListener("click", () => {
            alert('What You Want } section!');    
        });
    });
});