/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { 
    Container,
    Content,
    MovieCover,
    MovieDetail,
    TitleMovie,
    InfoMovie,
    Assessment,
    Synopsis,
    TextSynopsis, 
    PeopleMovieContainer,
    PeopleMovieContent,
    TitlePeople,
    InfoPeople,
    ContentMidia,
    CastTitle,
    CastContainer,
    CastCard,
    NameCast,
    NameCharacter,
    TrailerTitle,
    MovieTrailer,
    RecommendationsTitle,
    MovieRecommendationsContainer,
} from "./styleMovieDetails";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { CardMovie } from "../../components/cardMovie/CardMovie";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import { getYear,format } from "date-fns";

import 'react-circular-progressbar/dist/styles.css';
import ReactPlayer from 'react-player/youtube';

import imgNotFound from '../../assets/notfound.png';
import imgVideoNotFound from '../../assets/videonotfound.png';
import { getMoviesCredits, getMoviesDetailsData, getMoviesRecomendations, getMoviesReleaseDate } from "../../components/functions/getMovieData";

export function MovieDetails(props) {
    const { id }  = useParams();    
    const [movieDetails, setMovieDetails] = useState([]);
    const [movieCurrent, setMovieCurrent] = useState([]);
    const [movieRecommendations, setMovieRecommendations] = useState([]);
    const [releaseDate,setRealeaseDate] = useState({});
    const [castInfo, setCastInfo] = useState([]);
    const [crewInfo, setCrewInfo] = useState([]);
    
    useEffect(async () => {
        try {
            const result = await getMoviesDetailsData(id);
            setMovieDetails(result);

            const releaseMovie = await getMoviesReleaseDate(id)
            for(let dataObj of releaseMovie.results){
                if(dataObj.iso_3166_1 === "BR") {
                    setRealeaseDate(dataObj)
                    break
                }
            }
            
            const response = await getMoviesCredits(id)
            setCastInfo(response.cast)
        
            let filteredData = [];

            for(let dataObj of response.crew) {
                if (["Characters","Director","Writer"].includes(dataObj.job)) {
                    filteredData.push(dataObj);
                }
            }
            setCrewInfo(filteredData);

            const recomendations = await getMoviesRecomendations(id)
            setMovieRecommendations(recomendations.results)
        } catch (error) {
            console.log(error)
        }
            
    }, [movieCurrent]);
    
    const {title,poster_path,vote_average,release_date,runtime ,genres, videos} = movieDetails;

    const dateFormated = release_date ? format(new Date(release_date), "dd/MM/yyyy") : "";
    const year = release_date ? getYear(new Date(release_date)): "";
    const movieHour = runtime ? Math.floor(runtime/60) : "";
    const movieMin = runtime ? runtime % 60 : "";

    return (
        <Container>
            <Content>
            <MovieCover src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
            <MovieDetail>
                <TitleMovie>{title} ({year})</TitleMovie>
                <InfoMovie> 
                    {releaseDate && releaseDate.iso_3166_1 ? releaseDate.release_dates[0].certification : ""} anos 
                    * 
                    {dateFormated} *  (BR)  * 
                    {genres ? genres.map((genre, index) => (` ${genre.name}${index + 1 === genres.length ? " " : ", "}`)): ""}* 
                    {movieHour}h {movieMin}m
                </InfoMovie>
                <Assessment>
                    <div style={{ width: 65, height: 65 }}>
                        <CircularProgressbar 
                            value={vote_average / 100} 
                            maxValue={1} 
                            text={`${vote_average * 10}%`} 
                            styles={buildStyles({
                                pathColor: '#FFF',
                                textColor: '#14FF00',
                                trailColor: '#14FF00',
                                backgroundColor: '#14FF00',
                            })}
                        
                        />   
                    </div>
                    <p>Avaliação dos <br /> usuários</p>
                </Assessment>
            
                <Synopsis>Sinopse</Synopsis>
                <TextSynopsis>{movieDetails ? movieDetails.overview : "Não encontrado"}</TextSynopsis>
            
                    <PeopleMovieContainer>
                        {
                            crewInfo.map(crew => (
                                <PeopleMovieContent key={crew.id}>
                                    <TitlePeople>{crew.name}</TitlePeople>
                                    <InfoPeople>{crew.job}</InfoPeople>
                                </PeopleMovieContent>
                            ))
                        }

                    </PeopleMovieContainer>

            </MovieDetail> 
            </Content>
            <ContentMidia>
            <CastTitle>Elenco original</CastTitle>   
            <CastContainer>
                {
                    castInfo.map(cast => (
                        <CastCard key={cast.id}>
                        <img src={cast.profile_path === null ? imgNotFound : `https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.name} />
                        <NameCast>{cast.name}</NameCast>
                        <NameCharacter>{cast.character}</NameCharacter>
                        </CastCard>
                    ))
                }
            </CastContainer>
            <TrailerTitle>
                Trailer
            </TrailerTitle>

            <MovieTrailer>
                {videos && videos.results.length ? (
                    <ReactPlayer width='100%' height='100%' loading="lazy" url={`http://www.youtube.com/watch?v=${videos ? videos.results[0].key : ""}`} controls={true} />
                ) : (
                    <>
                        <img src={imgVideoNotFound} />
                    </>
                )}
            </MovieTrailer>

            <RecommendationsTitle>Recomendações</RecommendationsTitle>
            <MovieRecommendationsContainer>
               {
                    movieRecommendations.map(movie => (
                    <Link style={{textDecoration:'none'}} onClick={() => setMovieCurrent(movie.id)} key={movie.id} to={`/moviedetails/${movie.id}`}>
                        <CardMovie 
                            title={movie.title} 
                            imagePath={movie.poster_path} 
                            dateRelease={movie.release_date} 
                        >
                        </CardMovie>
                    </Link>
                    ))
               }
            </MovieRecommendationsContainer>
            </ContentMidia>
        </Container>
    )
}