const menu = document.getElementById("menu-desplegable__hamburguer");
const top1 = document.getElementById("hamburger-top");
const middle = document.getElementById("hamburger-middle");
const botton = document.getElementById("hamburger-bottom");
let validacion = true;

function desplegarLista() {
    if(validacion){
        menu.classList.remove('menu-Desplegable');
        top1.classList.add('hamburger-top');
        middle.classList.add('hamburger-middle');
        botton.classList.add('hamburger-bottom');
        validacion = false;
    }
    else{        
        menu.classList.add('menu-Desplegable');
        top1.classList.remove('hamburger-top');
        middle.classList.remove('hamburger-middle');
        botton.classList.remove('hamburger-bottom');
        validacion = true;
    }
}