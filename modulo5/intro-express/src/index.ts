import express from "express"
import cors from "cors"
import { Request, Response } from "express"
import { arrayPosts } from "./posts"

const app = express()
app.use(express.json())
app.use(cors())

//Exercicio 1//
app.get("/", (req: Request, res: Response) => {          
    res.status(200).send("Exercício 1 Funcionando")
})

//Exercicio 2//

type Person = {
    id:number,
    name: string,
    phone: number,
    email: string,
    website: string,
}

//Exercicio 3//
const arrayPeople:Person[] = [ {
    id:0,
    name: "carlos",
    phone: 45-99960-6009,
    email: "carlos@gmail.com",
    website: "http://carlosmaioral.com.br",
},
{id:1,
    name: "patricia",
    phone: 45-99960-6009,
    email: "pati_linda@gmail.com",
    website: "http:/patyzinha.com.br",
},
{id:2,
    name: "maria",
    phone: 45-99945-7009,
    email: "mariazinha@uol.com.br",
    website: "http://mariabonita.com",
},
{id:3,
    name: "joao",
    phone: 45-99925-6020,
    email: "joaogelado@gmail.com",
    website: "http://joaodasneves.com.br",
}
]
//Exercicio 4//
app.get("/users", (req: Request, res: Response) => { 
    try{
    const getUsers = arrayPeople.map((user)=>{
        return user
    })
    res.status(200).send(getUsers)

    }catch(error){
        res.status(400).end("Usuários não encontrados")
    }
})

//Exercicio 5//
type Posts = {
    id:number,
    title: string,
    body: string;
    userId: number
}

//Exercicio 6//
//melhor criar um arquivo separado e exportar

const newArrayPosts:Posts[] = arrayPosts

//Exercicio 7//

app.get("/posts", (req: Request, res: Response) => { 
    try{
        res.status(200).send(newArrayPosts)

    }catch(error){
        res.status(400).end("Posts não encontrados")
    }
})

//Exercicio 8//

app.get("/posts/:id", (req: Request, res: Response) => { 
    try{
        let userId = req.params.id

        let postList: {}[] = []
          for (let element of newArrayPosts) {
                if(element.userId === Number(userId)){
                    postList.push(element)
                }      
          }
    res.status(200).send(postList)

    }catch(error){
        res.status(400).end("Post não encontrado")
    }
})


//DESAFIOS
//Exercicio 9//

app.delete("/posts/:id", (req: Request, res: Response) => { 
    try{
        let postId = req.params.id

          for (let element of newArrayPosts) {
              let index = newArrayPosts.findIndex((post)=>{
                  post.id === Number(postId)})
                  if(index > -1){
                    newArrayPosts.splice(index, 1)
                  }           
          }
    res.status(200).send("Post deletado")

    }catch(error){
        res.status(400).end("Post não encontrado")
    }
})


//Exercicio 10//

app.delete("/users/:id", (req: Request, res: Response) => { 
    try{
        let userId = req.params.id

                  if(arrayPeople[0].id === Number(userId)){
                    arrayPeople.splice(1)
                  }

    res.status(200).send("Usuário deletado")

    }catch(error){
        res.status(400).end("Post não encontrado")
    }
})






app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
    });




