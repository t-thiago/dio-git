//DESAFIO MAP
/* const maca= {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg){
    return arr.map (function (item) {
        return item * this.value;
    }, thisArg)
}

const nums = [1,2];
console.log(mapComThis('this -> Maca ' , nums, maca))
console.log(mapComThis('this -> laranja ',  nums, laranja))*/

/*function mapSemThis(arr){
    return arr.map(function (item){
        return item *2;
    })
}

const nums = [1,2]

console.log(mapSemThis(nums))

function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0;
}
console.log(filtraPares(nums))

//Reduce Desafio 1
function somaNumeros(arr){
    arr.reduce(function(prev, current){
        console.log({ prev });
        console.log({ current });
        return prev + current;
    })
}

const arr = [1, 2];

console.log(somaNumeros(arr))*/

//Reduce Desafio 2
const lista = [
    {
        nome: 'Sabão em pó',
        preco: 30,
    },
    {
        nome: 'cereal',
        preco: 9.90,
    },
    {
        nome: 'toalha',
        preco: 30,
    }
];

const saldoDisponivel = 100

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('Rodada', index + 1);
        console.log({ prev })
        console.log({ current })
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel,lista))