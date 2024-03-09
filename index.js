window.addEventListener('scroll', function() {
    let mainImage = document.getElementById('mainImage');
    let factBoxes = document.querySelectorAll('.factBox');
    let scrollTop = window.scrollY;

    // Main image scaling effect
    let maxScale = 1; // Maximum scale
    let minScale = 0.94; // Minimum scale
    let startScroll = 0; // Pixels to scroll before starting the effect
    let maxScroll = 100; // Pixels to scroll before reaching maximum scale

    if (scrollTop > startScroll) {
        let scale = 1 - Math.min((scrollTop - startScroll) / maxScroll, 1) * (1 - minScale);
        mainImage.style.transform = 'scale(' + scale + ')';
        mainImage.style.borderRadius = 500 * (1 - scale) + 'px';
    } else {
        mainImage.style.transform = 'scale(1)';
        mainImage.style.borderRadius = '0';
    }

    // Fade and slide-in effect for factBox elements
    let delay = 0;
    let previousRight = 0;
    factBoxes.forEach(function(factBox, index) {
        if (isElementInViewport(factBox) && factBox.getBoundingClientRect().left >= previousRight) {
            setTimeout(function() {
                factBox.classList.add('visible');
            }, delay);
            delay += 100; // Adjust the delay here (100ms for each box)
            previousRight = factBox.getBoundingClientRect().right;
        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const halfHeight = rect.height / 3.5; // Half the height of the element
    return (
        rect.top >= -halfHeight &&
        rect.bottom <= windowHeight + halfHeight
    );
}
