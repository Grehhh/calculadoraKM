let resultado = document.getElementById('resultado');
let button = document.getElementById('btn');
button.addEventListener('click', main);


function main() {
    let km = parseInt(document.getElementById('km').value);
    let dias = parseInt(document.getElementById('dias').value);
    let personas = parseInt(document.getElementById('personas').value)
    calculadora(km,dias,personas);
}

function calculadora(km,d,pers = 1) {

    console.log(typeof km, km);
    console.log(typeof d, d);
    console.log(typeof pers, pers)
    
    let dias = d * 24;
    let tramo1 = 0;
    let tramo2 = 0;
    let suma = 0;
    
    while(km > 100) {
        tramo1++;
        km--;
    }
    tramo1 = tramo1 * 0.3;
    
    while (km <= 100 && km > 30 ) {
        tramo2++;
        km--;
    }
    tramo2 = tramo2 * 0.2;
    
    suma = (tramo1 + tramo2 + dias) / pers;

    resultado.innerText = suma + ' euros';

}
