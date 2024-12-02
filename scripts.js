// JavaScript for smooth scroll effect (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the button
let goTopBtn = document.getElementById("goTopBtn");

// Show the button when the user scrolls down 100px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goTopBtn.style.display = "block";  // Show button
    } else {
        goTopBtn.style.display = "none";   // Hide button
    }
};

// Function to scroll to the top when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0;  // For Safari
    document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE, and Opera
}
// JavaScript for smooth scroll to top
document.getElementById('scroll-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Smooth scroll effect
    });
});
// Scroll Event Listener to Track Progress
window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Define section offsets and heights
    const aboutSection = document.querySelector('#about');
    const skillsSection = document.querySelector('#skills');
    const projectsSection = document.querySelector('#projects');
    const contactSection = document.querySelector('#contact');

    // Define the navigation items
    const aboutNav = document.querySelector('nav a[href="#about"]');
    const skillsNav = document.querySelector('nav a[href="#skills"]');
    const projectsNav = document.querySelector('nav a[href="#projects"]');
    const contactNav = document.querySelector('nav a[href="#contact"]');

    // Update progress bar and text highlight for each section
    handleProgressBarVisibility(aboutSection, 'progress-about', aboutNav);
    handleProgressBarVisibility(skillsSection, 'progress-skills', skillsNav);
    handleProgressBarVisibility(projectsSection, 'progress-projects', projectsNav);
    handleProgressBarVisibility(contactSection, 'progress-contact', contactNav);

    // Update the progress bars for the current section
    updateProgressBar(aboutSection, 'progress-about');
    updateProgressBar(skillsSection, 'progress-skills');
    updateProgressBar(projectsSection, 'progress-projects');
    updateProgressBar(contactSection, 'progress-contact');
});

// Function to update the progress bar for each section
function updateProgressBar(section, progressBarId) {
    const progressBar = document.getElementById(progressBarId);

    // Get the section's position and height
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Calculate the scroll percentage
    const scrollPercentage = Math.min(1, Math.max(0, (window.scrollY - sectionTop + window.innerHeight) / (sectionHeight + window.innerHeight)));

    // Set the width of the progress bar based on scroll percentage
    progressBar.style.width = scrollPercentage * 100 + '%';
}

// Function to handle the visibility of progress bars and text glow effect
function handleProgressBarVisibility(section, progressBarId, navItem) {
    const progressBar = document.getElementById(progressBarId);

    // Get the section's position and height
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Determine if the section is in the viewport
    const isInViewport = window.scrollY >= sectionTop - window.innerHeight && window.scrollY < sectionTop + sectionHeight;

    if (isInViewport) {
        // Show progress bar if section is in viewport
        progressBar.style.display = 'block';
        // Add text glow effect to the nav item
        navItem.classList.add('text-glow');
    } else {
        // Hide progress bar if section is not in viewport
        progressBar.style.display = 'none';
        // Remove text glow effect from the nav item
        navItem.classList.remove('text-glow');
    }
}

// Define the coding platforms section
const codingPlatformsSection = document.querySelector('#coding-platforms');
const codingPlatformsNav = document.querySelector('nav a[href="#coding-platforms"]');

// Track scroll progress
window.addEventListener('scroll', () => {
    handleProgressBarVisibility(codingPlatformsSection, 'progress-coding-platforms', codingPlatformsNav);
    updateProgressBar(codingPlatformsSection, 'progress-coding-platforms');
});

// Ensure the function `handleProgressBarVisibility` includes coding platforms
function handleProgressBarVisibility(section, progressBarId, navItem) {
    const progressBar = document.getElementById(progressBarId);
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Check if section is in viewport
    const isInViewport = window.scrollY >= sectionTop - window.innerHeight && window.scrollY < sectionTop + sectionHeight;

    if (isInViewport) {
        progressBar.style.display = 'block';
        navItem.classList.add('text-glow');
    } else {
        progressBar.style.display = 'none';
        navItem.classList.remove('text-glow');
    }
}


