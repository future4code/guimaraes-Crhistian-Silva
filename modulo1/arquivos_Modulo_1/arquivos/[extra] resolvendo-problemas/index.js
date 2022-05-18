function selecionarPessoas(pessoas) {

   const anoCorrente = new Date().getFullYear() 

   console.log(anoCorrente)

   return pessoas.filter(pessoa => {
      return (
         pessoa.nacionalidade === "brasileira" &&
         !pessoa.tomouVacina &&
         anoCorrente - pessoa.anoDeNascimento >= 60
      )
   })

   // const resultadoFinal = []

   // for (let pessoa of pessoas) {
   //    if (
   //       pessoa.nacionalidade === "brasileira" &&
   //       !pessoa.tomouVacina &&
   //       2021 - pessoa.anoDeNascimento >= 60
   //    ) {
   //       resultadoFinal.push(pessoa)
   //    }
   // }

   // return resultadoFinal
}

const pessoasDeBananinhaCity = [
   {
      "nome": "Benevides Castro",
      "anoDeNascimento": 1950,
      "nacionalidade": "brasileira",
      "tomouVacina": false
   },
   {
      "nome": "Clara Ruiz",
      "anoDeNascimento": 1993,
      "nacionalidade": "colombiana",
      "tomouVacina": true
   },
   {
      "nome": "Maria Aparecida Luz",
      "anoDeNascimento": 1961,
      "nacionalidade": "brasileira",
      "tomouVacina": false
   }
]

console.log(
   selecionarPessoas(pessoasDeBananinhaCity)
)