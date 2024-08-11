var player_1=prompt("Enter player 1 name");
var player_2=prompt("Enter player 2 name");
document.querySelectorAll(".dice>p")[0].textContent=player_1;
document.querySelectorAll(".dice>p")[1].textContent=player_2;
function play(){
    sound.play();
    setTimeout(() => { console.log('World!'); }, 2000);
        var random=Math.random()*6+1;
    random=Math.floor(random);
    var source="./images/dice"+random+".png";
    document.querySelectorAll("img")[0].setAttribute("src",source);
    
    var random2=Math.random()*6+1;
    random2=Math.floor(random2);
    var source2="./images/dice"+random2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",source2);

 
    

    
    if(random>random2)
    {
        player1();
    }
    else if(random<random2)
    {
        player2();
    }
    else
    {
        Draw();
    }
}

document.querySelector("button").addEventListener("click",play);

function player1(){
    document.querySelector("h1").textContent=player_1+" won🎉";
}
function player2(){
    document.querySelector("h1").textContent=player_2+" won🎉";
    
}

function Draw(){
    document.querySelector("h1").textContent="Draw...!!🤝";
    
}
var sound=new Audio("audio/dice-142528.mp3");
