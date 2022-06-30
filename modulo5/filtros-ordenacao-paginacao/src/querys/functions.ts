import connection from "../connection"

export const selectAllUsers = async ( sort:string, order:string):Promise<any>=> {
    const result = await connection("aula48_exercicio")
    .select("*")
    .orderBy(sort as string, order as string)

    return result
 }

export const selectUserByType = async (type:string):Promise<any>=> {
    const result = await connection("aula48_exercicio")
    .select("*")
    .where("type", "like" ,`%${type}%`)
 
    return result
 }

 export const selectUsersByPages = async (page:number):Promise<any>=> {
    console.log("page na funcao", page)
    const result = await connection("aula48_exercicio")
    .select("*")
    .limit(5)
    .orderBy("id")
    return result
 }
 