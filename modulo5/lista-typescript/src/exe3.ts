type film = {
    name: string;
    releaseDate: number;
    genre: GENERO.ACAO;
    score: number
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


const outputFilms = (name: string,releaseDate: number,  genre: GENERO.ACAO, score?: number):film =>{


    }
    