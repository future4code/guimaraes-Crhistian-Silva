//Exercicio 3
//a)

type Post = 
  {
    autor: string;
    texto: string;
  }


const posts: Post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver",
      },
      {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!",
      },
      {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!",
      },
      {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!",
      },
      {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!",
      },
];


//b)

 function buscarPostsPorAutor(posts:Post[], autorInformado:string):Post[]{
    return posts.filter((post) => {
        return post.autor === autorInformado
      }
    )
  }
 
  console.log(buscarPostsPorAutor(posts, 'Lord Voldemort'))