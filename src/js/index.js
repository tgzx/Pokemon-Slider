/*
    Definir objeticos

objetivo 1 - clicar na seta mudar de carta {
    - passo 1 - pegar o elemento html seta proximo
    - passo 2 = identificar cliquei do usuario
    - passo 3 - aparecer o proximo cartao
    - passo 4 - buscar o cartao selecionado e deixar os outros escondidos
}

Obejtivo 2 - clicar em voltar, mostrar carta anterior {
    - passo 1 - pegar o elemento html seta voltar
    - passo 2 = identificar cliquei do usuario
    - passo 3 - aparecer o anterior cartao
    - passo 4 - buscar o cartao selecionado e deixar os outros escondidos    
}
*/

// - passo 1 - pegar o elemento html seta proximo e salva numa variavel let ou const
// const document.getElementById('btn-avancar')
// const o valor da varivael é fixo
// let permite alterar o valor da variavel
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

function esconderCartaSelecionada(){
    cartoes[cartaoAtual].classList.remove('selecionado');
}

function mostrarCartaProxima(direcao){
    cartoes[cartaoAtual+direcao].classList.add('selecionado');
}


const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

// - passo 2 = identificar cliquei do usuario
// - passo 3 - aparecer o anterior cartao
// - passo 4 - buscar o cartao selecionado e deixar os outros escondidos

btnAvancar.addEventListener('click', function () {
     if (cartaoAtual >= 0 && cartaoAtual <= 3){
        if (cartaoAtual < 2){
            esconderCartaSelecionada();
            mostrarCartaProxima(1);
            cartaoAtual++;
        }
     }
})

// Obejtivo 2 - clicar em voltar, mostrar carta anterior {
//     - passo 1 - pegar o elemento html seta voltar
//     - passo 2 = identificar cliquei do usuario
//     - passo 3 - aparecer o anterior cartao
//     - passo 4 - buscar o cartao selecionado e deixar os outros escondidos    
// }

btnVoltar.addEventListener('click', function () {
    if (cartaoAtual >= 0 && cartaoAtual <= 3){
        if(cartaoAtual > 0){
            esconderCartaSelecionada();
            mostrarCartaProxima(-1);
            cartaoAtual--;
        }
    }
})