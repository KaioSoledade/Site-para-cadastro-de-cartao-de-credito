

//Movimentação do cartão (descobri uma forma mais resumida que essa)
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



// Input responsvel pelo numero do cartão
var input = document.getElementById('InputTipo1.1');
input.onkeydown = function(event) {
  var key = event.key;
  if (key !== "Backspace" && key !== "Delete" && !/^\d$/.test(key)) {
    event.preventDefault();
  }//Responsavel por não permitir Letras, somente Numeros
};
function updateOutput() {
    var input = document.getElementById('InputTipo1.1');
    var output = document.getElementById('ImpriNumeros');
    
    var value = input.value.replace(/\D/g, '').slice(0, 16); //Limite de 16 digitos
    var formattedValue = value.replace(/(\d{4})/g, '$1 ').trim(); //Formato dividido em 4 blocos
    
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



function confirme(){
    var mensagem = document.querySelector('#sucesso')

    mensagem.classList.remove('mensagem-sucesso-show')
    mensagem.classList.add('mensagem-sucesso-no')
    
    location.reload()
}



const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

function setError(index) {
    campos[index].style.border = '4px solid #e63636';
    spans[index].classList.remove('escondido');
}
function removeError(index) {
    campos[index].style.border = '';
    spans[index].classList.add('escondido');
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
    } else {
        removeError(0);
    }
}

var NumberCard = document.getElementById('InputTipo1.1');
NumberCard.addEventListener('input', NumeroValidate);
function NumeroValidate() {
    var input = NumberCard.value;
    var numericInput = input.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (numericInput.length < 16) {
        setError(1);
    } else {
        removeError(1);
    }
}

var monthInput = document.getElementById('InputTipo2');
monthInput.addEventListener('input', validateMonth);
function validateMonth() {
    var inputValue = parseInt(monthInput.value, 10);
    if (isNaN(inputValue) || inputValue < 1 || inputValue > 12) {
        setError(2); // Exibe a mensagem de erro para mês inválido
    } else {
        removeError(2); // Remove a mensagem de erro para mês inválido
    }
}

var yearInput = document.getElementById('InputTipo2.1');
yearInput.addEventListener('input', validateYear);
function validateYear() {
    var inputValue = parseInt(yearInput.value, 10);
    if (isNaN(inputValue) || inputValue < 1907 || inputValue > 2023) {
        setError(3); // Exibe a mensagem de erro para ano inválido
    } else {
        removeError(3); // Remove a mensagem de erro para ano inválido
    }
}

var cvvInput = document.getElementById('InputTipo2.2');
cvvInput.addEventListener('input', cvvValidate);
function cvvValidate() {
    if (campos[4].value.length < 3) {
        setError(4);
    } else {
        removeError(4);
    }
}



var confirmButton = document.getElementById("Formulario");
confirmButton.addEventListener("click", submit);
function submit() {
    // Resto do código de validação dos campos...
  
    // Verifica se todos os campos estão preenchidos corretamente
    if (
      campos[0].value.length >= 3 &&
      NumberCard.value.replace(/\D/g, "").length === 16 &&
      parseInt(monthInput.value, 10) >= 1 &&
      parseInt(monthInput.value, 10) <= 12 &&
      parseInt(yearInput.value, 10) >= 1907 &&
      parseInt(yearInput.value, 10) <= 2023 &&
      cvvInput.value.length === 3
    ) {
      // Todos os campos passaram na validação, adiciona a classe "show" à seção de sucesso
      document.getElementById("sucesso").classList.add("mensagem-sucesso-show");
      document.getElementById("sucesso").classList.remove("mensagem-sucesso-no");

    } else {
      // Algum campo não passou na validação, exiba as mensagens de erro
      nameValidate();
      NumeroValidate();
      validateMonth();
      validateYear();
      cvvValidate();
    }
  }
  

  