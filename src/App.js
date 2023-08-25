import { Component } from 'react';
import Productos from './components/Productos.js';

class App extends Component {

  state = {
    productos : [
      { name : 'Tomate', price : '1500',img :'/productos/3.3tomate.jpg'},
      { name : 'Arbejas', price : '2500',img :'/productos/3.1arbejas.jpg'},
      { name : 'Lechuga', price : '500',img :'/productos/3.2lechuga.jpg'},
    ]
  }

  render (){
    return (
      <div>
        <Productos
         agregarAlCarro = {() => console.log('no hace nada')} 
         productos = { this.state.productos}
        />        
      </div>
    )
  }

}
export default App;