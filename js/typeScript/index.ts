const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input', (event) =>{
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value)
});

function adicionaApendiceALista(arr, valor){
    return arr.map(item=> item + valor)
}

adicionaApendiceALista([1,2,3],1)