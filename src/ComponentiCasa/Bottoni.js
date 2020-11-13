import React, { Component } from 'react'

export class Bottoni extends Component {


    
    render() {
        return (
            <div className="bottone">
              <button onClick={this.props.apriPorta}>Apri Porta</button>
              <button onClick={this.props.sfondoCambia} >Cambia Sfondo</button>  
            </div>
        )
    }
}

export default Bottoni
