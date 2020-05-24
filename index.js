// Let's find the form in the DOM
const formElement = document.querySelector(".popout__form");
const nameInput = formElement.querySelector(".popout__form-input_type_name");
const nameOutput = document.querySelector(".profile__name");
const jobInput = formElement.querySelector(".popout__form-input_type_job");
const jobOutput = document.querySelector(".profile__profession");
const editBtn = document.querySelector(".profile__edit-button");
const closeBtn = document.querySelector(".popout__close-button");
const popout = document.querySelector(".popout__container");

function toggle() {   
    popout.classList.toggle("popout__container_active");
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    nameOutput.textContent = nameInput.value;
    
    jobOutput.textContent = jobInput.value;
    
    toggle()
}



formElement.addEventListener('submit', formSubmitHandler);
editBtn.addEventListener("click", toggle);
closeBtn.addEventListener("click", toggle);