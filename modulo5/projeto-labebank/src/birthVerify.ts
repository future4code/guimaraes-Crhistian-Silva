/* 
* Função CacularIdade
* Função para calcular a idade de uma pessoa, tendo como base o dia de hoje
* @params data - String referente à data de nascimento da pessoa, no formato dd/mm/yyyy
* @return Retorna uma string com a idade da pessoa em anos.
*/
 export const birthVerify = (date:any) => {
	const today = new Date();
	const birthDate = new Date(convertDate(date.split("/")));

	let year = today.getFullYear() - birthDate.getFullYear()

	const month = today.getMonth() - birthDate.getMonth()

	if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
		year--
	}
	return year;
	
	function convertDate (dateArray:any){
		return dateArray[1] + "-" + dateArray[0] + dateArray[2]
	}

	function maior18 (){
		const data = document.getElementById("datepicker")

	}
	
}

console.log("funcao", calcularIdade(2000))

function calculaIdade(dataNasc){ 
	var dataAtual = new Date();
	var anoAtual = dataAtual.getFullYear();
	var anoNascParts = dataNasc.split('/');
	var diaNasc =anoNascParts[0];
	var mesNasc =anoNascParts[1];
	var anoNasc =anoNascParts[2];
	var idade = anoAtual - anoNasc;
	var mesAtual = dataAtual.getMonth() + 1; 
	//Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
	if(mesAtual < mesNasc){
	idade--; 
	} else {
	//Se estiver no mes do nascimento, verificar o dia
	if(mesAtual == mesNasc){ 
	if(new Date().getDate() < diaNasc ){ 
	//Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
	idade--; 
	}
	}
	} 
	return idade; 
   }
   console.log(calculaIdade('31/12/1970'));