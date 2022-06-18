import { app } from './../index';
import { success, error } from './../constants/messages';
import { BASE_URL } from './../constants/url';
import { Request, Response } from "express";

console.log("deu tudo certo")

app.get("/", (req: Request, res: Response)=>res.send("deu tudo certo"));

app.post("/create", async (req: Request, res: Response)=>{
    try{
        const body = {
            "name": "Astro Dev",
            "nickname": "astrodev",
            "email": "astro@dev.com"
        }
  
       res.status(200).send({chaveDoRetorno: success});
    }catch(error){
       //deu tudo errado
       res.status(400).send({chaveDoErro: error});
    }
 });