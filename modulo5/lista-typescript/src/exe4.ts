enum Setor{
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Colaborators = {
    nome: string,
    salário: number,
    setor: Setor,
    presencial: boolean
}


const arrayColaborator: Colaborators[] = [
	{ nome: "Marcos", salário: 2500, setor: Setor.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: Setor.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Setor.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Setor.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Setor.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Setor.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Setor.MARKETING, presencial: true }
]


    const filterRestaurant = (array:Colaborators[]):Colaborators[] =>{


        const updatedList = array.filter((cat) => Setor.MARKETING === cat)
        return updatedList 

    }


    type AmostraDeDados2 = {
        dados: Colaborators[],
        filterRestaurant: (Colaborators[]) => Colaborators
    }
    
        console.log('funcao', filterRestaurant(arrayColaborator, "marketing"))