import { Component } from 'react';
import Producto from './Producto';
class Productos extends Component {
    render()
    {
     const { productos,agregaralcarro} = this.props

     return (
        <div>
            {productos.map(producto =>
                <Producto
                   agregaralcarro={agregaralcarro}
                   key = {producto.name}
                   producto = {producto}
                /> )}
        </div>
     )

    }
}
export default Productos