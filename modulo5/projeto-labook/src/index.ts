import { app } from "./app"
import { postRouter } from "./routes/postRouter";
import { userRouter } from './routes/userRouter';

//1
app.use("/users", userRouter)

//2
app.use("/post", postRouter)

//3
app.use("/post/:id", postRouter)

//4
app.use("/users", userRouter )




