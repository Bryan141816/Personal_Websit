document.addEventListener("DOMContentLoaded", function() {
    const navToggleBtn = document.getElementById('nav-toggle-btn');
    const navbarLinks = document.querySelectorAll('.navlink');
    const navLinkContainer = document.getElementById('nav-link-container');

    navToggleBtn.addEventListener('click', function() {
        if (window.getComputedStyle(navLinkContainer).display === 'none') {
            // Open the menu
            navLinkContainer.style.display = 'flex';
            navToggleBtn.textContent = '✕'; // Change to close icon
            // Disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Close the menu
            navLinkContainer.style.display = 'none';
            navToggleBtn.textContent = '☰'; // Change to menu icon
            // Enable scrolling
            document.body.style.overflow = 'auto';
        }
        navbarLinks.forEach(link => {
            // Delay adding the class by 50 milliseconds
            setTimeout(() => {
                link.classList.toggle('navvisible');
            }, 100);
        });
    });
    
    const items = document.querySelectorAll('.imageBox');

    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            items.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.add('dimmed');
                }
            });
            item.classList.remove('dimmed');
        });

        item.addEventListener('mouseout', () => {
            items.forEach(otherItem => {
                otherItem.classList.remove('dimmed');
            });
        });
    });

    setTimeout(() => {
        const imageBoxes = document.querySelectorAll(".imageBox");
        imageBoxes.forEach(imageBox => {
            imageBox.classList.add("visible");
        });

        const mainText = document.getElementById("mainText");
        mainText.classList.add("textVisible");
    }, 200); // Adjust the delay time (in milliseconds) as needed
});
