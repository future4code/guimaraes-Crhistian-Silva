import { Link } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "../../global/context/moviesContext";
import { CardMovie } from "../../components/cardMovie/CardMovie";
import { GenresFilter } from "../genresFilter/GenresFilter";
import ReactPaginate from "react-paginate";
import { Spinner } from "../../components/spinner/Spinner"
import { Container, Content, StyledPaginateContainer } from "./styleHome";
export const Home = () => {
    const { movies, filteredMovies, setPage, loading, error } = useContext(MoviesContext);

    const filterMovies = filteredMovies && filteredMovies.map(movie => (
        <Link style={{ textDecoration: "none" }} key={movie.id} to={`/moviedetails/${movie.id}`}>
            <CardMovie
                title={movie.title}
                imagePath={movie.poster_path}
                dateRelease={movie.release_date}
            />
        </Link>
    ))
    const moviesMap = movies.map(movie => (
        <Link style={{ textDecoration: "none" }} key={movie.id} to={`/moviedetails/${movie.id}`}>
            <CardMovie
                title={movie.title}
                imagePath={movie.poster_path}
                dateRelease={movie.release_date}
            >
            </CardMovie>
        </Link>
    ))
    return (
        <>
            <GenresFilter />
            <Container>
                {loading && <Spinner />}
                <Content>
                    {!loading && error && <h1>Houve Um Erro na Requisição</h1>}
                    {!loading && filteredMovies && filteredMovies.length > 0 ? filterMovies : moviesMap}
                </Content>
                {
                    filteredMovies.length > 0 ? (
                        <></>
                    ) : (
                        <StyledPaginateContainer>
                            <ReactPaginate
                                previousLabel="<"
                                nextLabel=">"
                                breakLabel="..."
                                breakClassName="break-me"
                                pageCount={18}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={pagination => {
                                    setPage(pagination.selected + 1)
                                }}
                                containerClassName="pagination"
                                activeClassName="active"
                            />
                        </StyledPaginateContainer>
                    )
                }
            </Container>
        </>
    )
}