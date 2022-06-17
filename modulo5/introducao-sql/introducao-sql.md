USE `guimaraes-4211185-crhistian-silva`;
#EXERCICIO 1
CREATE TABLE Actor(
id VARCHAR(255) PRIMARY KEY, # cria um id com até 255 caracteres que será a chave primária
name VARCHAR(255) NOT NULL, # cria um nome com até 266 caracteres que não pode ser Null (vazio)
salary FLOAT NOT NULL,
birth_date DATE NOT NULL, # cria uma data de nascimento no formato DATE que não pode NULL(nula)
gender VARCHAR (6) NOT NULL # cria um genero de até 6 caracteres que também não pode NULL(nulo)
);
SHOW DATABASES; # MOSTRA A DATABASE USADA;
SHOW TABLES; # MOSTRA A TABELA o nome no caso
DESCRIBE Actor;# MOSTRA TODAS AS INFORMAÇÕES USADAS NA CRIAÇÃO DA TABELA 

#EXERCICIO 2;
INSERT INTO Actor(id, name, salary, birth_date, gender) VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

INSERT INTO Actor(id, name, salary, birth_date, gender) VALUES(
"002",
"Glória Pires",
1.200000,
"1963-08-23",
"female"
);

INSERT INTO Actor(id, name, salary, birth_date, gender) VALUES(
"002",
"Fausto Silva",
6.000000,
"1963-08-23",
"male"
); # Error Code: 1062. Acontece erro porque já existe alguém cadastrado com id "002" que é a chave primária, ela não pode se repetir

INSERT INTO Actor (id,name,salary, birth_date,gender)VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
); # Errod Code 1136. Acontece pois OS DADOS informados não correspondem as instruções informadas
INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
); ; # Error Code 1364. Falta na descrição o valor de "name" que foi informado na descrição como NOT NULL ou seja, não pode ser nulo

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
); #Error Code 1292. O formato da data de aniversário falta aspas;
 
 #Exercicio 3;
SELECT * FROM Actor; 
#a) ;
SELECT * FROM Actor WHERE gender = "female";
#b);
SELECT salary FROM Actor WHERE name = "Tony Ramos";
#c);
SELECT * FROM Actor WHERE gender = "invalid"; #retorna as descrições da tabela onde consta a informação como NULL, o porquee nao sei;
#d);
SELECT id, name, salary FROM Actor WHERE salary < 500000;
#e);
SELECT id, nome from Actor WHERE id = "002"; #Error Code: 1054. a Coluna nome é desconhecida, deve ser usado "SELECT id, name from Actor WHERE id = "002"";

#EXERCICIO 4;
#OK;
#DESAFIOS;
#EXERCICIO 5;
SELECT * FROM Actor WHERE(name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
#a) a query busca todas as informações dos atores quais nomes começam com as letras a ou J e tem salários maiores que 300.000 deixando o resto que não esteja entre essas condições de fora;
#b);
SELECT * FROM Actor WHERE(name NOT LIKE "A%") AND salary > 350000;
#c);
SELECT * FROM Actor WHERE(name LIKE "%G%" OR "%g%");
#d);
SELECT * FROM Actor WHERE( name LIKE "%a%" OR "%A%" OR "%g%" OR "%G%") AND salary BETWEEN 350000 AND 900000;

#EXERCICIO 6;
CREATE TABLE Movies (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL, 
release_date DATE NOT NULL,
rating NUMERIC NOT NULL
);
 #a) #TEXT não tem um limite específico de tamanho além do máximo do banco de dados. Ele é armazenado na área específica já que a expectativa é que ele será grande;
#b);

describe Movies;

INSERT INTO Movies(id, title, synopsis, release_date, rating)VALUES(
"001",
"Se eu fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
),(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
),
(
"003",    
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2012-11-02",
8
),(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

#Exercício 7;
#a);
SELECT id, title, rating FROM Movies WHERE id = "002";
#b);
SELECT * FROM Movies WHERE title="Deus é Brasileiro";
#c);
SELECT id,title,synopsis FROM Movies WHERE rating > 7 ;

#Exercício 7;
#a);
SELECT * FROM Movies WHERE(title LIKE "%vida%");
#b);
SELECT * FROM Movies WHERE( title OR synopsis LIKE "%vida%");
#c);
SELECT * FROM Movies WHERE release_date < "2022-06-14";
#d);
SELECT * FROM Movies  WHERE( title OR synopsis LIKE "%vida%") AND rating > 7; 