USE `guimaraes-4211185-crhistian-silva`;

SET SQL_SAFE_UPDATES = 0;

#Exercício 1
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
#a)ALTER TABLE Actor DROP COLUMN salary; deleta a coluna salary da tabela Actor
#b) ALTER TABLE Actor MODIFY gender VARCHAR(6); altera a coluna gender, permitindo a ela ser vazia quando for preenchida 
#c);
ALTER TABLE Actor MODIFY gender VARCHAR(100);

#Exercício 2
#a);
UPDATE Actor SET name = "Suzana Vieira", birth_date = "1942-08-23" WHERE id = "003";
#b); 
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
#c);
UPDATE Actor SET name = "Paola Oliveira", birth_date = "1982-04-14", salary="500000", gender= "female", favorite_ice_cream_flavor="côco" WHERE id = "005";
#d);
UPDATE Actor SET name = "Braddock" where id=285; #não apareceu erro nenhum, apenas que não afetou nenhuma coluna da tabela

#Exercício 3
#a);
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
#b);
DELETE FROM Actor WHERE gender="male" AND salary > 1000000;

#Exercício 4
#a);
SELECT MAX(salary) FROM Actor ;
#b);
SELECT MIN(salary) FROM Actor WHERE gender="female";
#c);
SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

#Exercício 5
#a)
SELECT COUNT(*) gender FROM Actor GROUP BY gender; #ela conta quantos atores de cada sexo existem;
#b)
SELECT id, name FROM Actor ORDER BY name DESC;
#c)
SELECT * FROM Actor ORDER BY salary ASC; #ou SELECT * FROM Actor ORDER BY salary;

#d)
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
#e)
SELECT AVG(salary) FROM Actor GROUP BY gender;

#Exercício 6
#a)
ALTER TABLE Movies ADD playing_limit_date DATE;
#b)
ALTER TABLE Movies MODIFY rating FLOAT;
#c)
UPDATE Movies SET playing_limit_date="2006-07-01"  WHERE id="001";
UPDATE Movies SET playing_limit_date="2022-08-25"  WHERE id="004";
#d)
DELETE FROM Movies WHERE id="002";
UPDATE Movies SET synopsis="nova sinopse teste deletada"  WHERE id="002"; #não da erro,mas não afeta nada na tabela 

#Exercício 7
#a) 
SELECT COUNT(*) FROM Movies WHERE rating > 7.5;
#b)
SELECT AVG(rating) FROM Movies;
#c)
SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();
#d)
SELECT COUNT(*) FROM Movies WHERE release_date > CURDATE();
#e)
SELECT MAX(rating) FROM Movies;
#f)
SELECT MIN(rating) FROM Movies;

#Exercício 8
#a) 
SELECT * FROM Movies ORDER BY title;
#b)
SELECT * FROM Movies ORDER BY title DESC LIMIT 5;
#c)
SELECT * FROM Movies ORDER BY release_date DESC LIMIT 3;
#d) 
SELECT * FROM Movies ORDER BY rating DESC LIMIT 3;

# Essa DICA que está no notion resolvi como acima, colocando a data de lançamento por ordem descendente

a
SELECT * FROM Movies 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
