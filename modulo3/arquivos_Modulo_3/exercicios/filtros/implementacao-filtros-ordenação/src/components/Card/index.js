import { CardContainer, CardFooter, CardContent } from "./style";

export function Card(props) {
   return <CardContainer>
      <h2 title={props.job.title}>
         &#127919; <u >{props.job.title} </u>
      </h2>
      <CardContent
         title={props.job.description}>
         {props.job.description}
      </CardContent>
      <CardFooter>
         <span>&#128176; R$ {props.job.price.toFixed(2).replace(".", ",")}</span>
         <span>&#8987; {props.job.dueDate.slice(0, 10)} </span>
      </CardFooter>
   </CardContainer>
}