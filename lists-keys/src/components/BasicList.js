import { Component } from 'react'

// Nominal import
import { drinksFromAPI } from './../fakeAPI'

class BasicList extends Component {

  constructor() {
    super()
    this.state = {
      drinks: drinksFromAPI
    }
  }

  render() {

    return (

      <section>

        <h2>Listado de bebidas básico</h2>

        {
          this.state.drinks.map((elm, idx) => <p key={idx}>La bebida es {elm}</p>)
        }

      </section>

    )
  }
}

export default BasicList