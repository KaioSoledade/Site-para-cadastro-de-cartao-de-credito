var InputTipo1 = document.getElementById('InputTipo1');
var cartaoNumber1 = document.querySelector('#cartaoNumber1')

InputTipo1.addEventListener('focus', function() {
    cartaoNumber1.classList.add('cartao1-em-uso');
    cartaoNumber1.classList.remove('cartao1-sem-uso');
});

InputTipo1.addEventListener('blur', function() {
    cartaoNumber1.classList.remove('cartao1-em-uso');
    cartaoNumber1.classList.add('cartao1-sem-uso');
});