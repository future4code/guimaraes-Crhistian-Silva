import { getAllUsers } from './endpoints/getAllUsers';
import app from "./app";
import { getUserByType } from './endpoints/getUserByType';
import { getUsersByPages } from './endpoints/getUsersByPages';
//EXERCICIO 1 
//a)  
app.get("/users", getAllUsers)


//COLOQUEI AQUI PQ NÃO FUNCIONAVA LÁ EMBAIXO...GOSTARIA QUE ME TIRASSEM ESSA DÚVIDA DE PORQUE..SEI QUE TEM RELAÇÃO COM OS PARAMS, MAS NAO LEMBRO
//EXERCICIO 4 === COLOQUEI ORDENAÇÃO POR ID 
app.get("/users/page", getUsersByPages)

//b) 

app.get("/users/:type", getUserByType)


//EXERCICIO 2

app.get("/users", getAllUsers ) //ou Type, estou usando a mesma função)

//EXERCICIO 3

app.get("/users", getAllUsers ) //ou Type, estou usando a mesma função implantando a ordenação)


