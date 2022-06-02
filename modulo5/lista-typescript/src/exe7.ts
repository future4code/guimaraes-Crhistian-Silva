const ajustaPreco = (preco: number): string => {
    const valorAjustado: string = preco.toFixed(2).replace(".", ",");
    return "R$ " + valorAjustado;
  };
  
  type produto = {
    nome: string;
    quantidade: number;
    valorUnitario: number | string;
  };
  
  const estoque: produto[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
  ];
  
  const funcao7 = (lista: produto[]): produto[] => {
    lista.forEach(
      (item) => (item.valorUnitario = ajustaPreco(item.valorUnitario as number))
    );
  
    const listaOrdernada: produto[] = lista.sort(
      (a, b) => a.quantidade - b.quantidade
    );
  
    return listaOrdernada;
  };
  console.log("ex.7", funcao7(estoque));