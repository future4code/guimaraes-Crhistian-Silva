USE `guimaraes-4211185-crhistian-silva`;

SET SQL_SAFE_UPDATES = 0;

DESCRIBE Rating;

SELECT * FROM Movies;
SELECT * FROM Actor;

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

#EXERCICIO 1

#a); uma chave que faz uma coluna da nova tabela criada se relacionar com uma outra coluna de uma tabela já existente;

#b);
INSERT INTO Rating(id, comment, rate, movie_id) VALUES(
"001",
"Uma comédia de razoável para bom",
6.5,
"001"
),
(
"002",
"Filme razoável",
5,
"003"
),
(
"003",
"Um ótimo filme, com uma bela interpretação por parte de Antônio Fagundes",
8,
"004"
),
(
"004",
"Filme razoável, chega a dar sono em algumas partes",
6.5,
"0.34022397310533825"
);
#c); 
INSERT INTO Rating(id, comment, rate, movie_id)VALUES(
"005",
"ótimo filme",
9,
"007"
);		
# não existe a possibilidade de adicionar ou atualizar algum dado na tabela rating sem que o id seja correspondente a um id valido da tabela qual a chave estrangeira foi vinculada
#d);
ALTER TABLE Movies DROP COLUMN rating;
#e);
DELETE FROM Movies WHERE id="001"; #não é possível apagar um filme que tenha uma coluna atrelada como chave estrangeira em outra tabela;

#EXERCICIO 2

CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
#a) tabela que representa os ids dos filmes e idos dos atores para relacionar qual ator fez qual filme

#b)
INSERT INTO MovieCast(movie_id, actor_id)VALUES(
"001",
"001"
),
(
"001",
"002"
)
,
("004",
"004"
)
,
("004",
"007"
)
,
("003",
"005"
)
;
#c)
INSERT INTO MovieCast(movie_id, actor_id)VALUES(
"005",
"001"); 
#não existe a possibilidade de criar uma relação se algum dos ids forem inexistentes nas tabelas

#d)
DELETE FROM Actor WHERE id="001";
#não é possível apagar um filme que tenha uma coluna atrelada como chave estrangeira em outra tabela;

#EXERCICIO 3
SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
#a); ela junta as duas tabelas onde as chaves estrangeiras estejam disponibilizadas nas duas tabelas através do On 
#b) ;
SELECT Movies.id as ID_MOVIE, Movies.title as TITLE_MOVIE, Rating.rate as SCORE FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

#DESAFIOS
#EXERCICIO 4
#a)
SELECT Movies.id as ID_MOVIE, Movies.title, Rating.rate as SCORE_MOVIE, Rating.comment as AVALIATIONS FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id;

#b)
SELECT  Movies.id as ID_MOVIE, Movies.title, MovieCast.actor_id as ID_ACTOR FROM Movies
INNER JOIN MovieCast ON Movies.id = MovieCast.movie_id;

#c)
SELECT AVG(Rating.rate) FROM Movies
LEFT JOIN Rating ON Rating.movie_id = Movies.id
GROUP BY(Movies.id);

#EXERCICIO 5

SELECT * FROM Movies 
LEFT JOIN MovieCast  ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
#a) nem ideia 

#b) 
SELECT Movies.id as ID_MOVIE, Movies.title as TITLE_MOVIE, Actor.id as ID_ACTOR, Actor.name as NAME_ACTOR FROM Movies 
LEFT JOIN MovieCast  ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;

#c)

#d)
SELECT Movies.id as ID_MOVIE, Movies.title as TITLE_MOVIE, Actor.id as ID_Actor, Actor.name as NAME_ACTOR, Rating.rate, Rating.Comment FROM Movies
LEFT JOIN Rating ON Rating.movie_id = Movies.id
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;

#EXERCICIO 6

#TENTEI INICIAR O DESAFIO 6 MAS NAO SEI SE É ESSA A LÓGICA 

CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    best_Movie VARCHAR(255) NOT NULL,
    best_Director VARCHAR(255) NOT NULL,
    date_Win DATE NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

