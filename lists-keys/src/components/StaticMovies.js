import { Component } from 'react'
import { basicMoviesFromApi } from './../fakeAPI'
import MovieCard from './MovieCard'


class StaticMovies extends Component {

    constructor() {
        super()
        this.state = {
            movies: basicMoviesFromApi
        }
    }


    render() {
        return (
            <section>
                <h3>Lista de películas estática</h3>
                {
                    this.state.movies.map(elm => <MovieCard key={elm.id} title={elm.title} director={elm.director} />)
                }
            </section>
        )
    }
}


export default StaticMovies