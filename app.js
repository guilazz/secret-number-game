let listaNumeroSorteados = []
let numeroLimite = 10;

let numeroSecreto = gerarNumeroAleatorio;
let tentativas = 1;

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = `Escolha um número de 1 a ${numeroLimite}`;


function exibirTextoNaTela(tag, texto) {
    conteudo = document.querySelector(tag);
    conteudo.innerHTML = texto;
}


mensagemInicial()


function mensagemInicial() {
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do numero secreto');
    exibirTextoNaTela('p', 'Escreva um numero de 1 a 10');
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Quase!');
            exibirTextoNaTela('p', 'Tente novamente. Dica: O numero secreto é menor');
        } else {
            exibirTextoNaTela('h1', 'Quase!');
            exibirTextoNaTela('p', 'Tente novamente. Dica: O numero secreto é maior');

        }
        tentativas++;
        limparCampo();
    }
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumeroSorteados.length

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaNumeroSorteados = [];
    }

    if (listaNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados)
        return numeroEscolhido;
    }
}


function limparCampo() {
    let numeroInserido = document.querySelector('input')
    numeroInserido.innerHTML = ''
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('disabled', true)
}