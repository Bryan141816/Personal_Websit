document.addEventListener("DOMContentLoaded", function() {
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
    }, 500); // Adjust the delay time (in milliseconds) as needed
});
