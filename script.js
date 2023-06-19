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

var input = document.getElementById('InputTipo1.1').value


function updateOutput() {
    var input = document.getElementById('InputTipo1.1');
    var output = document.getElementById('ImpriNumeros');
    
    var value = input.value.replace(/\s/g, '').slice(0, 16); 
    var formattedValue = value.match(/.{1,4}/g).join(' ');
    
    output.textContent = formattedValue;
    output.classList.add('spaced-text');


}

function nomeImprimir() {
    var input = document.getElementById('InputTipo1');
    var output = document.querySelector('.nameImpri');
    
    output.innerText = input.value;

}

function dataImprimir() {
    var dia = document.getElementById('InputTipo2').value;
    var mes = document.getElementById('InputTipo2.1').value;

    var mesdia = dia + "/" + mes; 
    var output = document.querySelector('.dataImpri');
    
    output.innerText = mesdia;
}

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
    var input1 = document.querySelector('.InputTipo1').value;
    var input1e1 = document.querySelector('.InputTipo1.1').value;
    var input2 = document.querySelector('.InputTipo2').value;
    var input2e1 = document.querySelector('.InputTipo2.1').value;
    var input2e2 = document.querySelector('.InputTipo2.2').value;
  
    // Verificando cada input separadamente
    var erro = false;
  
    if (input1 !== "") {
      document.querySelector('#erro1').classList.remove('sem-erro');
      document.querySelector('#erro1').classList.add('erro');
      erro = true;
    }
  
    if (input1e1 !== "") {
      document.querySelector('#erro1e1').classList.remove('sem-erro');
      document.querySelector('#erro1e1').classList.add('erro');
      erro = true;
    }
  
    if (input2 !== "") {
      document.querySelector('#erro2').classList.remove('sem-erro');
      document.querySelector('#erro2').classList.add('erro');
      erro = true;
    }
  
    if (input2e1 !== "") {
      document.querySelector('#erro2e1').classList.remove('sem-erro');
      document.querySelector('#erro2e1').classList.add('erro');
      erro = true;
    }
  
    if (input2e2 !== "") {
      document.querySelector('#erro2e2').classList.remove('sem-erro');
      document.querySelector('#erro2e2').classList.add('erro');
      erro = true;
    }
  
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