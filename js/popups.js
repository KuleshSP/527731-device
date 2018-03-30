var btnContact = document.querySelector(".contacts__button");
var popupWriteUs = document.querySelector(".modal-write-us");
var closeBtnWriteUs = document.querySelector(".modal-close--write-us");
var form = popupWriteUs.querySelector(".modal-write-us__form");
var nameForm = popupWriteUs.querySelector("[name=name-surname]");
var emailForm = popupWriteUs.querySelector("[name=email]");
var textareaForm = popupWriteUs.querySelector("[name=review]");
var btnMap = document.querySelector(".contacts__image");
var popupMap = document.querySelector(".modal-map");
var closeBtnMap = document.querySelector(".modal-close--map");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("nameForm");
} catch (err) {
  isStorageSupport = false;
}

btnContact.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");
  if (storage) {
    nameForm.value = storage;
    emailForm.focus();
  } else {
    nameForm.focus();
  }
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!nameForm.value || !emailForm.value || !textareaForm.value) {
    popupWriteUs.classList.remove("modal-error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("nameForm", nameForm.value);
    }
  }
});

closeBtnWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
  popupWriteUs.classList.remove("modal-error");
});


btnMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeBtnMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {

    if (popupWriteUs.classList.contains("modal-show")) {
      evt.preventDefault();
      popupWriteUs.classList.remove("modal-show");
      popupWriteUs.classList.remove("modal-error");
    }
  }
});
