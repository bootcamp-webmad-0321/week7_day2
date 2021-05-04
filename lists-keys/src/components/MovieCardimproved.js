import './MovieCardImproved.css'

const MovieCardImproved = ({ title, director, hasOscar, rating, deleteOneMovie }) => {
    return (
        <article className="movie-card-improved">
            <h4>{title}</h4>
            <hr />
            <p>Director: {director} | Puntuación {rating} | {hasOscar ? 'Tuvo Oscar' : 'No tuvo Oscar'}</p>
            <button onClick={deleteOneMovie}>Eliminar película</button>
        </article>
    )
}

export default MovieCardImproved