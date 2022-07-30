import { app } from "./controller/app"
import { postRouter } from "./controller/routes/postRouter";
import { userRouter } from './controller/routes/userRouter';

app.use("/users", userRouter)

app.use("/post", postRouter)




