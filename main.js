// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById('modal').className = 'hidden'
const hearts = document.getElementsByClassName('like-glyph')

for (let i =0; i<=hearts.length -1;i++) {
  hearts[i].addEventListener('click', () => {
    mimicServerCall().then(
      function () {
      if (hearts[i].textContent === EMPTY_HEART) {
        console.log(hearts[i].textContent === EMPTY_HEART)
        hearts[i].textContent = FULL_HEART
        hearts[i].classList.add('activated-heart') 
      }
      else {
        console.log(hearts[i].textContent === EMPTY_HEART)
        hearts[i].textContent = EMPTY_HEART
        hearts[i].classList.remove('activated-heart')
      }
    }
    ).catch(()=> {
      document.getElementById('modal').classList.remove('hidden')
      setTimeout(() => document.getElementById('modal').className = 'hidden',5000)
    })
  })
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
