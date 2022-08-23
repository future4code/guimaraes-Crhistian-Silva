import { app } from "./app"
import { postRouter } from "./routes/postRouter";
import { userRouter } from './routes/userRouter';

//1
app.use("/user", userRouter)

//2
app.use("/posts", postRouter)







