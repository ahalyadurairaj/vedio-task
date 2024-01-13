"use strict"
var play = document.getElementById('btn')

var pause = document.getElementById('btn1');

var vedio = document.getElementById('vd');


var move = document.getElementById('toggle');
var choice = document.getElementById('choice');

move.addEventListener('click',movefun)


 let a = 0;
function movefun(){

    if(a == 0){
        vedio.pause();
        a=1;
    }else {
        if(a == 1){
        vedio.play();
        a=0;
    }
        
    }
}

























// play.addEventListener('click',playfun);

// function playfun(){
//     play.style.backgroundColor='green';
//     pause.style.backgroundColor='';
//     vedio.play();
// }

// pause.addEventListener('click',pausefun);

// function pausefun(){
//     pause.style.backgroundColor='green';
//     play.style.backgroundColor='';
//     vedio.pause();
// }


