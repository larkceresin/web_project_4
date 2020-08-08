function toggleModal(popout) { 

    popout.classList.toggle("popout__container_active");
}
function setButtonText(popout, text){
    popout.querySelector(".popout__button").textContent = text;
}
export {toggleModal, setButtonText}