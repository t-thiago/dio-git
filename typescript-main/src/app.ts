let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumero(numero1: number, numero2: number, devePrintar: boolean, frase: string){
    let resultado = numero1 + numero2
    if(devePrintar){
        console.log(frase + resultado)
    } return numero1 + numero2
}

let devePrintar = true;
let frase = 'O Valor é: '


if(button){
    button.addEventListener('click',() =>{
       if(input1&&input2){
        console.log(adicionarNumero(number(input1.value), number(input2.value)))
       } 
    })
}