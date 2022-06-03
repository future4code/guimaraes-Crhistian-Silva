import { typeToDo } from './exe2';
import { Request, Response } from "express";
import { app } from "./index";
import { tasks } from "./exe3";
import { v4 as generateId } from 'uuid';

app.post('/tasks/create', (request: Request, response: Response) => {
    try {
       // pega o nome do usuario e busca ele nos usuarios
       const userId = request.headers.authorization;

       const user = tasks.find((user) => user.userId === Number(userId));
 
       if (!user) throw new Error('Usuario nao existe com esse ID');
       // passou  daqui, é pq o usuario existe
 
       const taskName = request.body
       console.log("novo nome", taskName)
       if (!taskName.title)
          throw new Error('É necessario informar um nome para a nova playlist');
       //passou daqui, é pq veio o nome da tarefa
 
       const newTask:typeToDo = {
        userId: Math.random(), 
        id: Math.random(),
        title: taskName.title,
        completed: false
       };
       tasks.push(newTask);
       response
          .status(201)
          .send(`A Tarefa ${newTask} foi criada com sucesso!`);
    } catch (error: any) {
       response.end(error.message);
    }
 });