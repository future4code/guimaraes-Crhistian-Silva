enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type film = {
    name: string;
    releaseDate: number;
    genre: GENERO;
    score?: number
}

const outputFilms = (name: string, year: number,  genre: GENERO, score?: number):film =>{
    if(score){
        return{
            name:name,
            releaseDate:year,
            genre:genre,
            score:score
        };
    }else{
            return{
                name:name,
                releaseDate:year,
                genre:genre,
            }
        }
    }

console.log("Exercicio 3", outputFilms("Duna", 2021, GENERO.ACAO))