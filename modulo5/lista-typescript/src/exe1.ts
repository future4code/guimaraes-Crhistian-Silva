
const printText = (name:string, date: string):string =>{
    
    let newDate:string[] = date.split('/')

    let day = newDate[0]
    let month = newDate[1]
    let year = newDate[2]

    return`Olá me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}`
} 
console.log(printText('crhistian', '19/06/1983'))