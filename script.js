const container1 = document.getElementById("con1");
const container2 = document.getElementById("con2");
const container3 = document.getElementById("con3");
const textcontent1 = document.getElementById("textcontent1");
const textcontent2 = document.getElementById("textcontent2");
const textcontent3 = document.getElementById("textcontent3");
const nxtBtn = document.getElementById("next");
const divOne = document.getElementById("qtwo");
const divTwo =document.getElementById("qone");

const con1 = document.getElementById("container1");
const con2 = document.getElementById("container2");
const con3 = document.getElementById("container3");
const txtcon1 = document.getElementById("txtcon1");
const txtcon2 = document.getElementById("txtcon2");
const txtcon3 = document.getElementById("txtcon3");
const final = document.getElementById("final");
const next2 = document.getElementById("next2")

container1.onclick = function(){
  textcontent1.style.display = "block";
  container1.style.border = "2px solid green"
  container2.style.border = "2px solid green"
  container3.style.border = "2px solid green"
  nxtBtn.style.display = "block"
}
container2.onclick = function(){
  textcontent2.style.display = "block";
  container1.style.border = "2px solid red"
  container2.style.border = "2px solid red"
  container3.style.border = "2px solid red"
}
container3.onclick = function(){
  textcontent3.style.display = "block";
  container1.style.border = "2px solid red"
  container2.style.border = "2px solid red"
  container3.style.border = "2px solid red"
}
nxtBtn.onclick = function(){
  divOne.style.display = "block"
  divTwo.style.display = "none"
}


con1.onclick = function(){
  con1.style.border = "2px solid red";
  con2.style.border = "2px solid red";
  con3.style.border = "2px solid red";
  txtcon1.style.display = "block"
}
con2.onclick = function(){
  con1.style.border = "2px solid green";
  con2.style.border = "2px solid green";
  con3.style.border = "2px solid green"; 
  txtcon2.style.display = "block"
  next2.style.display = "block"
}
con3.onclick = function(){
  con1.style.border = "2px solid red";
  con2.style.border = "2px solid red";
  con3.style.border = "2px solid red";
  txtcon3.style.display = "block"
}
next2.onclick = function(){
  divOne.style.display = "none"
  divthree.style.display = "block"
}



const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");
const next3 = document.getElementById("next3")
const divthree = document.getElementById("qthree")

content1.onclick = function(){
  txt1.style.display = "block";
  content1.style.border = "2px solid green"
  content2.style.border = "2px solid green"
  content3.style.border = "2px solid green"
  next3.style.display = "block"
}
content2.onclick = function(){
  txt2.style.display = "block";
  content1.style.border = "2px solid red"
  content2.style.border = "2px solid red"
  content3.style.border = "2px solid red"
}
content3.onclick = function(){
  txt3.style.display = "block";
  content1.style.border = "2px solid red"
  content2.style.border = "2px solid red"
  content3.style.border = "2px solid red"
}
next3.onclick = function(){
  final.style.display = "flex";
  divthree.style.display = "none";
   confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
}
