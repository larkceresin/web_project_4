//profile modal
const profilePopout = document.querySelector(".popout_profile-edit__container");

const profileFormElement = document.querySelector(".popout_profile-edit__form");
const nameInput = profileFormElement.querySelector(".popout__form-input_type_name");
const jobInput = profileFormElement.querySelector(".popout__form-input_type_job");
const profileCloseBtn = document.querySelector(".popout_profile-edit__close-button");

//profile
const nameOutput = document.querySelector(".profile__name");
const jobOutput = document.querySelector(".profile__profession");
const editBtn = document.querySelector(".profile__edit-button");
console.log(editBtn);
const addButton = document.querySelector(".profile__add-button");

//gallery modal
const galleryPopout = document.querySelector(".popout_gallery-add__container");

const galleryFormElement = document.querySelector(".popout_gallery-add__form");
const galleryCloseBtn = document.querySelector(".popout_gallery-add__close-button");
const titleInput = galleryFormElement.querySelector(".popout__form-input_type_title");
const imageInput = galleryFormElement.querySelector(".popout__form-input_type_image");


//gallery
const galleryTemplate = document.querySelector("#gallery-object").content;
const galleryContainer = document.querySelector(".gallery__grid");

//picture modal
const picturePopout = document.querySelector(".popout_picture-view__container");
const pictureCloseBtn = document.querySelector(".popout_picture-view__close-button");

function toggleModal(popout) { 
//    console.log(popout);
    popout.classList.toggle("popout__container_active");
}

function profileFormSubmitHandler (evt) {
    evt.preventDefault();

    nameOutput.textContent = nameInput.value;
    
    jobOutput.textContent = jobInput.value;
    
    toggleModal(profilePopout);
}

function galleryAddItems(image, title){
    const galleryElement = galleryTemplate.cloneNode(true);
    const galleryImage = galleryElement.querySelector(".gallery__image");
    const galleryText = galleryElement.querySelector(".gallery__text");
    galleryImage.src = image;
    galleryText.textContent = title;
    
    galleryContainer.prepend(galleryElement);

};

function galleryFormSubmitHandler (evt) {
    evt.preventDefault();
    galleryAddItems(imageInput.value, titleInput.value);
   galleryFormElement.reset();
    toggleModal(galleryPopout);
}

function pictureHandler(evt){
    picturePopout.querySelector(".popout__image").src = evt.target.closest(".gallery__picture").src;
    picturePopout.querySelector(".popout__title").textContent =  evt.target.closest("gallery__text").textContent;
    
    toggleModal(picturePopout);
}

const initialCards = [
    {
        name: "The End Place",
        link: "images/cliffside__Katie-Rodriguez.jpg"
    },
    {
        name: "Turn That Leaf Over",
        link: "images/leaf__chuttersnap.jpg"
    },
    {
        name: "Great Peaks, The Snowy Mountains",
        link: "images/snowy-peaks__Joshua-Redekopp.jpg"
    },
    {
        name: "Barrier Islands",
        link: "images/storm-incoming__Reuben-Teo.jpg"
    },
    {
        name: "Never Forever",
        link: "images/wash-hands__Joshua-Reddekopp.jpg"
    },
    {
        name: "Water Crossing",
        link: "images/waterfalling__Oliver-Ash.jpg"
    }
];
const reversed = initialCards.reverse();
reversed.forEach(thingy => galleryAddItems(thingy.link, thingy.name));


function dummyFunction(someVar){
    console.log("Dummy function")
}

profileFormElement.addEventListener('submit', profileFormSubmitHandler);
editBtn.addEventListener("click", profilePopout => toggleModal(profilePopout));
//console.log("Listener added to editBtn");
//console.log(editBtn);
profileCloseBtn.addEventListener("click", function() {toggleModal(profilePopout)});
addButton.addEventListener("click", toggleModal(galleryPopout));
galleryCloseBtn.addEventListener("click", toggleModal(galleryPopout));
galleryFormElement.addEventListener('submit', galleryFormSubmitHandler);
//delete button:
galleryContainer.addEventListener("click", evt => {
    evt.target.closest(".gallery__trash-button").parentElement.remove();
});
//like-button
galleryContainer.addEventListener("click", evt => {
    evt.target.closest(".gallery__like-button").classList.toggle("gallery__like-button_active");
});
galleryContainer.addEventListener('click', pictureHandler);
//window.addEventListener('click', dummyFunction(n));
//console.log(window);