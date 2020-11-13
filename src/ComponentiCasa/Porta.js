import React, { Component } from 'react'

export class Porta extends Component {
    


    render() {
        return (
            <div className="porta" style={{colorePorta: (this.state.statoPorta)
                                            ? this.state.colorePorta : 'white'
                                        }}>
                
            </div>
        )
    }
}

export default Porta
