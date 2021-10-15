var bottonRow =document.getElementById('bottomRow');
var stats =document.getElementsByClassName('stats');
var player1stats =document.getElementById('player1stats');
var player1hp= document.getElementById('player1hp');
var player2hp= document.getElementById('player2hp');
var player1moves=document.getElementById('player1moves');

var player1hp1=100;
var player2hp2=100;


function beginBattle(){
  bottomRow.innerHTML="Pick player1's ability by clicking the above button";
for(var x=0;x<stats.length;x++){
   stats[x].style.visibility="visible";
 }}

function player2Attack(){
  var attackChoice = Math.ceil(Math.random()*3);
  if(attackChoice==1){
     var hitChance= Math.round(Math.random()*10);
  if(hitChance <=7){
    var dmg= Math.round(Math.random()*10)+10;
    player1hp1 -=dmg;
    if(player1hp1<0){
      player1hp1=0;
    }
    bottomRow.innerHTML +="<br>MARIO hit with you a basic Blast,doing " + dmg + " damage. You now have"+ player1hp1 + "hp.";
    var player1hpBarWidth = (player1hp1/100)*300;
    player1hp.style.width = player1hpBarWidth + "px";
  }else{
    bottomRow.innerHTML += "<br>MARIO missed!";
  }
  }
  else if(attackChoice==2){
       var hitChance= Math.round(Math.random()*10);
  if(hitChance <=5){
    var dmg= Math.round(Math.random()*15)+15;
    player1hp1 -=dmg;
    if(player1hp1<0){
      player1hp1=0;
    }
    bottomRow.innerHTML +="<br>You hit ShootingBoss MARIO with your Blast,doing " + dmg + " damage. MARIO now has "+ player1hp1 + "hp.";
    var player1hpBarWidth = (player1hp1/100)*300;
    player1hp.style.width = player1hpBarWidth + "px";
  }else{
    bottomRow.innerHTML += "<br>MARIO missed!";
  }
  }
  else{
       var hitChance= Math.round(Math.random()*10);
  if(hitChance <=3){
    var dmg= Math.round(Math.random()*20)+20;
    player1hp1 -=dmg;
    if(player1hp1<0){
      player1hp1=0;
    }
    bottomRow.innerHTML +="<br>You hit ShootingBoss MARIO with your Blast,doing " + dmg + " damage. MARIO now has "+ player1hp1 + "hp.";
    var player1hpBarWidth = (player1hp1/100)*300;
    player1hp.style.width = player1hpBarWidth + "px";
  }else{
    bottomRow.innerHTML += "<br>MARIO missed!";
  }
  }
   if(player1hp1==0){
    bottomRow.innerHTML+="<br>MARIO has defeated you !!!<br><br> <button onclick='restartGame()'><h1>Play Again?</h1></button>";
    player1moves.style.visibility="hidden";
    
  }
}

function blast(){
  var hitChance= Math.round(Math.random()*10);
  if(hitChance <=7){
    var dmg= Math.round(Math.random()*10)+10;
    player2hp2 -=dmg;
    if(player2hp2<0){
      player2hp2=0;
    }
    bottomRow.innerHTML="You hit ShootingBoss MARIO with your Blast,doing " + dmg + " damage. MARIO now has "+ player2hp2 + "hp.";
    var player2hpBarWidth = (player2hp2/100)*300;
    player2hp.style.width = player2hpBarWidth + "px";
  }else{
    bottomRow.innerHTML = "You missed!";
  }
  if(player2hp2==0){
    bottomRow.innerHTML+="<br>You have successfully defeated shooting boss MARIO!!!<br><br> <button onclick='restartGame()'><h1>Play Again?</h1></button>";
    player1moves.style.visibility="hidden";
    
  }
  else{
    player2Attack()
      
    }
    }

function restartGame(){
  player2hp2=100;
  player1hp1=100;
  var player1hpBarWidth=(player1hp1/100)*300;
  player1hp.style.width=player1hpBarWidth + "px";
  var player2hpBarWidth=(player2hp2/100)*300;
  player2hp.style.width=player2hpBarWidth + "px";
  player1moves.style.visibility="visible";
  beginBattle();
}
