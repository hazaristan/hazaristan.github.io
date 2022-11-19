const telegram = document.querySelector('.telegram')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const span = document.querySelector('span')
const pForm = document.querySelector('#my-form-status')
const email = document.querySelector('.email')
const textarea = document.querySelector('textarea')
const button = document.querySelector('button')
const formDarkColor = '#42414d'
const darkColor = '#2B2A33'
const liteColor = '#F5F5F5'

let isLiteMode = localStorage.getItem('darkLiteMode') === null ? 'on' : localStorage.getItem('darkLiteMode')
function darkLiteMode() {
  if (isLiteMode !== 'on') {
    document.body.style.background = darkColor
    h1.style.color = liteColor
    p.style.color = liteColor
    span.style.color = liteColor
    pForm.style.color = liteColor
    email.style.color = liteColor
    email.style.background = formDarkColor
    textarea.style.color = liteColor
    textarea.style.background = formDarkColor
    button.style.background = formDarkColor
    button.style.color = liteColor
    localStorage.setItem('darkLiteMode','off')
  }
}
darkLiteMode()

var characterNumber
function characterLength() {
  characterNumber = 258 - textarea.value.length
  span.innerText = 'کاراکتر مجاز : ' + characterNumber
  if (characterNumber === 0){
    textarea.style.color = 'red'
    span.innerText = 'کاراکتر مجاز به پایان رسید'
  }else{
    isLiteMode === 'on' ? textarea.style.color = darkColor : textarea.style.color = liteColor
  }
}

// formspree code for form 
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "پیامتون ارسال شد ، از همکاریتون ممنونم";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "ارسال پیام با مشکل مواجه شد"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "ارسال پیام با مشکل مواجه شد"
  });
}
form.addEventListener("submit", handleSubmit)
