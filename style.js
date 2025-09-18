const div2 = document.getElementById(`div-2`);
const header = document.querySelector(`header`);

window.addEventListener (`scroll`, () => {
    if (window.scrollY > header.offsetHeight) {
        div2.classList.add(`show`)
    }
    else
    {
        div2.classList.remove(`show`)
    }
})