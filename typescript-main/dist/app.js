"use strict";
var button = document.getElementById('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
function adicionarNumero(numero1, numero2, devePrintar, frase) {
    var resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
var devePrintar = true;
var frase = 'O Valor é: ';
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2) {
            console.log(adicionarNumero(number(input1.value), number(input2.value)));
        }
    });
}
//# sourceMappingURL=app.js.map