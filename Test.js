const divFixed = document.getElementById(`div-1`)
const header = document.querySelector(`header`);

window.addEventListener(`scroll`, () => {
    if (window.scrollY > header.offsetHeight) 
    {
        divFixed.classList.add(`show`);
    }
    else
    {
        divFixed.classList.remove(`show`);
    }
})