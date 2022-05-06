window.$ = (el) => document.querySelector(el);


let timeNow = new Date().toLocaleTimeString()

let token = `AAG-7Wkjy2roU1YjHY-lThM8_lcSssDC05M` //получаем при создании бота

let chatId = `5354791972` //получаем при вызове https://api.telegram.org/bot5300261006:AAG-7Wkjy2roU1YjHY-lThM8_lcSssDC05M/getupdates в браузере

let botId = `5300261006`


let lastMesText,lastMesTime,nowMesTime,chatUpdater

let tpl = `
<div class="chat__wrap">
<div class="chat__title">Онлайн чат
<div class="btm__close chat__close">&times;</div>
</div>
<div class="chat__body">
<div class="chat__body__item chat__body__item__manager">
<span class="chat__body__item__user">Ведучий</span>
<span class="chat__body__item__text">Привіт! Напиши назву треку, який хочеш почути</span>
<i class="chat__body__item__time">${timeNow}</i>
</div>
</div>
<div class="chat__input">
    <div class="chat__input__message">
        <textarea maxlength="250" type="text" class="chat__main__input" aria-label="Напиши повідомлення" placeholder="Напиши повідомлення" required></textarea>
    </div>
    <button class="chat__input__submit" aria-label="Отправить сообщение" style="background-image:url('../img/angle-up.svg')"></button>
</div>

</div>`;

class TelegaChat {
init(){


    $('body').insertAdjacentHTML( 'afterbegin', tpl)

    let store = localStorage.getItem("historyMessages");

    if (store !== null) {
      $('.chat__body').innerHTML = store;
    }

    $('.chat__main__input').addEventListener('keypress', (e)=>{

      if(e.key === `Enter`) this.submit();

    })

    $(".chat__input__submit").onclick = () => this.submit();



  }



  open() {

        $(".chat__close")[0].addEventListener("click", (e) =>this.close());

        $(".chat__body")[0].scrollTop = 100000;

        $('.chat__wrap')[0].classList.add('open')

        axios.get(`https://api.telegram.org/bot${botId}:${token}/getupdates`)

        .then(r=>{

          lastMesTime = r.data.result[r.data.result.length - 1].message.date

        })

        if(typeof ym === 'function') ym(49104928,'reachGoal','chat-open')

        chatUpdater =  setInterval(() => this.checkResponse(),1000)

  }

  close() {
    $('.chat__wrap')[0].classList.remove('open')
  }

  submit() {

    //отправка сообшения клиентом

    let val = $(".chat__main__input")[0].value;

    if(val !== ``) {


    let tplItemClient = `<div class="chat__body__item chat__body__item__client">
    <span class="chat__body__item__user">Ви</span>
    <div class="chat__body__item__text">${val}</div>
    <i class="chat__body__item__time">${timeNow}</i></div>`;

    $('.chat__body')[0].innerHTML += tplItemClient;

    $(".chat__main__input").value = ``.trim()

    $(".chat__body").scrollTop = 100000;

    axios.get(`https://api.telegram.org/bot${botId}:${token}/sendMessage?chat_id=${chatId}&text=${val}`)

  }
  else {
    alert(`Введите текст`)
  }
}

  checkResponse() {

      axios.get(`https://api.telegram.org/bot${botId}:${token}/getupdates`)
        .then((r) => {

          nowMesTime = r.data.result[r.data.result.length - 1].message.date

          if(nowMesTime !== lastMesTime) {

          //клиент получает сообщение

          lastMesTime = nowMesTime

          let Text = r.data.result.pop().message.text;

            let tplItemMenager = `<div class="chat__body__item chat__body__item__manager">
            <span class="chat__body__item__user">Ведучий</span>
            <span class="chat__body__item__text">${Text}</span>
            <i class="chat__body__item__time">${timeNow}</i></div>`;

            $(".chat__body")[0].innerHTML += tplItemMenager;

           if(localStorage) localStorage.setItem("historyMessages", $(".chat__body")[0].innerHTML);

            $('.chat__wrap')[0].classList.contains('open')? ``: alert(`Сообщение: ${Text}`)

            $(".chat__body")[0].scrollTop = 100000;

        }
        });


  }
}


new TelegaChat().init()
