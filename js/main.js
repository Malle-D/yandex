/* var way = Number(prompt("Distansiya:"))
// var speed = Number(prompt("Tezlik"))

// var hour = Math.floor(Number( way / speed));
// var min = (((way / speed).toFixed(2) * 60) - (Math.floor(way / speed) * 60).toFixed()).toFixed();


var walk = Number(3.6);
var velo = Number(20);
var car = Number(70);
var air = Number(800);


var hourWalk = Math.floor(Number( way / walk))
var minWalk = (((way / walk).toFixed(2) * 60) - (Math.floor(way / walk) * 60).toFixed()).toFixed()

console.log( "Piyoda umumiy vaqt: " + hourWalk + " soat " + minWalk + " daqiqa" );


var hourVelo = Math.floor(Number( way / velo))
var minVelo = (((way / velo).toFixed(2) * 60) - (Math.floor(way / velo) * 60).toFixed()).toFixed()

console.log( "Velosipedda umumiy vaqt: " + hourVelo + " soat " + minVelo + " daqiqa" );


var hourCar = Math.floor(Number( way / car))
var minCar = (((way / car).toFixed(2) * 60) - (Math.floor(way / car) * 60).toFixed()).toFixed()

console.log( "Mashinada umumiy vaqt: " + hourCar + " soat " + minCar + " daqiqa" );


var hourAir = Math.floor(Number( way / air))
var minAir = (((way / air).toFixed(2) * 60) - (Math.floor(way / air) * 60).toFixed()).toFixed()

console.log( "Samolyotda umumiy vaqt: " + hourAir + " soat " + minAir + " daqiqa" );
*/




// function player(person){
//    console.log( "hello " + person.trim())
// }

// player("Malle")


/*function check(person, age){
   if (0 < age && age < 12){
      return `${person} chaqaloq`
   }else if(12 < age && age < 16){
      return `${person} o'smir`
   }else if(16 < age && age < 21){
      return `${person} balog'at yoshida`
   }else if(21 < age && age < 50){
      return `${person} o'rta yosh`
   }
   else{
      return `${person} qariya`
   }
}

console.log(check("Malle", 25));*/



var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__input")
var elWalker = Number(3.6)
var elBiker = Number(20)
var elCar = Number(70)
var elAir = Number(800)


elForm.addEventListener("submit", function (e){
   e.preventDefault()
   
   var manHour = Number(Math.floor(elInput.value / elWalker)).toFixed()
   var veloHour = Number(Math.floor(elInput.value / elBiker)).toFixed()
   var avtoHour = Number(Math.floor(elInput.value / elCar)).toFixed()
   var plainHour = Number(Math.floor(elInput.value / elAir)).toFixed()

   function man (){
      if (manHour == 0){
         return ((Number(elInput.value / elWalker).toFixed(2) - Number(Math.floor(elInput.value / elWalker)).toFixed())*60).toFixed() + " daqiqa"
      }
      return manHour + " soat " + ((Number(elInput.value / elWalker).toFixed(2) - Number(Math.floor(elInput.value / elWalker)).toFixed())*60).toFixed() + " daqiqa"
   }
   function velo (){
      if (veloHour == 0){
         return ((Number(elInput.value / elBiker).toFixed(2) - Number(Math.floor(elInput.value / elBiker)).toFixed())*60).toFixed() + " daqiqa"
      }
      return veloHour + " soat " + ((Number(elInput.value / elBiker).toFixed(2) - Number(Math.floor(elInput.value / elBiker)).toFixed())*60).toFixed() + " daqiqa"
   }
   function auto (){
      if (avtoHour == 0){
         return ((Number(elInput.value / elCar).toFixed(2) - Number(Math.floor(elInput.value / elCar)).toFixed())*60).toFixed() + " daqiqa"
      }
      return avtoHour + " soat " + ((Number(elInput.value / elCar).toFixed(2) - Number(Math.floor(elInput.value / elCar)).toFixed())*60).toFixed() + " daqiqa"
   }
   function plain (){
      if(plainHour == 0){
         return ((Number(elInput.value / elAir).toFixed(2) - Number(Math.floor(elInput.value / elAir)).toFixed())*60).toFixed() + " daqiqa"
      }
      return plainHour + " soat " + ((Number(elInput.value / elAir).toFixed(2) - Number(Math.floor(elInput.value / elAir)).toFixed())*60).toFixed() + " daqiqa"
   }


   document.querySelector(".list__output-1").textContent = man();
   document.querySelector(".list__output-2").textContent = velo();
   document.querySelector(".list__output-3").textContent = auto();
   document.querySelector(".list__output-4").textContent = plain();
})