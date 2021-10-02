let HTML = document.getElementById("HTML-Progreso");
let JS = document.getElementById("JS-Progreso");
let CSS = document.getElementById("CSS-Progreso");
let GIT = document.getElementById("GIT-Progreso");

const observerHTML = new IntersectionObserver(AnimacionHTML, {threshold : 0.99});        
const observerJS = new IntersectionObserver(AnimacionJS, {threshold : 0.99});    
const observerCSS = new IntersectionObserver(AnimacionCSS, {threshold : 0.99});        
const observerGIT = new IntersectionObserver(AnimacionGIT, {threshold : 0.99});    
observerHTML.observe(HTML);
observerJS.observe(JS);
observerCSS.observe(CSS);
observerGIT.observe(GIT);


function AnimacionHTML(dato){
    let SeVe = dato[0];
    if (SeVe.intersectionRatio >= 1) {
        HTML.classList.add("HTML-Progreso");
    }
}
function AnimacionJS(dato){
    let SeVe = dato[0];
    if (SeVe.intersectionRatio >= 1) {
        JS.classList.add("JS-Progreso");
    }
}
function AnimacionCSS(dato){
    let SeVe = dato[0];
    if (SeVe.intersectionRatio >= 1) {
        CSS.classList.add("CSS-Progreso");
    }
}
function AnimacionGIT(dato){
    let SeVe = dato[0];
    if (SeVe.intersectionRatio >= 1) {
        GIT.classList.add("GIT-Progreso");
    }
}




//CODIGO PARA QUE EL PORCENTAJE SE MUEVA DE UNO EN UNO
// let porcentaje = document.getElementById("porcentaje-git");   
// let contador = 0;
// let id = setInterval(frame, 55);
// function frame() {
// if (contador == 60) {
//   clearInterval(id);
// } else {
//   contador++; 
//   porcentaje.innerText = `${contador}%`;
// }
// }