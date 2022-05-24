import  countries from './countries.js'

const string = process.argv[2].toLowerCase()
const resultado = countries.filter(pais=> pais.name.toLowerCase().includes(string))
   console.table(resultado)
