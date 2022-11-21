const telegram = document.querySelector('.telegram')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const result = document.querySelector('.result')
const email = document.querySelector('.email')
const textarea = document.querySelector('textarea')
const button = document.querySelector('.button')
const formDarkColor = '#42414d'
const darkColor = '#2B2A33'
const liteColor = '#F5F5F5'

let isLiteMode = localStorage.getItem('darkLiteMode') === null ? 'on' : localStorage.getItem('darkLiteMode')
function darkLiteMode() {
  if (isLiteMode !== 'on') {
    document.body.style.background = darkColor
    h1.style.color = liteColor
    p.style.color = liteColor
    result.style.color = liteColor
    email.style.color = liteColor
    email.style.background = formDarkColor
    textarea.style.color = liteColor
    textarea.style.background = formDarkColor
    button.style.background = formDarkColor
    button.style.color = liteColor
  }
}
darkLiteMode()

let characterNumber
function characterLength() {
  characterNumber = 258 - textarea.value.length
  result.innerText = 'کاراکتر مجاز : ' + characterNumber
  if (characterNumber === 0) {
    textarea.style.color = 'red'
    result.innerText = 'کاراکتر مجاز به پایان رسید'
  } else {
    isLiteMode === 'on' ? textarea.style.color = darkColor : textarea.style.color = liteColor
  }
}

function sendMail() {
  result.innerText = 'در حال ارسال'
  textarea.value = textarea.value.replaceAll(`
`, '<br>')
  Email.send({
    SecureToken: "eed1466e-19c8-4d32-a804-511a649d2c88",
    To: 'hazaristangithubio@gmail.com',
    From: "hazaristangithubio@gmail.com",
    Subject: "A new tweet for website",
    Body: `Email : ${email.value} <br> ${textarea.value}`
  }).then(
    message => result.innerText = message === 'OK' ? 'پیامتون ارسال شد ، از همکاریتون ممنونم' : 'ارسال پیام با مشکل مواجه شد'
  );
  isLiteMode === 'on' ? textarea.style.color = darkColor : textarea.style.color = liteColor
}
