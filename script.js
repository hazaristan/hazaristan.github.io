// dark mode and lite mode
const lite = document.querySelector('.lite')
const dark = document.querySelector('.dark')
const telegram = document.querySelector('.telegram')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const darkColor = '#2B2A33'
const liteColor = '#F5F5F5'
function darkLiteMode(booleanValue) {
  if (booleanValue === 'on') {
    lite.style.display = 'none'
    dark.style.display = 'flex'
    document.body.style.background = liteColor
    telegram.style.color = darkColor
    h1.style.color = darkColor
    p.style.color = darkColor
    localStorage.setItem('darkLiteMode', 'on')
  } else {
    dark.style.display = 'none'
    lite.style.display = 'flex'
    document.body.style.background = darkColor
    telegram.style.color = liteColor
    h1.style.color = liteColor
    p.style.color = liteColor
    localStorage.setItem('darkLiteMode', 'off')
  }
}
let isLiteMode = localStorage.getItem('darkLiteMode') === null ? 'on' : localStorage.getItem('darkLiteMode')
darkLiteMode(isLiteMode)

// change Language and set text align
let rtl = ['farsi', 'arabic']
function changeLanguage(lang) {
  numberText = 0
  localStorage.setItem('isLanguage', lang)
  document.querySelector('.lite>.language').innerHTML = isLanguage.slice(0, 2)
  document.querySelector('.dark>.language').innerHTML = isLanguage.slice(0, 2)
  if (rtl.indexOf(lang)) {
    p.style.textAlign = 'left'
    p.style.direction = 'ltr'
  } else {
    p.style.textAlign = 'right'
    p.style.direction = 'rtl'
  }
  isLanguage = lang
  addTweet()
}

// switch between farsi and english
function langSwitch() {
  isLanguage === 'farsi' ? changeLanguage('english') : changeLanguage('farsi')
}

// sharing text in twitter
function shareTweet() {
  window.open(`https://twitter.com/intent/tweet?text=${finallyText}%0a&hashtags=StopHazaraGenocide`)
}

// get new text for hashtag
let Text4hashtag = ''
let finallyText = ''
let numberText = localStorage.getItem('numberText') === null ? 0 : Number(localStorage.getItem('numberText'))
function addTweet() {
  numberText = localStorage.getItem('numberText')
  if (isLanguage === 'farsi') {

    Text4hashtag = farsi[numberText]
    if (++numberText === farsi.length) {
      numberText = 0
    }
    localStorage.setItem('numberText', numberText)

  } else if (isLanguage === 'english') {

    Text4hashtag = english[numberText]
    if (++numberText === english.length) {
      numberText = 0
    }
    localStorage.setItem('numberText', numberText)
  }
  finallyText = Text4hashtag.replaceAll(`
`, '%0a')
  Text4hashtag = Text4hashtag.replaceAll(`
`, '<br>')
  p.innerHTML = Text4hashtag
  telegram.innerHTML = numberText + ' - Telegram'
}
let isLanguage = localStorage.getItem('isLanguage') === null ? 'farsi' : localStorage.getItem('isLanguage')
changeLanguage(isLanguage)

function goToTeCooperate() {
  //   window.open('cooperate')
  window.open('https://t.me/text4hashtag')
}
