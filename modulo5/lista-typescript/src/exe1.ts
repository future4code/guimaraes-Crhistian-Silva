
const printText = (name:string, date: string):string =>{
    
    let newDate:string[] = date.split('/')

    let day = newDate[0]
    let month = newDate[1]
    let year = newDate[2]

    return`Olá me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}`
} 
console.log(printText('crhistian', '19/06/1983'))


//outro método 

const funcao1 = (nome: string, dataNascimento: string): string => {
    const [dia, mes, ano] = dataNascimento.split("/");
    const frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
    return frase;
  };
   console.log("ex.1", funcao1("Roberval", "23/01/2000"))