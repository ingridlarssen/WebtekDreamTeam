var counter = -1;
var myVar = setInterval(slide, 3000)

bilder = ["img/header1.jpg", "img/header2.jpg", "img/header3.jpg", "img/header4.jpg", "img/header5.jpg"]


function slide(){
  counter += 1
  document.getElementById("headerbilde").src = bilder[counter];
  if (counter === 4) {
    counter = -1;
  }
}

function neste(ret) {
  if (counter === 3 && ret === 1) {
    counter = -1;
  }
  else if (counter <= 0 && ret === -1) {
    counter = 3
  }
  counter += ret
  document.getElementById("headerbilde").src = bilder[counter];
  clearInterval(myVar);
  myVar = setInterval(slide, 3000);
}