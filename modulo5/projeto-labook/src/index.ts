import { app } from "./app"
import { postRouter } from "./routes/postRouter";
import { userRouter } from './routes/userRouter';

//1
app.use("/users", userRouter)

//2
app.use("/posts", postRouter)

//3
app.use("/posts/:id", postRouter)

//4
app.use("/users", userRouter )

//5
app.use("/users", userRouter )

//6
app.use("/posts", postRouter)

//7
app.use("/posts", postRouter)










