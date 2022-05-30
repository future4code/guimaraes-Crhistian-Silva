/* UNION TYPE */

// let nome: string | number // OU
// nome = "Tayanne"
// nome = undefined
// nome = 982

/* TYPE ALIASES */
// const astrodev: {name: string, age: number} = {
//    name: "astrodev",
//    age: 27
// } // repetiçao denecessaria

// type Person = {
//    name: string,
//    age: number
// }

// const astradev: Person = {
//    name: "Tayanne",
//    age: 27
// }

/* TYPE + UNION */
// type BirthDate = number | string | undefined

// function user(name: string, birthDate: BirthDate) {
//    console.log(`${name}, ${birthDate}`)
// }

// user("Tayanne", undefined)

/* INTERSECTION TYPE */
// type User = {
//    name: string;
//    age: number;
// };

// type Account = {
//    userName: string;
//    pass: string;
// };

// type UserInfo = User & Account

// const user: UserInfo = {
//    name: "Tayanne",
//    age: 27,
//    userName: "tayh",
//    pass: "123"
// }


/* TYPE INFERENCE */

// let nome = "Tayanne"
// let idade

// nome = 56
// idade = "Tayanne"

/* ENUM */
// enum LabeTurmas {
//    GEBRU = "Timit Gebru",
//    GUIMARAES = "Guimaraes",
//    JOY = "Joy"
// }

// const instrutores = {
//    nome: "Tayanne",
//    turma: LabeTurmas.GEBRU
// }

