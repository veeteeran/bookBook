const loadingPhrases = [
  '"The only thing worse than being talked about is not being talked about." - Oscar Wilde', '"You are your best thing." - Toni Morrison', '"Even if you\'re on the right track, you\'ll get run over if you just sit there." - Will Rogers', '"At the still point, there the dance is." - T.S. Eliot', '"If you can\'t annoy somebody, there is little point in writing." - Kingsley Amis', '"It doesn\'t matter who you are or what you look like, so long as somebody loves you." - Roald Dahl', '"And now that you don\'t have to be perfect, you can be good." - John Steinbeck']

const bookAddedPhrases = [
  "Recommending this to my enemy, thanks.", "Wanted it to be better too...", "Oh, that's a good one!", "That's definitely a must-read!", "I love that book!"
]

const rejectionPhrases = [
  "Hmm, bookEater must have gotten that one.", "I don't know that title — what else can you recommend?",
  "That book may have been shelved incorrectly.", "I loaned that book to Bigby and never got it back.",
  "Your literary tastes are distinguished! I'll see if we can get it on loan."
]

const carouselLoadingPhrases = [
  "Talk wordy to me!", "Stay true to your shelf.", "Do you comma here often?", "bookBook makes shhhh happen.", "ISBN thinking about you.", "What a breath of fresh Eyre!", "Check your shelf before you wreck your shelf."
]

// const images = [
//   ""
// ]

// the below is heavily based on https://andrew.hedges.name/experiments/diceware/

// from: https://www.rempe.us/diceware/
function secureRandom(count) {
  var cryptoObj = window.crypto || window.msCrypto
  var rand = new Uint32Array(1)
  var skip = 0x7fffffff - 0x7fffffff % count
  var result

  if (((count - 1) & count) === 0) {
    cryptoObj.getRandomValues(rand)
    return rand[0] & (count - 1)
  }

  do {
    cryptoObj.getRandomValues(rand)
    result = rand[0] & 0x7fffffff
  } while (result >= skip)

  return result % count
}

// based on: http://stackoverflow.com/a/1527820/11577
function getRandomInt(min, max) {
  if (window.crypto || window.msCrypto) {
    return secureRandom(max) + min
  }
  else {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}

export function getLoadingPhrase() {
  return loadingPhrases[getRandomInt(0, loadingPhrases.length)].split('-')
}

export function getBookAddedPhrase(index) {
  return bookAddedPhrases[index]
}

export function getBookRejectedPhrase() {
  return rejectionPhrases[getRandomInt(0, rejectionPhrases.length)]
}

export function getCarouselLoadingPhrase() {
  return carouselLoadingPhrases[getRandomInt(0, carouselLoadingPhrases.length)]
}