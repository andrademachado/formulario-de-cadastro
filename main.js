const form = document.getElementById('form-cadastro');


function validaNnome(nomeCompleto){
    const nomeComoArray =  nomeCompleto.split(' ');
    return nomeComoArray.length >= 3;
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    const nome = document.getElementById('nome');
    if (!validaNnome(nome.value)){
        alert('Por favor, Insira o nome completo!');
    }else{
        alert('ok ,nome completo');
    }


})

console.log(form);



