var InputTipo1 = document.getElementById('InputTipo1');
var cartaoNumber1 = document.querySelector('#cartaoNumber1')

InputTipo1.addEventListener('focus', function() {
    cartaoNumber1.classList.add('margin-direita');
    cartaoNumber2.classList.add('margin-esquerda');
});
InputTipo1.addEventListener('blur', function() {
    cartaoNumber1.classList.remove('margin-direita');
    cartaoNumber2.classList.remove('margin-esquerda');
});

//Movimentação do cartão (descobri uma forma mais resumida que essa)
var InputTipo1e1 = document.getElementById('InputTipo1.1')
InputTipo1e1.addEventListener('focus', function() {
    cartaoNumber1.classList.add('margin-direita');
    cartaoNumber2.classList.add('margin-esquerda');
});
InputTipo1e1.addEventListener('blur', function() {
    cartaoNumber1.classList.remove('margin-direita');
    cartaoNumber2.classList.remove('margin-esquerda');
});
var InputTipo2 = document.getElementById('InputTipo2')
InputTipo2.addEventListener('focus', function() {
    cartaoNumber1.classList.add('margin-direita');
    cartaoNumber2.classList.add('margin-esquerda');
});
InputTipo2.addEventListener('blur', function() {
    cartaoNumber1.classList.remove('margin-direita');
    cartaoNumber2.classList.remove('margin-esquerda');
});
var InputTipo2e1 = document.getElementById('InputTipo2.1')
InputTipo2e1.addEventListener('focus', function() {
    cartaoNumber1.classList.add('margin-direita');
    cartaoNumber2.classList.add('margin-esquerda');
});
InputTipo2e1.addEventListener('blur', function() {
    cartaoNumber1.classList.remove('margin-direita');
    cartaoNumber2.classList.remove('margin-esquerda');
});
var InputTipo2e2 = document.getElementById('InputTipo2.2')
InputTipo2e2.addEventListener('focus', function() {
    cartaoNumber1.classList.add('margin-esquerda');
    cartaoNumber2.classList.add('margin-direita');
});
InputTipo2e2.addEventListener('blur', function() {
    cartaoNumber1.classList.remove('margin-esquerda');
    cartaoNumber2.classList.remove('margin-direita');
});


var input = document.getElementById('InputTipo1.1');

input.onkeydown = function(event) {
  var key = event.key;
  if (key !== "Backspace" && key !== "Delete" && !/^\d$/.test(key)) {
    event.preventDefault();
  }
};

function updateOutput() {
    var input = document.getElementById('InputTipo1.1');
    var output = document.getElementById('ImpriNumeros');
    
    var value = input.value.replace(/\D/g, '').slice(0, 16);
    var formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
    
    output.textContent = formattedValue;
    output.classList.add('spaced-text');
}


// Impressão da NOME do input para o cartão
const InputName = document.querySelector('#InputTipo1')
InputName.addEventListener("input", nomeImprimir)
function nomeImprimir() {
    var input = document.getElementById('InputTipo1');
    var output = document.querySelector('.nameImpri');
    
    output.innerText = input.value;

}
// Impressão da DATA do input para o cartão
const InputData = document.getElementById('InputTipo2')
InputData.addEventListener("input", dataImprimir)
const InputData1 = document.getElementById('InputTipo2.1')
InputData1.addEventListener("input", dataImprimir)
function dataImprimir() {
    var dia = document.getElementById('InputTipo2').value;
    var mes = document.getElementById('InputTipo2.1').value;

    var mesdia = dia + "/" + mes; 
    var output = document.querySelector('.dataImpri');
    
    output.innerText = mesdia;
}
// Impressão da CVV do input para o cartão
const InputCvv = document.getElementById('InputTipo2.2')
InputCvv.addEventListener("input", cvvImprimir)
function cvvImprimir() {
    var cvv = document.getElementById('InputTipo2.2').value;

    var output = document.querySelector('.cvv');
    
    output.innerText = cvv;
}





function sucesso(){
    var mensagem = document.querySelector('#sucesso')

    mensagem.classList.remove('mensagem-sucesso-no')
    mensagem.classList.add('mensagem-sucesso-show')
}
function submit() {
    var input1 = document.querySelector('#InputTipo1').value;
    var input1e1 = document.querySelector('#InputTipo1.1').value;
    var input2 = document.querySelector('#InputTipo2').value;
    var input2e1 = document.querySelector('#InputTipo2.1').value;
    var input2e2 = document.querySelector('#InputTipo2.2').value;

    // Verificando cada input separadamente
    var erro = false;

    if (input1 == "") {
        document.querySelector('#erro1').textContent = 'Por favor, preencha este campo.';
        document.querySelector('#erro1').classList.remove('sem-erro');
        document.querySelector('#erro1').classList.add('erro');
        erro = true;
    } else {
        document.querySelector('#erro1').textContent = '';
        document.querySelector('#erro1').classList.remove('erro');
        document.querySelector('#erro1').classList.add('sem-erro');
    }

    if (input1e1 == "") {
        document.querySelector('#erro1e1').textContent = 'Por favor, preencha este campo.';
        document.querySelector('#erro1e1').classList.remove('sem-erro');
        document.querySelector('#erro1e1').classList.add('erro');
        erro = true;
    } else {
        document.querySelector('#erro1e1').textContent = '';
        document.querySelector('#erro1e1').classList.remove('erro');
        document.querySelector('#erro1e1').classList.add('sem-erro');
    }

    if (input2 == "") {
        document.querySelector('#erro2').textContent = 'Por favor, preencha este campo.';
        document.querySelector('#erro2').classList.remove('sem-erro');
        document.querySelector('#erro2').classList.add('erro');
        erro = true;
    } else {
        document.querySelector('#erro2').textContent = '';
        document.querySelector('#erro2').classList.remove('erro');
        document.querySelector('#erro2').classList.add('sem-erro');
    }

    if (input2e1 == "") {
        document.querySelector('#erro2e1').textContent = 'Por favor, preencha este campo.';
        document.querySelector('#erro2e1').classList.remove('sem-erro');
        document.querySelector('#erro2e1').classList.add('erro');
        erro = true;
    } else {
        document.querySelector('#erro2e1').textContent = '';
        document.querySelector('#erro2e1').classList.remove('erro');
        document.querySelector('#erro2e1').classList.add('sem-erro');
    }

    if (input2e2 == "") {
        document.querySelector('#erro2e2').textContent = 'Por favor, preencha este campo.';
        document.querySelector('#erro2e2').classList.remove('sem-erro');
        document.querySelector('#erro2e2').classList.add('erro');
        erro = true;
    } else {
        document.querySelector('#erro2e2').textContent = '';
        document.querySelector('#erro2e2').classList.remove('erro');
        document.querySelector('#erro2e2').classList.add('sem-erro');
    }

    
    // Repita o mesmo padrão para os outros campos de entrada e mensagens de erro

    // Verificando se há mensagens de inputs não preenchidos
    if (erro) {
        console.log("Faltam respostas em alguns inputs.");
    } else {
        var mensagem = document.querySelector('#sucesso');

        mensagem.classList.remove('mensagem-sucesso-no');
        mensagem.classList.add('mensagem-sucesso-show');
    }
}


  


function confirme(){
    var mensagem = document.querySelector('#sucesso')

    mensagem.classList.remove('mensagem-sucesso-show')
    mensagem.classList.add('mensagem-sucesso-no')
    
    location.reload()
}





const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}
function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.legth < 3){
        setError(0);
    }
    else{
        removeError(0)
    }
}