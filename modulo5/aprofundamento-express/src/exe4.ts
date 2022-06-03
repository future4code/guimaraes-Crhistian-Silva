import { Request, Response } from "express";
import { app } from "./index";
import { tasks } from "./exe3";

app.get('/tasks', (request: Request, response: Response) => {
    try {
       // recebendo o usuario que ta pedindo
       const userId = request.headers.authorization;
       // verifico se esse usuario existe
       const user = tasks.find((user) => user.userId === Number(userId));
       // se nao tiver usuario, erro
       if (!user) throw new Error('Usuário não encontrado, verifique os parâmetros');
       // se chegou aqui, é pq tem um usuario, ai pega as tarefas que estão concluídas

       let completed = tasks.filter((x)=>x.completed === true)

       response.status(200).send(completed);
    } catch (error: any) {
       response.end(error.message);
    }
 });