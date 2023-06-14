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
    cartaoNumber1.classList.add('margin-esquerda');
    cartaoNumber2.classList.add('margin-direita');
});
InputTipo2.addEventListener('blur', function() {
    cartaoNumber1.classList.remove('margin-esquerda');
    cartaoNumber2.classList.remove('margin-direita');
});


var InputTipo2e1 = document.getElementById('InputTipo2.1')
InputTipo2e1.addEventListener('focus', function() {
    cartaoNumber1.classList.add('margin-esquerda');
    cartaoNumber2.classList.add('margin-direita');
});
InputTipo2e1.addEventListener('blur', function() {
    cartaoNumber1.classList.remove('margin-esquerda');
    cartaoNumber2.classList.remove('margin-direita');
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