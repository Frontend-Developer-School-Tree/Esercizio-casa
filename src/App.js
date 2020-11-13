import './App.css';

import React, {Component} from 'react'
import Tetto from './ComponentiCasa/Tetto';
import Facciata from './ComponentiCasa/Facciata';
import Bottoni from './ComponentiCasa/Bottoni';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       backgroundColor: 'rgb(177, 255, 255)',
       stato: true,
       colorePorta: 'crimson',
      statoPorta:false,
    }
  }
  
  handleColor = ()=>{
   console.log('pippo')
   // per cambiar stato dobbiamo usare setState
   this.setState({
     stato:!this.state.stato
   })
  }

  aprireLaPorta =()=>{
    this.setState({
        statoPorta:!this.state.statoPorta
    })
}

  render(){
      return (
      <div className="container" style={{backgroundColor: (this.state.stato) ?
                                                           this.state.backgroundColor :
                                                           'rgb(89,80,120)'}}>
        <Tetto />
        <Facciata colore={this.state.colorePorta} statoPorta={this.state.statoPorta}/>
        <Bottoni sfondoCambia={this.handleColor} apriPorta={this.aprireLaPorta}/>
        
      </div>
      
    );
  }
  
}

export default App;
