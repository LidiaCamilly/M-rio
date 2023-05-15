const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
var gameover = document.getElementById('gameover');
var nuvem = document.getElementById('clouds');
var game = document.querySelector('.game');

function enquanto(){
     gameover.hidden=false;
     nuvem.hidden=true;
     game.style.animation = 'none'
};

    const jump = () => {
   mario.classList.add('jump');

    setTimeout(()=> {
        mario.classList.remove('jump');
    }, 500);
}
const loop = setInterval(()=>{
     const pipePosition = pipe.offsetLeft;
     const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); 

     if(pipePosition <= 33 && pipePosition > 0 && marioPosition < 110){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;
        mario.src = 'game over.png';
        mario.style.width = '77px';
        mario.style.marginLeft = '30px';
         enquanto()
        clearInterval(loop);
        }
    }, 10);
     
document.addEventListener('keydown', jump);