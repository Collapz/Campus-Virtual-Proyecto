// Settings Upload Images
const defaultBtn = document.querySelector("#default-btn")
const customBtn = document.querySelector("#custom-btn")
const img = document.querySelector("#img-profile")

function defaultBtnActive() {
    defaultBtn.click();
}

defaultBtn.addEventListener("change", function() {
    const file = this.files[0];
    console.log(file);
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const result = reader.result;
            img.src = result;
        }
        reader.readAsDataURL(file);
    }
})
