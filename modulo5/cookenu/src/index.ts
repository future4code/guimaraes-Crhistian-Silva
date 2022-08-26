import { app } from "./app"
import { recipeRouter } from "./routes/recipeRouter";
import { userRouter } from './routes/userRouter';

//1
app.use("/user", userRouter)

//2
app.use("/recipe", recipeRouter)







