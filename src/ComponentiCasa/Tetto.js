import React, { Component } from 'react'
import Camino from './Camino'
import Sottotetto from './Sottotetto'

export class Tetto extends Component {
    render() {
        return (
            <div className="tetto">
               <div>
                   <div className="tettoiaDx"></div>
                   <div className="tettoiaSx"></div>
                  <Camino />
                   <Sottotetto />
               </div> 
            </div>
        )
    }
}

export default Tetto
