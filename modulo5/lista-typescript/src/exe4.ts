enum SETORES{
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Colaborators = {
    nome: string,
    salário: number,
    setor: SETORES,
    presencial: boolean
}


const arrayColaborator: Colaborators[] = [
	{ nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETORES.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETORES.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETORES.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETORES.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETORES.MARKETING, presencial: true }
]


    const filterRestaurant = (array:Colaborators[]):Colaborators[] =>{

        const updatedList:Colaborators[] = array.filter((colaborator) =>{
            return colaborator.setor === SETORES.MARKETING && colaborator.presencial
        });
        return updatedList

    }
    console.log("ex.4", filterRestaurant(arrayColaborator));
