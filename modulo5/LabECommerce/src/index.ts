import app from "./app";
import { postUser } from "./endpoints/postUser";

//1. CRIAR USÁRIO
app.post("/users", postUser)
