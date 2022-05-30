//Exercicio 2
//a)
function obterEstatisticas(numeros:number[]): Estatistica {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
type Estatistica ={
    maior:number,
    menor: number,
    media:number
}

//b)

//c)

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros:number[]) => Estatistica
}

 const amostraDeIdades: AmostraDeDados = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas
}

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))

