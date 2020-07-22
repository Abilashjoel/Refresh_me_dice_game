var randomNumber1 =Math.random();
randomNumber1=(randomNumber1*6)+1;
randomNumber1=Math.floor(randomNumber1);
var j="images/dice"+randomNumber1+".png";
var p =document.querySelectorAll("img")[0];
p.setAttribute("src",j);

var randomNumber2=Math.random();
randomNumber2=(randomNumber2*6)+1;
randomNumber2=Math.floor(randomNumber2);
var j="images/dice"+randomNumber2+".png";
var p =document.querySelectorAll("img")[1];
p.setAttribute("src",j);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player1 Wins"
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player2 Wins🚩"
}
else{
  document.querySelector("h1").innerHTML="Draw"
}
