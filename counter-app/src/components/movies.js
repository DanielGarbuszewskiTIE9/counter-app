import React, { Component } from "react";
import { getMovies } from './fake_movies'

class Movies extends Component{
    state={
        movies:getMovies()
    }

    render(){
        return(
            <table>
                <p>Show Movies</p>
                <tr>
                    <th>Nazwa</th>
                    <th>Rodzaj</th>
                    <th>Sprzedarzy</th>
                    <th>Ocena</th>
                </tr>
                {this.state.movies.map(movies => (
                    <tr>
                    <td>{movies.title}</td>
                    <td>{movies.genre.name}</td>
                    <td>{movies.numberInStock}</td>
                    <td>{movies.dailyRentalRate}</td>
                    </tr>
                ))}
            </table>
        )
    }
}

export default Movies
