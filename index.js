// Let's find the form in the DOM
const profileFormElement = document.querySelector(".popout_profile-edit__form");
const galleryFormElement = document.querySelector(".popout_gallery-add__form");
const nameInput = profileFormElement.querySelector(".popout__form-input_type_name");
const nameOutput = document.querySelector(".profile__name");
const jobInput = profileFormElement.querySelector(".popout__form-input_type_job");
const jobOutput = document.querySelector(".profile__profession");
const editBtn = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const profileCloseBtn = document.querySelector(".popout_profile-edit__close-button");
const galleryCloseBtn = document.querySelector(".popout_gallery-add__close-button");
const profilePopout = document.querySelector(".popout_profile-edit__container");
const galleryPopout = document.querySelector(".popout_gallery-add__container");

function profileToggle() {   
    profilePopout.classList.toggle("popout__container_active");
}
function galleryToggle(){
    galleryPopout.classList.toggle("popout__container_active");
}

function profileFormSubmitHandler (evt) {
    evt.preventDefault();

    nameOutput.textContent = nameInput.value;
    
    jobOutput.textContent = jobInput.value;
    
    profileToggle()
}
function galleryFormSubmitHandler (evt) {
    evt.preventDefault();
    
    // input html for a gallery container to be appended at the end
}
function galleryDelete (){
    //delete button removes html for specific element
}


profileFormElement.addEventListener('submit', profileFormSubmitHandler);
editBtn.addEventListener("click", profileToggle);
profileCloseBtn.addEventListener("click", profileToggle);
addButton.addEventListener("click", galleryToggle);
galleryCloseBtn.addEventListener("click", galleryToggle);