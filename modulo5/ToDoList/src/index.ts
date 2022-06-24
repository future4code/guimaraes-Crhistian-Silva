import app from "./app";
import { postUser} from "./endpoints/postUser";
import { getUserById } from './endpoints/getUser';
import {editUserById} from "./endpoints/editUser"


//1 CRIA USÁRIO
app.post("/user", postUser)

//2 PEGA USUÁRIO PELO ID
app.get("/user/:id", getUserById)

//3 EDITAR USUÁRIO
app.put("/user/edit/:id", editUserById)


