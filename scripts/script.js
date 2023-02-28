// Построение плеера
if (document.documentElement.clientWidth > 576) {
    let mainPlayerMobile = document.querySelector('.main_player_mobile');
    mainPlayerMobile.innerHTML =
        `

    `;
}
document.addEventListener("DOMContentLoaded", () => {
    const $chatTextArea = document.querySelector('body > div.chat__wrap > div.chat__input > div > textarea');
    const $chatWrap = document.querySelector('body > div.chat__wrap');

    $chatTextArea?.addEventListener("focus", ()=> {
        if (window.innerWidth < 576) {
            $chatWrap.style.height = "88vh";
        }
    });

    $chatTextArea?.addEventListener("blur", ()=> {
        if (window.innerWidth < 576) {
            $chatWrap.style.height = "100vh";
        }
    });

    // Телефоны
    let flagVinyl = false;
    document.querySelector('.rtplbutton_play_stop').addEventListener("click", () => {
        if (document.documentElement.clientWidth <= 576) {
            if (flagVinyl) {
                document.querySelector('.player_mobile__play_wrap img').style.animationPlayState = "paused";
                flagVinyl = false;
            } else {
                document.querySelector('.player_mobile__play_wrap img').style.animationPlayState = "running";
                flagVinyl = true;
            }
        }
    });
    // =========================
    document.querySelector('.hamburger').addEventListener("click", () => {
        document.querySelector('.mobile_menu').style.transform = "translateY(0%)";
    });
    document.querySelector('.mobile_menu__close_btn').addEventListener("click", () => {
        document.querySelector('.mobile_menu').style.transform = "translateY(-100%)";
    });
    // =========================
    // Програма
    let mobBtnProgram = document.querySelector('.mobile_menu__item_btn_program'),
        mobBtnCloseProgram = document.querySelector('.program__close_btn'),
        mobileProgram = document.querySelector('.program');


    mobBtnProgram.addEventListener("click", () => {
        mobileProgram.style.transform = "translateX(0%)";
    });
    mobBtnCloseProgram.addEventListener("click", () => {
        mobileProgram.style.transform = "translateX(-100%)";
    });
    // Контакты
    let mobileContactsBtn = document.querySelector('.mobile_menu__item_contacts'),
        mobileContactsCloseBtn = document.querySelector('.mobile__contacts__close_btn');
    mobileContactsWindow = document.querySelector('.mobile__contacts');

    mobileContactsBtn.addEventListener("click", () => {
        mobileContactsWindow.style.transform = "translateX(0%)";
    });
    mobileContactsCloseBtn.addEventListener("click", () => {
        mobileContactsWindow.style.transform = "translateX(-100%)";
    });
    // =========================
    // О нас
    let mobileInformBtn = document.querySelector('.mobile_menu__item_info'),
        mobileContactsModal = document.querySelector('.modal_window');

    mobileInformBtn.addEventListener("click", () => {
        mobileContactsModal.style.display = "block";
    });
    // ==============================================================================

    let btnOpenOrderTrack = document.querySelector('.distributor__btn_header'),
        orderTrackModal = document.querySelector('.order__track'),
        orderTrackModalCloseBtn = document.querySelector('.close__order_track_btn'),
        orderWidget = document.querySelector('#RTWidgetTrackRequests'),
        mobOrderTrackBtnOpen = document.querySelector('.mobile_menu__item_btn_order'),
        mobOrderTrackWindow = document.querySelector('.order__track'),
        hintOrderTrack = document.querySelector('.hint_order_track'),
        hintOrderTrackMobile = document.querySelector('.hint_order_track__mobile'),
        closeHintOrderTrack = document.querySelector('.hint_order_track__mobile_btn');

    closeHintOrderTrack.addEventListener("click" , ()=> {
        hintOrderTrackMobile.style.display = "none";
    });

    btnOpenOrderTrack.addEventListener("mouseenter" , ()=> {
        if(document.documentElement.clientWidth > 576) {
            hintOrderTrack.style.transform = "translateX(0%)";
        }
    });

    btnOpenOrderTrack.addEventListener("mouseleave" , ()=> {
        hintOrderTrack.style.transform = "translateX(-100%)";
    });

    mobOrderTrackBtnOpen.addEventListener("click", () => {
        hintOrderTrackMobile.style.display = "flex";
        orderWidget.style.animation = "orderWidgetShow 0.6s forwards";
        mobOrderTrackWindow.style.display = "block";
    });

    btnOpenOrderTrack.addEventListener("click", () => {
        orderTrackModal.style.display = "flex";
        orderWidget.style.animation = "orderWidgetShow 0.6s forwards";
    });

    orderTrackModalCloseBtn.addEventListener("click", () => {
        orderWidget.style.animation = "orderWidgetHide 0.6s forwards";
        orderTrackModal.style.opacity = "0";
        setTimeout(() => {
            orderTrackModal.style.display = "none";
            orderTrackModal.style.opacity = "1";
        }, 600);
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
    let openChatBtn = document.querySelector('.chat_trigger');

    openChatBtn.addEventListener("mouseenter" , ()=> {
        if(document.documentElement.clientWidth > 576) {
            hintOrderTrack.style.transform = "translateX(0%)";
        }
    });
    openChatBtn.addEventListener("mouseleave" , ()=> {
        hintOrderTrack.style.transform = "translateX(-100%)";
    });
    openChatBtn.addEventListener('click', e => {
        new TelegaChat().open();
    });
    document.querySelector('.distributor__btn_chat').addEventListener('click', e => {
        new TelegaChat().open();
    });
    document.querySelector('.mobile_menu__item_btn_chat').addEventListener('click', e => {
        hintOrderTrackMobile.style.display = "flex";
        new TelegaChat().open();
    });

    mainSliderObj.addEventListener("mouseenter", () => {
        mainSlider.autoplay.stop();
    });
    mainSliderObj.addEventListener("mouseleave", () => {
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
        setTimeout(() => {
            modalWindow.style.display = "none";
            modalWindow.classList.remove("vanishOut");
        }, 1000);
        modalContents.forEach(item => {
            item.classList.remove("active_content");
        });
    }

    let donateWindow = document.querySelector('.donate_window'),
        openDonatBtn = document.querySelector('.header__support_btn'),
        closeDonate = document.querySelector('.close_donate_btn');

    openDonatBtn.addEventListener("click", OpenDonat);
    closeDonate.addEventListener("click", CloseDonat);

    function OpenDonat() {
        donateWindow.style.display = "flex";
    }

    function CloseDonat() {
        donateWindow.classList.add("vanishOut");
        setTimeout(() => {
            donateWindow.style.display = "none";
            donateWindow.classList.remove("vanishOut");
        }, 1000);
    }

});