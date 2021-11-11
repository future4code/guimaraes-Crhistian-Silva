/* 1. 1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura
 entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
 
 - Graus Fahrenheit(°F) para Kelvin(K)
    
    ```
    (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
    ```
    
- Graus Celsius(°C) para Graus Fahrenheit (°C)
    
    ```
    (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
    ```
    

a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter */
const tempFahr = 77
const tempKelvin= (tempFahr - 32) * (5/9) + 273.15
console.log(tempKelvin)

const tempCelsius = 80 
const novaTempFahr = (tempCelsius) * (9/5) + 32
console.log(novaTempFahr)

const tempCelsiusNova = 30 
const tempFahrNova = (tempCelsiusNova) * (9/5) + 32
const tempKelvinNova = (tempFahrNova - 32) * (5/9) + 273.15
console.log("30° graus celcius, convertida em Fahrenheit e kelvin são respectivamente: ", tempFahrNova, "e " + tempKelvinNova)

let tempUsuario = Number(prompt("Digite a temperatura em graus Celsius que vc quer converter: "))
const tempFahrUsuario = (tempUsuario) * (9/5) + 32
const tempKelvinUsuario= (tempFahrUsuario - 32) * (5/9) + 273.15
console.log("A temperatura de " + tempUsuario + " Graus Celcius, convertida em Fahrenheit é igual a " + tempFahrUsuario + " graus fahrenheit e " + tempKelvinUsuario + " graus kelvin")


/* 2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. 
Sabe-se que o quilowatt-hora de energia custa R$0.05. 
Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
    
a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora */
let kwHora = 280
const precoKW = 0.05
let valorPago = kwHora * precoKW
console.log(valorPago)

/* b) Altere o programa para receber mais um valor: a porcentagem de desconto.
 Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto */

let kwHoraNovo = 280
const precoKWNovo = 0.05
let valorPagoNovo = kwHoraNovo * precoKWNovo
const desconto = 0.15 * valorPagoNovo
console.log(valorPago - desconto)

/* 3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. 
Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb).
Para representar Distâncias, existem metro (m), pés (ft), milha (mi). 
Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic).
Dada essa introdução, faça o que se pede: */
    
/*   a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg.
     Imprima  a resposta no console da seguinte forma: 
    `20lb equivalem a X kg` */
const pesoLibras = 20
const valorLibras = 0.454
const kilo = pesoLibras * valorLibras
console.log("20lb equivalem a " + kilo + " Kg")

/*  b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg.
     Imprima  a resposta no console da seguinte forma: 
    `10.5oz equivalem a X kg` */
    const pesoOncas = 10.5
    const valorOncas = 0.0283
    const kilo2 = pesoOncas * valorOncas
    console.log("10.5 onças equivalem a " + kilo2 + " kg" )

/* c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m.
Imprima  a resposta no console da seguinte forma: 
    `100mi equivalem a X m` */
    const milhas = 100
    const valorMilhas = 1.609344
    const metros = milhas * valorMilhas
    console.log("100 milhas equivalem a " + metros + " metros")

/* d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m.
Imprima  a resposta no console da seguinte forma: 
    `50ft equivalem a X m` */
    const pes = 50
    const valorPes = 0.305
    const pesMetros = pes * valorPes
    console.log("50 pés equivalem a " + pesMetros + " metros")

/* e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. 
Imprima  a resposta no console da seguinte forma: 
    `103.56gal equivalem a X l` */
    const galao = 103.56
    const valorGalao = 3.785
    const litros = galao * valorGalao
    console.log("103.56 galoes equivalem a " + litros + " litros")

/* f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. 
Imprima  a resposta no console da seguinte forma: 
    `450 xic equivalem a X l` */
    const xic = 450
    const valorXic = 0.24
    const xicLitros = xic * valorXic
    console.log("450 xic equivalem a " + xicLitros + " litros")

//g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter

let xicUsusario = Number(prompt("Digite quantas chicaras você quer converter em litros: "))
const valorXicNovo = 0.24
const xicLitrosNovo = xicUsusario * valorXicNovo
console.log("450 xic equivalem a " + xicLitrosNovo + " litros")