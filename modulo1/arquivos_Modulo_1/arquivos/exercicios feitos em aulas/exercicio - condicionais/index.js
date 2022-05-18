/* - Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos

O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

   
- Exemplo de saída: Jogo Nacional
    
    ```
    ---Dados da compra--- 
    Nome do cliente:  Soter Padua 
    Tipo do jogo:  Nacional 
    Etapa do jogo:  Final 
    Categoria:  1 
    Quantidade de Ingressos:  10 ingressos 
    ---Valores--- 
    Valor do ingresso:  R$ 1980
    Valor total:  R$ 19800 */
  
const nome = prompt("Qual seu nome ? ")
const tipo = prompt("Qual o tipo de jogo ? use IN para jogo Internacional ou DO para jogo Doméstico").toUpperCase()
const etapa = prompt("Qual etapa de jogo ? Use SF para Semi-Final,  DT para Decisão de Terceiro Lugar e FI para Final").toUpperCase()
const categoria = Number(prompt("use opções: 1, 2, 3, 4"))
const quant = Number(prompt("Digite a quantidade de ingressos"))

let precoUnitario;

switch(etapa){
  case "SF":
    switch(categoria){
      case 1:
        precoUnitario = 1320.00;
        break;
        case 2:
          precoUnitario = 880.00;
          break;
          case 3:
            precoUnitario = 550.00;
            break;
            case 4:
              precoUnitario =220.00;
              break;
              default: 
              precoUnitario = 0;
              break;
    }
    break;
    case "DT":
      switch(categoria){
        case 1:
          precoUnitario = 660.00;
          break;
          case 2:
            precoUnitario = 440.00;
            break;
            case 3:
              precoUnitario = 330.00;
              case 4:
                precoUnitario = 170.00;
                break;
                default:
                  precoUnitario = 0;
                  break;
      }
      break;
    case "FI":
      switch(categoria){
        case 1:
          precoUnitario = 1980.00;
          break;
          case 2:
            precoUnitario = 1320.00;
            break;
            case 3:
              precoUnitario = 880.00;
              break;
              case 4:
                precoUnitario = 330.00;
                break;
                default:
                  precoUnitario = 0;
                  break;
      }
      break;
      default:
        break;
    }

if(tipo === "IN"){
  precoUnitario = precoUnitario  * 4.1
}

let tipoJogo;
if(tipo === "DO"){
  tipoJogo = "Doméstico"
}else if(tipo === "IN"){
  tipoJogo = "Internacional"
}else{
  tipoJogo = "não revelado"
}

let etapaJogo;
switch(etapa){
  case "SF":
    etapaJogo = "Semi- Final";
    break;
    case "DT":
      etapaJogo = "Decisão de Terceiro Lugar";
      break;
      case "FI":
        etapaJogo = "Final";
        break;
      default:
        etapaJogo = "não revelado"
        break;
} 

console.log(` ---Dados da compra--- 
Nome do cliente: ${nome}
Tipo do jogo: ${tipoJogo}
Etapa do jogo: ${etapaJogo}
Categoria:  ${categoria}
Quantidade de Ingressos: ${quant} 
---Valores--- 
Valor do ingresso:  R$ ${precoUnitario}
Valor total:  R$ ${precoUnitario * quant}`)