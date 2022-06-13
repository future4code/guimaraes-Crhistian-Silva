import express, {Request, Response } from "express";
import cors from "cors"
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());


//teste de buscar todos os Afazer

app.get("/alltasks", (req:Request, res:Response) => {          
  res.send(tasks)
})
//--------------------------------------------------------------------


//Exercicio 1
app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})


//Exercicio 2
export type typeToDo ={
  userId: number, 
  id: number,
  title: string,
  completed: boolean
}

//Exercicio 3
 const tasks:typeToDo[]  = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "quo adipisci enim quam ut ab",
    "completed": true


  },
  {
    "userId": 2,
    "id": 1,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 2,
    "id": 2,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 2,
    "id": 3,
    "title": "quo adipisci enim quam ut ab",
    "completed": true

  }
]

//Exercicio 4

app.get("/tasks/true", (request: Request, response: Response) => {
  try {
     // recebendo o usuario que ta pedindo
     const userId = request.headers.authorization;
     // verifico se esse usuario existe
     const user = tasks.find((user) => user.userId === Number(userId));
     // se nao tiver usuario, erro
     if (!user) throw new Error("Usuário não encontrado, verifique os parâmetros");
     // se chegou aqui, é pq tem um usuario, ai pega as tarefas que estão concluídas

     let completed = tasks.filter((x)=>x.completed === true)

     response.status(200).send(completed);
  } catch (error: any) {
     response.end(error.message);
  }
});

//Exercicio 5
app.post("/tasks/create", (request: Request, response: Response) => {
  try {
     // pega o nome do usuario e busca ele nos usuarios
     const userId = request.headers.authorization;

     const user = tasks.find((user) => user.userId === Number(userId));

     if (!user) throw new Error("Usuario nao existe com esse ID");
     // passou  daqui, é pq o usuario existe

     const taskName = request.body
    
     if (!taskName.title)
        throw new Error("É necessario informar um nome para a nova playlist");
     //passou daqui, é pq veio o nome da tarefa

     const newTask:typeToDo = {
      userId: Math.random(), 
      id: Math.random(),
      title: taskName.title,
      completed: false
     };

     console.log("novo body", newTask)
     tasks.push(newTask);
     response
        .status(201)
        .send(tasks);
  } catch (error: any) {
     response.end(error.message);
  }
});

//Exercicio 6

app.put("/tasks/modify", (request: Request, response: Response) => {
  try {
     // pega o nome do usuario e busca ele nos usuarios
     const userId = request.headers.authorization;

     const user = tasks.find((user) => user.userId === Number(userId));

     if (!user) throw new Error("Usuario nao existe com esse ID");
     // passou  daqui, é pq o usuario existe
 
     const taskId = Number(request.query.id)

     const id = tasks.find((task)=> task.id === Number(taskId))

     if (!id)
        throw new Error("É necessario informar um id para modificar as tarefas");
     //passou daqui, é pq veio o id da tarefa

     if(id.id === taskId){
      tasks.forEach(element => {
        element.completed = !element.completed  
       });
     }
     response.status(201).send(tasks);
  } catch (error: any) {
     response.end(error.message);
  }
});

//Exercicio 7

app.delete('/tasks/:id',(request: Request, response:Response) => {
  try{
     // pega o nome do usuario e busca ele nos usuarios
     const userId = request.headers.authorization;

     const user = tasks.find((user) => user.userId === Number(userId));

     if (!user) throw new Error("Usuario nao existe com esse ID");
     // passou  daqui, é pq o usuario existe
 
     const taskId = Number(request.params.id)

     const id = tasks.find((task)=> task.id === Number(taskId))

     if (!id)
        throw new Error("É necessario informar um id para modificar as tarefas");
     //passou daqui, é pq veio o id da tarefa
      for (let i = 0; i < tasks.length; i++) {
        const newTasks = tasks.splice(i, 1); 
        console.log("novo array", newTasks)
        return newTasks 
      }

 response.status(201).send("ok");
  }
  catch(error:any){
    response.end(error.message)
  }
})


//Nao sei se está correto....


//Exercicio 8

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server running (Y) http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;