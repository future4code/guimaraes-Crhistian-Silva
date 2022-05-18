let bichos = Number(prompt("Quantos pets você tem ? "))

let arrayBichos = []

if(bichos === 0){
    console.log("Que pena! Você pode adotar um pet!")
}
else if(bichos > 0){
    while(arrayBichos.length < bichos){
        arrayBichos.push(prompt("Digite o nome deles, um por um"))
        console.log(arrayBichos[bichos])
    }
}

