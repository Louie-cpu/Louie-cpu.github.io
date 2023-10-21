//   var trickOrTreat =Math.floor(Math.random() * 8)
//   var spooked! =Math.floor(Math.random() * 8)

//   const treasure = (number) => {
//      return alert(number)
//     )
//     if (number ===trickOrTreat) {
//     document.getElementById(trickOrTreat).innerHTML = "🍬"
    
// }
//   else if (number ===spooked!) {
//     document.getElementById(spooked!).innerHTML = "👻"
    
//   }

//   else if (number ===spooked!) {
//     document.getElementById(spooked!).innerHTML = "👹"
//   }

//   else if (number ===spooked!) {
//     document.getElementById(spooked!).innerHTML = "👺"
//   }
//   else if (number ===spooked!) {
//     document.getElementById(spooked!).innerHTML = "🤡"
//   }
//   else if (number ===spooked!) {
//     document.getElementById(spooked!).innerHTML = "👾"
//   }
//   else if (number ===spooked!) {
//     document.getElementById(spooked!).innerHTML = "👽"
//   }
//   else if (number ===spooked!) {
//     document.getElementById(spooked!).innerHTML = "🤖"
//   }
//   else (number ===trickOrTreat) {
//     document.getElementById(trickOrTreat).innerHTML = "🍫"
//   }
// }
 
 
  // document.getElementById(0).innerHTML = "🍫"
 // document.getElementById(0).innerHTML = "🍫"
 // document.getElementById(0).innerHTML = "🍫"
 // document.getElementById(0).innerHTML = "🍫"
 // document.getElementById(0).innerHTML = "🍫"
 // document.getElementById(0).innerHTML = "🍫"
 // document.getElementById(0).innerHTML = "🍫"
  
 var treasureLocation = Math.floor(Math.random() * 9)
 var bombLocation = Math.floor(Math.random() * 9)
 
 const changeToEmoji = (number) => {
   if(number === treasureLocation){
     document.getElementById(treasureLocation).innerHTML = '🎁'
   } else if(number === bombLocation){
     document.getElementById(bombLocation).innerHTML = '💣'
   } else {
     document.getElementById(number).innerHTML = '🐟'
   }
 }