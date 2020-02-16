//Create three boxes in your HTML / CSS
//Click on a box and have it rotate (45+ degrees each click)
//On the third click of each box change the color of the other two boxes
//On a click of a box, turn that box into a circle and have it move to the right
//Pseudo Code and Wireframes:

//Build a simple slot machine with minimum 5 items per reel
//and 3 reels - user should be able to bet min or max and have their total update
//aka how much money they have won or lost.
//Min bet does $5 and Max bet does $50.
//They should start with $1000. Matches of the three wheels = a win just like a
//normal slot machine and they win 10x their bet

document.getElementById("playSlots").addEventListener("click", spinReel)


const minBet = 5
const maxBet = 50
let balance = 1000



let images = ["images/image1.png", "images/image2.png", "images/image3.png", "images/image4.png", "images/image5.png"];
document.getElementById("balance").innerHTML = balance



function displayMessage (msg){
  document.getElementById("displayMessage").innerHTML = msg
}


function spinReel() {
  let randomSpin1 = Math.floor(Math.random() * images.length-1)
  let randomSpin2 = Math.floor(Math.random() * images.length-1)
  let randomSpin3 = Math.floor(Math.random() * images.length-1)
  console.log(randomSpin1)
  let bet = document.getElementById("displayBet").value


  let slotImage1 =images[randomSpin1]
  let slotImage2 =images[randomSpin2]
  let slotImage3 =images[randomSpin3]
console.log("slot1",slotImage1 )
  if (bet < minBet || bet > maxBet){
    displayMessage(`Bet must be between ${minBet} and ${maxBet}.`)
    return;
  }
  if (balance < 50){
    displayMessage("Oh No! Game Over!")
    return;
  }
  if (randomSpin1 === randomSpin2 && randomSpin2 === randomSpin3){
    displayMessage('You Win!')
    balance += bet * 10
  }else{
    displayMessage('You Lose!')
    balance -= bet
  }

  document.getElementById("balance").innerHTML = balance
  var slot1 = document.getElementById("slot1");

  var slot2 = document.getElementById("slot2");

  var slot3 = document.getElementById("slot3");

  // slot1.src = slotImage1;

  slot1.setAttribute("src", slotImage1);
  slot2.src = slotImage2;
  slot3.src = slotImage3;

  console.log(slot1.src,slot2.src,slot3.src)
}



// document.getElementById("box1").onclick = rotating;
// var keepRotating = 0;
//
// function rotating(){
//   var rotateB = document.getElementById('box1');
//     rotateB.style.transform = `rotate(${keepRotating+= 45}deg)`;
// }

// const boxes = document.querySelectorAll(".boxes")
// let box1Clicks = 0,
//     box2Clicks = 0,
//     box3Clicks = 0
//
// boxes.forEach(el => {
//   el.addEventListener("click", ()=> {
//     const boxClicked = event.target.id
//     if( boxClicked === "box1"){
//       box1Clicks++
//     }else if (boxClicked === "box2"){
//       box2Clicks++
//     }else{
//       box3Clicks++
//     }
//     if(box1Count !== 3 && box2Count !== 3 && box3Count !== 3){
//       document.querySelectorAll(".box").forEach((el)=>{
//        el.style.background = "white"
//      })
//     }
//     if( box1Clicks === 3 ){
//       document.querySelector("#box2").style.background = "red";
//       document.querySelector("#box3").style.background = "red";
//       box1Clicks = 0
//     }else if( box2Clicks === 3 ){
//       document.querySelector("#box1").style.background = "red";
//       document.querySelector("#box3").style.background = "red";
//       box2Clicks = 0
//     }else if (box3Clicks === 3) {
//       document.querySelector("#box1").style.background = "red";
//       document.querySelector("#box2").style.background = "red";
//       box3Clicks = 0
//     }
//     console.log(box1Clicks,box2Clicks,box3Clicks);
//   })
// })
