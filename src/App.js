import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
//la imagen fcc-logo usaremos una sentencia import
import fccLogo from './imagenes/colaGato.png';
import React from 'react';

//App renderiza el logo (className=''fcc-logo.contenedor'')
//App mostrara o renderizara nuestros botones del contador (className='contenedor-conta').
//Los botones tambien requieren props texto, esBotonDeClick, manejarClick.
//funcion de componente manejarClick: definimos la funcion (las const 23 y 29) para el evento del manejarElClick y reiniciarElContador.
//En razon de los eventos asignamos las funciones a las props: manejarClick={manejarElClick} /> y manejarClick={reiniciarElContador} />
//Agregamos la funcion de Contador a 'contenedor-conta' y damos propiedades en css (Contador.css)
//El Hook useState agrega Estado a un componente funcional. importamos desde react (L6).
//Agregamos desde el componente funcional (App) una constante sera un array con dos elementos: el valor que usaremos como el estado (numClick de Contador.jsx) y una funcion que nos permitira actualizar ese valor (setNumClicks). Se les asigna el valor retornado por useState con un valor inicial del estado (0).

//Componente de clase
//this.state contiene todas las propiedades que definen el estado del componente. Es un objeto JS.
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0,
    };
    this.manejarElClick = this.manejarElClick.bind(this);
    this.reiniciarElContador = this.reiniciarElContador.bind(this);
    //bind permite asociar el sig. actual de this en el contructor con el sig. de this en los metodos.
  }

  //Metodos para el estado de los click.
  manejarElClick() {
    //tomamos el objeto numClicks en su estado actual y a ese objeto reasignamos su nuevo estado a un nuevo valor. Estamos actualizando el estado de la prop que que quiera.
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }
 
  reiniciarElContador() {
    this.setState({numClicks: 0});
  }

  render() {
    return (
      <div className='App'>
        <div className='fcc-logo-contenedor'>
          <img className='fcc-logo'
          src={fccLogo}
          alt='logo de fcc'
          />
        </div>
  
        <div className='contenedor-conta'>
          <Contador 
          numClicks={this.state.numClicks}
          />
          <Boton
          texto='Click' 
          esBotonDeClick={true}
          manejarClick={this.manejarElClick} />
          
          <Boton
          texto='Reiniciar' 
          esBotonDeClick={false}
          manejarClick={this.reiniciarElContador} />
        </div>
      </div>
    );
  }
}

/*function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarElClick = () => {
    //console.log('Click');
    //Llamamos a la funcion parametro setNumClicks y la asignamos a un valor; dicha llamada actualizara ese estado.
    setNumClicks(numClicks + 1);
  }

  const reiniciarElContador = () => {
    //console.log('Reiniciar')
    setNumClicks(0);
  }

  //El estado actual numClicks lo usamos como un prop (L45) para actualizar el estado.
  return (
    <div className='App'>
      <div className='fcc-logo-contenedor'>
        <img className='fcc-logo'
        src={fccLogo}
        alt='logo de fcc'
        />
      </div>

      <div className='contenedor-conta'>
        <Contador 
        numClicks={numClicks}
        />
        <Boton
        texto='Click' 
        esBotonDeClick={true}
        manejarClick={manejarElClick} />
        
        <Boton
        texto='Reiniciar' 
        esBotonDeClick={false}
        manejarClick={reiniciarElContador} />
      </div>
    </div>
  );
}
*/


export default App;
