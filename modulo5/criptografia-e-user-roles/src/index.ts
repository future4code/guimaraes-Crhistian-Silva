import app from "./controller/app"
import { userRouter } from "./controller/userRouter"


app.use('/user/', userRouter)

//Exercício 1
//a) com o uso da biblioteca uuid sim
