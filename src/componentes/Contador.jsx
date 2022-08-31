import React from "react";
import '../stylesheets/Contador.css'

//tomamos el numero de click (dado por el usuario en la UI) como parametro de Contador

/*function Contador(props) {        ---> Formato general
  return (
    <div className='contador'>
      {props.numClicks}
    </div>
  )
}*/

//Componente de clase
class Contador extends React.Component {
  render() {
    return (
      <div className='contador'>
        {this.props.numClicks}
      </div>
    );
  }
}


//Desestructuracion
/*function Contador({ numClicks }) {
  return (
    <div className='contador'>
      {numClicks}
    </div>
  )
}
*/


export default Contador;