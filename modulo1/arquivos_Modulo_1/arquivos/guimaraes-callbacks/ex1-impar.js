const verificaImpar = (numero, funcaoImpressaoImpar, funcaoImpressaoPar) => {
    if(numero % 2 !== 0) {
        // return funcaoImpressaoImpar(); // não serve pra nada
        funcaoImpressaoImpar();
    } else{
        funcaoImpressaoPar();
    }
}

const callbackImpressaoImpar = () => {
    console.log("Sim, o número é ímpar");
}
const callbackImpressaoPar = () => {
    console.log("Não, o número não é ímpar");
}

verificaImpar(8, callbackImpressaoImpar, callbackImpressaoPar);