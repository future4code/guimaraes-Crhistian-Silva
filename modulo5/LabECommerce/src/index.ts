import app from "./app";
import { postUser } from "./endpoints/postUser";
import { getUsers } from "./endpoints/getUsers";
import { postProduct } from "./endpoints/postProduct";
import { getProducts } from "./endpoints/getProducts";
import { postPurchases } from "./endpoints/postPurchases";
import { getUserPurchases } from "./endpoints/getUserPurchases";

//1. CRIAR USÁRIO
app.post("/users", postUser)

//2. BUSCAR USÁRIOS

app.get("/users", getUsers)

//3. CRIAR PRODUTO
app.post("/products", postProduct)

//4. BUSCAR PRODUTO
app.get("/products", getProducts)

//5. CRIAR REGISTRO DE COMPRA
app.post("/purchases", postPurchases)

//6. BURSCAR REGISTROS DE COMPRAS DE 1 USUÁRIO POR ID
app.get("/users/:userId/purchases", getUserPurchases)