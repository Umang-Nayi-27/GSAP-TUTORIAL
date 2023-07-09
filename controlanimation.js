var ply ;

document.getElementById("play").onclick =  playbtn;

document.getElementById("stop").onclick =  stopbtn;

document.getElementById("reverse").onclick =  reversebtn;

document.getElementById("reset").onclick =  resetbtn;




function playbtn()
{
    ply = gsap.to(".circle",{x:500, rotation:360 ,duration:5});     // aa value assign kervi pade.. jo ooutside keris to automatic trigger thai jase....ane biji gsap method pan aa varible acces keri sake etle variable ne declare outside ane defination ee plybtn ni andar aapel che.
    ply.play();
}

function stopbtn()
{
   ply.pause();
}

function reversebtn()
{
   ply.reverse();       //ketlu reverse javanu te kevani jarror nathi... khalu kayo variable animate thay che te kai devanu... te eni jate calculate keri dese k ene ketlu reverse javanu che.
}

function resetbtn()
{  
   ply.restart();       // reset kerva mate GSAP ma restart() function vapray che.
}