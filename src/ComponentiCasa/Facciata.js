import React, { Component } from 'react'
import Finestre from './Finestre'
import Porta from './Porta'

export class Facciata extends Component {

    render() {
        return (
            <div className="facciata">
                <Porta colore={this.props.colore} statoPorta={this.props.statoPorta}/>
                <Finestre />
            </div>
        )
    }
}

export default Facciata
