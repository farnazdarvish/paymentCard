const numInp = document.querySelectorAll('.num>input')
let inputNum = document.getElementById('inputNum')
const holder = document.querySelector('.holderInp>input')
const holderName = document.getElementById('holder')
const cvv2Inp = document.querySelector('.cvv2>input')
const cvv = document.getElementById('cvv')
const card = document.querySelector('.card')
const timer = document.querySelector('.timer')
const inp = document.querySelector('.inp')





let myCardNumber = ["", "", "", ""]
numInp.forEach((val, i) => {

    val.addEventListener('keyup', (e) => {
        myCardNumber[i] = val.value

        inputNum.innerText = myCardNumber?.[0] + " " + myCardNumber?.[1] + " " + myCardNumber?.[2] + " " + myCardNumber?.[3]
        if (val.value.length == 4) {
            if (i != 3) {
                val.nextElementSibling.focus()

            } else {
                holder.focus()
            }
        }
        if (e.keyCode = 8 && i != 0) {
            if (val.value.length == 0)
                val.previousElementSibling.focus()

        }
    })
})




numInp.forEach((val) => {
    val.addEventListener('blur', () => {
        if (val.value.length > 4) {
            val.value = val.value.slice(0, 4)
        }
    })
})



holder.addEventListener('input', () => {
    console.log(holder.value + 'salam');

    holderName.innerText = holder.value
});
cvv2Inp.addEventListener('focus', () => {
    animationPlay()
})
cvv2Inp.addEventListener('input', () => {
    cvv.innerText = cvv2Inp.value

})
cvv2Inp.addEventListener('blur', () => {
    animationPause()
})
function animationPlay() {
    card.style.animation = 'cardAnime 1s linear forwards'
    card.style.animationPlayState = 'running'
}
function animationPause() {
    card.style.animation = "cardBack 1s linear forwards"
    card.style.animationPlayState = 'runnig'

}
const expireYear = document.getElementById('ExpireYear')



expireYear.addEventListener('change', () => {
    const selectYear = expireYear.value
    document.getElementById('year').innerText = selectYear
    document.getElementById('slash').style.display = 'block'

})
const expireMonth = document.getElementById('ExpireMonth')
expireMonth.addEventListener('change', () => {
    const selectMonth = expireMonth.value
    document.getElementById('month').innerText = selectMonth


})



let minutes = 10;
let seconds = 0;
let timerInterval;
const timeLimit = 10 * 60;
let timeElapsed = 0;
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const errorMessage = document.getElementById('error-message');


function updateDisplay() {
    minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
}





function startTimer() {
    timerInterval = setInterval(() => {
      if (timeElapsed === timeLimit) {
        errorMessage.style.display='block'
      } else {
        if (seconds === 0) {
          seconds = 59;
          minutes--;
        } else {
          seconds--;
        }
        timeElapsed++;
        updateDisplay();
      }
    }, 1000);
  }
  window.onload = startTimer;



const numError=document.querySelector('.numError')
const cvvError=document.querySelector('.cvvError')
const dateError=document.querySelector('.dateError')
  const submitBtn=document.querySelector('.btn')
  submitBtn.addEventListener('click',()=>{
    if(!(myCardNumber[0].length==4&&myCardNumber[1].length==4&&myCardNumber[2].length==4&&myCardNumber[3].length==4)){
       numError.style.display='block'  
    }else{
       numError.style.display='none'  

    }
    if(cvv2Inp.value.length<3){
        cvvError.style.display='block'
    }
    else{
        cvvError.style.display='none'

    }
    if(expireMonth.value == "month" || expireYear.value == "year"){
        dateError.style.display='block'

    }else{
        dateError.style.display='none'
 
    }
    
    

  })