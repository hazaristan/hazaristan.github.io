// dark mode and lite mode
const darkLite = document.querySelector('.darkLite')
const language = document.querySelector('.language')
const tweet = document.querySelector('.tweet')
const refresh = document.querySelector('.refresh')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const darkColor = '#2B2A33'
const liteColor = '#F5F5F5'
let isLiteMode = 'on'
function darkLiteMode() {
  if (isLiteMode === 'on') {
    darkLite.style.backgroundImage = "url('img/darklite-lite.webp')"
    language.style.backgroundImage = "url('img/language-lite.webp')"
    tweet.style.backgroundImage = "url('img/tweet-lite.webp')"
    refresh.style.backgroundImage = "url('img/refresh-lite.webp')"
    document.body.style.background = liteColor
    h1.style.color = darkColor
    p.style.color = darkColor
    isLiteMode = 'off'
  } else {
    darkLite.style.backgroundImage = "url('img/darklite-dark.webp')"
    language.style.backgroundImage = "url('img/language-dark.webp')"
    tweet.style.backgroundImage = "url('img/tweet-dark.webp')"
    refresh.style.backgroundImage = "url('img/refresh-dark.webp')"
    document.body.style.background = darkColor
    h1.style.color = liteColor
    p.style.color = liteColor
    isLiteMode = 'on'
  }
}
darkLiteMode()

// change Language and set text align
let isLanguage = 'farsi'
let rtl = ['farsi', 'arabic']
function changeLanguage(lang) {
  language.innerHTML = isLanguage.slice(0, 2)
  rtl.indexOf(lang) ? p.style.textAlign = 'left' : p.style.textAlign = 'right'
  isLanguage = lang
  addTweet()
}

// switch between farsi and english
function langSwitch(text) {
  isLanguage === 'farsi' ? changeLanguage('english') : changeLanguage('farsi')
}

// sharing text in twitter
function shareTweet() {
  window.open(`https://twitter.com/intent/tweet?text=${finallyText}%0a&hashtags=StopHazaraGenocide `)
}

// get new text for hashtag
let Text4hashtag = ''
let finallyText = ''
function addTweet() {
  if (isLanguage === 'farsi') {
    Text4hashtag = farsi[Math.floor(Math.random() * farsi.length)]
  } else if (isLanguage === 'english') {
    Text4hashtag = english[Math.floor(Math.random() * english.length)]
  }
  finallyText = Text4hashtag.replaceAll('$','%0a')
  Text4hashtag = Text4hashtag.replaceAll('$','<br>')
  p.innerHTML = Text4hashtag
}
addTweet()

function goToTelegram() {
  window.open('https://t.me/text4hashtag')
}
