document.addEventListener("DOMContentLoaded",function(){
    setTimeout(() => {
        const imageBoxes = document.querySelectorAll(".moto");
        imageBoxes.forEach(imageBox => {
            imageBox.classList.add("visible");
        });

        const mainText = document.getElementById("mainText");
        mainText.classList.add("textVisible");
    }, 500); 
});