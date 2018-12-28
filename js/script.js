var contacts = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

contacts.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");
  name.focus();
});
close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
});