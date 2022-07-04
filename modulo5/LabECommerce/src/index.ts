import app from "./app";
import { postUser } from "./endpoints/postUser";
import { getUsers } from "./endpoints/getUsers";
import { postProduct } from "./endpoints/postProduct";

//1. CRIAR USÁRIO
app.post("/users", postUser)

//2. BUSCAR USÁRIOS

app.get("/users", getUsers)

//3. CRIAR PRODUTO
app.post("/products", postProduct)