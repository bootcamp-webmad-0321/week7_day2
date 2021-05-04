import './MovieCard.css'

const MovieCard = ({ title, director }) => {
    return (
        <article className="movie-card">
            <h4>{title}</h4>
            <hr />
            <p>Director: {director}</p>
        </article>
    )
}

export default MovieCard