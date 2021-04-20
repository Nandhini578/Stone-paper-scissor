
// function Increment(){
//   var value=document.querySelector("p").innerHTML;
//   ++value;
//   if(value!=11){
//     document.querySelector("p").innerHTML=value;
//   }
// }
 for(var i=0;i<document.querySelectorAll(".btn-lg").length;i++){
     document.querySelectorAll("button")[i].addEventListener("click",Handleclick);
 }

 function Handleclick(){

   //computer game
   var randomSelection=Math.floor(Math.random()*3);

     if(randomSelection===0){
       var randomImage="Scissor0.jpg";
     }
     else if(randomSelection===1){
       var randomImage="rock1.jpg";
     }
     else{
       var randomImage="paper2.jpg";
     }
     document.querySelectorAll("img")[2].setAttribute("src",randomImage);
//User game
   var buttonName=this.innerHTML;
   if(buttonName==="✌️"){
     var selectImage="Scissor.jpg";
     document.querySelectorAll("img")[1].setAttribute("src",selectImage);
   }
   else if(buttonName==="👊"){
     var selectImage="rock.jpg";
     document.querySelectorAll("img")[1].setAttribute("src",selectImage);
   }
   else{
     var selectImage="paper.jpg";
     document.querySelectorAll("img")[1].setAttribute("src",selectImage);
   }
   calculate(randomImage,selectImage);
   }
   var scorePlayer=0;
   var scoreComputer=0;

   function calculate(randomImage,selectImage){
     if(randomImage==="paper2.jpg"&&selectImage==="Scissor.jpg"){
       ++scorePlayer;
       document.querySelectorAll("h2")[0].innerHTML="YOU:"+scorePlayer;
     }
     else if(randomImage==="Scissor0.jpg"&&selectImage==="rock.jpg"){
     ++scorePlayer;
       document.querySelectorAll("h2")[0].innerHTML="YOU:"+scorePlayer;
     }
     else if(randomImage==="rock1.jpg"&&selectImage==="paper.jpg"){
      ++scorePlayer;
       document.querySelectorAll("h2")[0].innerHTML="YOU:"+scorePlayer;
     }
     else if(selectImage==="paper.jpg"&&randomImage==="Scissor0.jpg"){
      ++scoreComputer;
       document.querySelectorAll("h2")[1].innerHTML="COMPUTER:"+scoreComputer;
     }
     else if(selectImage==="Scissor.jpg"&&randomImage==="rock1.jpg"){
      ++scoreComputer;
       document.querySelectorAll("h2")[1].innerHTML="COMPUTER:"+scoreComputer;
     }
     else if(selectImage==="rock.jpg"&&randomImage==="paper2.jpg"){
       ++scoreComputer;
       document.querySelectorAll("h2")[1].innerHTML="COMPUTER:"+scoreComputer;
     }



if(scorePlayer>scoreComputer){
  document.querySelector("h1").innerHTML="CONGRADULATIONS YOU WINS!!!";
}
else if(scorePlayer<scoreComputer){
  document.querySelector("h1").innerHTML="YOU LOSE!!! TRY AGAIN!!!";
}
else{
  document.querySelector("h1").innerHTML="MATCH DRAWS";
}
}
