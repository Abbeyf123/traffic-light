let goCounterOne = document.querySelector(".go-counter-one").textContent;
let stopCounterOne = document.querySelector(".stop-counter-one").textContent;
let goCounterTwo = document.querySelector(".go-counter-two").textContent;
let stopCounterTwo = document.querySelector(".stop-counter-two").textContent;
let goCounterThree = document.querySelector(".go-counter-three").textContent;
let stopCounterThree = document.querySelector(".stop-counter-three").textContent;

const redOne = document.querySelector(".red-one");
const orangeOne = document.querySelector(".orange-one");
const greenOne = document.querySelector(".green-one");

const redTwo = document.querySelector(".red-two");
const orangeTwo = document.querySelector(".orange-two");
const greenTwo = document.querySelector(".green-two");

const redThree = document.querySelector(".red-three");
const orangeThree = document.querySelector(".orange-three");
const greenThree = document.querySelector(".green-three");

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");




function startCount(){
  goCounterOne = 0
  goCounterTwo = 0
  goCounterThree = 0
  stopCounterOne = 0
  stopCounterTwo = 0
  stopCounterThree = 0
  let intervalIdOne = 0 
  let intervalIdTwo = 0
  let intervalIdThree = 0
  let intervalIdFour = 0

  function startIntervalIdOne(){
    return new Promise((resolve) => {
     const result = setInterval(() => {
        goCounterOne++
        goCounterThree++
      }, 1000); 
      resolve(result)
      
    })
  }
  
  function startIntervalIdTwo(){
    return new Promise((resolve) => {
      let result = 0
      let resultId = setInterval(() => {
        goCounterTwo++
      },1000)
      if(result == 50){
        clearInterval(resultId)
      }
      resolve(result)
    })
  }

  function stopIntervalIdOne(){
    return new Promise((resolve) => {
      const result = setInterval(() => {
        stopCounterOne--
        stopCounterThree--
      },1000)
      resolve(result)
    })
  }
  
  function stopIntervalIdTwo(){
    return new Promise((resolve) => {
      const result = setInterval(() => {
       stopCounterTwo--
      },1000)
      resolve(result)
    })
  }
  startIntervalIdOne().then((res)=>{
    res = goCounterOne
    res = goCounterThree
    stopIntervalIdOne()
  }).then((res)=>{
    res = stopCounterOne
    res = stopCounterThree
  })

  startIntervalIdTwo().then((res)=>{
    res = goCounterTwo
    stopIntervalIdTwo()
  }).then((res)=>{
    res = stopCounterThree
  })
}
