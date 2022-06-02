const funcao8 = (
    dataNascimento: string,
    dataDocumento: string
  ): boolean | string => {
    const dataAtualTimestamp: number = new Date().getTime();
    const [diaNasc, mesNasc, anoNasc] = dataNascimento.split("/");
    const [diaDoc, mesDoc, anoDoc] = dataDocumento.split("/");
    const anoNascTimestamp: number = new Date(
      `${anoNasc}-${mesNasc}-${diaNasc}T00:00:00`
    ).getTime();
    const dataDocTimestamp: number = new Date(
      `${anoDoc}-${mesDoc}-${diaDoc}T00:00:00`
    ).getTime();
    const idade: number = dataAtualTimestamp - anoNascTimestamp;
    const ultimaRenovacao: number = dataAtualTimestamp - dataDocTimestamp;
    const umAnoEmTimestamp: number = 31556926000;
  
    if (idade <= 20 * umAnoEmTimestamp) {
      return ultimaRenovacao >= 5 * umAnoEmTimestamp ? true : false;
    } else if (idade >= 20 * umAnoEmTimestamp && idade <= 50 * umAnoEmTimestamp) {
      return ultimaRenovacao >= 10 * umAnoEmTimestamp ? true : false;
    } else if (idade >= 50 * umAnoEmTimestamp) {
      return ultimaRenovacao >= 15 * umAnoEmTimestamp ? true : false;
    } else {
      return "algo deu errado";
    }
  };
  console.log("ex.8", funcao8("25/07/1993", "13/11/2001"));