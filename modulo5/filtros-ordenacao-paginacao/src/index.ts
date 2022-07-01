import { getAllUsers } from './endpoints/getAllUsers';
import app from "./app";
import { getUserByType } from './endpoints/getUserByType';
import { getUsersByPages } from './endpoints/getUsersByPages';
import { getUserAllfilters } from './endpoints/getUserAllfilters';

//EXERCICIO 3 === COLOQUEI ORDENAÇÃO POR ID 

//COLOQUEI AQUI PQ NÃO FUNCIONAVA LÁ EMBAIXO...GOSTARIA QUE ME TIRASSEM ESSA DÚVIDA DE PORQUE..SEI QUE TEM RELAÇÃO COM OS PARAMS, MAS NAO LEMBRO
app.get("/users/page", getUsersByPages) //ou Type, estou usando a mesma função implantando a ordenação)

//EXERCICIO 1 
//a)  
app.get("/users", getAllUsers)

//b) 

app.get("/users/:type", getUserByType)


//EXERCICIO 2

app.get("/users", getAllUsers ) //ou Type, estou usando a mesma função)

//EXERCICIO 4
//EXERCICIO BUGOU E NAO FOI PRA FRENTE NEM COM O AUXILIO DO PLANTAO //
app.get("/filters/users", getUserAllfilters )









