import React from "react";
import '../stylesheets/Boton.css'

//La clase (className) del button esta condicionada por el tipo de boton. los operadores ternarios permiten tomar desciciones en base a otro valor.
//linea 11: para asignar className, si esBotonClick verdadero, boton-click de lo contrario/false boton-reiniciar.
//linea 12 event listener: para decidir que va a pasar cuando se haga click en el button se asigna un event listener (onClick). La funcion se recibira como un props (parametro, manejarClick) y ocurrira cuando onClick sea llamado.
//recibimos 3 propr: el texto que se mostrara en el boton, si esBotonDeClick se marcara como boton-click o boton-reiniciar (con estilos distintos), y la funcion manejarClick que nos permitira manejar que ocurrira cuando se haga click en el boton asignado al event lisener (onClick).

//componente de clase
class Boton extends React.Component {
  render() {
    return (
      <button 
      className={ this.props.esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
      onClick={this.props.manejarClick}>
        {this.props.texto}
      </button>
    );
  }
}


/*function Boton({ texto, esBotonDeClick, manejarClick }) {  //entre {} son las props (parametro) que estamos pasando. Esto es la sintaxis de Desestructuracion.
  return (
    <button 
    className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
    onClick={manejarClick}>
      {texto}
    </button>
  );
}
*/

export default Boton;
//un elemento del archivo es exportado nada mas