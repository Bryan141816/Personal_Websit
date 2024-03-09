window.addEventListener('scroll', function() {
    let mainImage = document.getElementById('mainImage');
    let scrollTop = window.scrollY;

    // Adjust these values to fit your needs
    let maxScale = 1; // Maximum scale
    let minScale = 0.94; // Minimum scale
    let startScroll = 100; // Pixels to scroll before starting the effect
    let maxScroll = 100; // Pixels to scroll before reaching maximum scale

    // Check if the user has scrolled beyond the starting position
    if (scrollTop > startScroll) {
        // Calculate scale based on scroll position
        let scale = 1 - Math.min((scrollTop - startScroll) / maxScroll, 1) * (1 - minScale);

        // Apply scale and border radius
        mainImage.style.transform = 'scale(' + scale + ')';
        mainImage.style.borderRadius = 500 * (1 - scale) + 'px';
    } else {
        // Reset scale and border radius if the user hasn't scrolled enough
        mainImage.style.transform = 'scale(1)';
        mainImage.style.borderRadius = '0';
    }
});
