import app from "./app";
import { getTaskById } from './endpoints/getTask';
import { postUser} from "./endpoints/postUser";
import { getUserById } from "./endpoints/getUser";
import {editUserById} from "./endpoints/editUser";
import {postTask} from "./endpoints/postTask";


//1. CRIAR USÁRIO
app.post("/user", postUser)

//2. PEGAR USUÁRIO PELO ID
app.get("/user/:id", getUserById)

//3. EDITAR USUÁRIO
app.put("/user/edit/:id", editUserById)

//4. CRIAR TAREFA
app.post("/task", postTask)

//5. Pegar tarefa pelo id
app.get("/task/:id", getTaskById)







