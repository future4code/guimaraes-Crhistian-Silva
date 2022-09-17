import { app } from "./app"
import { modalityRouter } from "./routes/ModalityRouter"

//1
app.use("/competition", modalityRouter)


//2

app.use("/modalities", modalityRouter)







