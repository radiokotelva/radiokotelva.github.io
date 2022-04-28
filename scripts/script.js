document.addEventListener("DOMContentLoaded", () => {

    console.log(document.documentElement.clientWidth);
    console.log(document.documentElement.clientHeight);
    let btnOpenOrderTrack = document.querySelector('.distributor__btn_header'),
        orderTrackModal = document.querySelector('.order__track'),
        orderTrackModalCloseBtn = document.querySelector('.close__order_track_btn'),
        orderWidget = document.querySelector('#RTWidgetTrackRequests');

    btnOpenOrderTrack.addEventListener("click", ()=>{
        orderTrackModal.style.display = "flex";
        orderWidget.style.animation = "orderWidgetShow 0.6s forwards";
    });

    orderTrackModalCloseBtn.addEventListener("click", ()=>{
        orderWidget.style.animation = "orderWidgetHide 0.6s forwards";
        orderTrackModal.style.opacity = "0";
        setTimeout(()=>{
            orderTrackModal.style.display = "none";
            orderTrackModal.style.opacity = "1";
        },600);
    });

    let mainSliderObj = document.querySelector('.cards_categories');
    let mainSlider = new Swiper(".cards_categories", {
        slidesPerView: 3,
        simulateTouch: true,
        touchRatio: false,
        slideToClickedSlide: false,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 8000
        }
    });
    // ЧАТ
    document.querySelector('.chat_trigger').addEventListener('click',e=>{
        new TelegaChat().open();
    });
    document.querySelector('.distributor__btn_chat').addEventListener('click',e=>{
        new TelegaChat().open();
    });

    mainSliderObj.addEventListener("mouseenter", ()=>{
        mainSlider.autoplay.stop();
    });
    mainSliderObj.addEventListener("mouseleave", ()=>{
        mainSlider.autoplay.start();
    });

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
        modalWindow.classList.add("vanishOut");
        setTimeout(()=>{
            modalWindow.style.display = "none";
            modalWindow.classList.remove("vanishOut");
        },1000);
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
