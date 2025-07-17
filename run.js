alert("Open to internship opportunities");
const typeWriterEffect = (elementId, text, speed) => {
    let i = 0;
    const type = () => {
        if (i < text.length) {
            document.querySelector(`.${elementId}`).innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    type();
};


window.onload = () => {
    typeWriterEffect("Welcomes", "From idea to interface — one pixel at a", 20);

    const scrollBtn = document.getElementById("scrollToTop");
    if (scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
};


