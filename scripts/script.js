document.addEventListener("DOMContentLoaded", () => {

    let menuLinks = document.querySelectorAll('.header__menu_item'),
        modalWindow = document.querySelector('.modal_window'),
        modalContents = document.querySelectorAll('.modal__content'),
        closeModalBtn = document.querySelector('.modal__close_btn');

    menuLinks.forEach((item, index) => {
        item.addEventListener("click", () => {
            OpenModal(index);
        });
    });
    closeModalBtn.addEventListener("click", CloseModal);

    function OpenModal(index) {
        modalWindow.style.display = "block";
        modalContents[index].classList.add("active_content");
    }
    function CloseModal() {
        modalWindow.style.display = "none";
        modalContents.forEach(item=>{
            item.classList.remove("active_content");
        });
    }

    let donateWindow = document.querySelector('.donate_window'),
        openDonatBtn = document.querySelector('.header__support_btn'),
        closeDonate = document.querySelector('.close_donate_btn');

    openDonatBtn.addEventListener("click", OpenDonat);
    closeDonate.addEventListener("click", CloseDonat);

    function OpenDonat(){
        donateWindow.style.display = "flex";
    }
    function CloseDonat(){
        donateWindow.classList.add("vanishOut");
        setTimeout(()=>{
            donateWindow.style.display = "none";
            donateWindow.classList.remove("vanishOut");
        },1000);
    }

});
