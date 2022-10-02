/* eslint-disable jsx-a11y/alt-text */
import {Card, TitleMovie, DateMovie} from './styleCard';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/esm/locale';
import imgNotFound from '../../assets/notfound.png';
export const CardMovie = (props) =>{
    return (
        <Card>
            {props.imagePath ? (
                <img src={`https://image.tmdb.org/t/p/original/${props.imagePath ? props.imagePath : ""}`} alt={props.title} />
            ) : (
                <img src={imgNotFound}  />
            )}
            <TitleMovie>{props.title? props.title : ""}</TitleMovie> 
            <DateMovie>
            {
             props.dateRelease ? format(
                  new Date(props.dateRelease),
                  "dd MMM yyyy",
                  {locale: ptBR}
              ) : ""
            }
            </DateMovie>
        </Card>
    )
}