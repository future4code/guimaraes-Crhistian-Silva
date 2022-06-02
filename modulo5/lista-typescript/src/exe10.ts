//Aqui estou assumindo o valor do CPF chegando com todos digitos e apenas digitos
const verificaPrimeiroDigito = (digitos: string): boolean => {
    let multiplicador = 10,
      somatorio = 0;
    for (var _i = 0; _i < digitos.length - 2; multiplicador--, _i++) {
      var digito = Number(digitos.charAt(_i));
      somatorio += digito * multiplicador;
    }
    let modOnze = somatorio % 11;
    let resultado = 11 - modOnze;
    if (resultado >= 10) {
      resultado = 0;
    }
    return resultado === Number(digitos.charAt(9));
  };
  //Aqui estou assumindo o valor do CPF chegando com todos digitos e apenas digitos
  const verificaSegundoDigito = (digitos: string): boolean => {
    let multiplicador = 11,
      somatorio = 0;
    for (var _i = 0; _i < digitos.length - 1; multiplicador--, _i++) {
      var digito = Number(digitos.charAt(_i));
      somatorio += digito * multiplicador;
    }
    let modOnze = somatorio % 11;
    let resultado = 11 - modOnze;
    if (resultado >= 10) {
      resultado = 0;
    }
    return resultado === Number(digitos.charAt(10));
  };
  
  function mesmosDigitos(cpf: string) {
    var i = cpf.length;
    var char = cpf.charAt(0);
    while (i--) {
      if (cpf[i] !== char) {
        return false;
      }
    }
    return true;
  }
  
  const funcao10 = (cpf: string): boolean => {
    //Limpando . e - da string
    let cpfApenasNumeros = cpf.split(".").join("");
    cpfApenasNumeros = cpfApenasNumeros.replace("-", "");
    //Verificação se todos são os mesmos numeros
    if (!mesmosDigitos(cpfApenasNumeros)) {
      //Verificação dos digitos
      if (verificaPrimeiroDigito(cpfApenasNumeros)) {
        if (verificaSegundoDigito(cpfApenasNumeros)) {
          return true;
        }
      }
    }
    return false;
  };
  //Testes
   console.log("exercicio 10",funcao10("111.111.111-11"));//False
  console.log("exercicio 10",funcao10("145.382.206-20"));//True
  console.log("exercicio 10",funcao10("123.123.123-80"));//False
  