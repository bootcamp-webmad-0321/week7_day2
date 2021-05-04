import { Component } from 'react'
import { complexMoviesFromApi } from './../fakeAPI'
import MovieCardImproved from './MovieCardimproved'

import './DynamicMoviesList.css'

class DynamicMovies extends Component {

    constructor() {
        super()
        this.state = {
            movies: complexMoviesFromApi,
            showOscarAwarded: false
        }
    }

    deleteMovie(movieId) {
        this.setState({
            movies: this.state.movies.filter(elm => elm._id !== movieId)
        })
    }

    toggleOscarMovies() {
        this.setState({ showOscarAwarded: !this.state.showOscarAwarded })
    }

    render() {

        const filteredMovies = this.state.movies.filter(elm => elm.hasOscar === this.state.showOscarAwarded)

        return (

            <section className="dynamic-movies">

                <h3>Listado dinámico de películas</h3>

                <button onClick={() => this.toggleOscarMovies()}>{this.state.showOscarAwarded ? 'Mostrar películas sin oscar' : 'Mostrar películas con oscar'}</button>

                {
                    filteredMovies.map(elm => <MovieCardImproved key={elm._id} deleteOneMovie={() => this.deleteMovie(elm._id)} title={elm.title} director={elm.director} hasOscar={elm.hasOscar} rating={elm.rating} />)
                }

            </section>
        )
    }
}

export default DynamicMovies
