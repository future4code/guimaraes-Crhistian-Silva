import './App.css';
import React, {useState} from 'react'
import TelaAreaAdm from './pages/LoginPage';
import ListTripsPage from './pages/ListTripsPage';
import HomePage from './pages/HomePage';
import ApplicationFormPage from './pages/ApplicationFormPage.js.js';
import LoginPage from './pages/LoginPage';
import AdminHomePage from './pages/AdminHomePage';
import TripDetailsPage from './pages/TripDetailsPage';
import CreateTripPage from './pages/CreateTripPage';


function App() {
  /* const [tela, setTela] = useState()

  const escolherTela = () => {
    switch (tela) {
      case "Tela Viagens":
        return <TelaLista  valorFuncaoMudaTela={mudaTela}/>;
       case "Tela Adm":
        return < TelaAreaAdm  valorFuncaoMudaTela={mudaTela}/>;
      case " Tela Inicial":
        return <HomePage  valorFuncaoMudaTela={mudaTela}
        valorTela={tela}/>;
      default:
        return <HomePage valorFuncaoMudaTela={mudaTela}
        valorTela={tela} />;
    }
  };

  const mudaTela = (nomeTela) => {
    setTela(nomeTela)
  };
 */
  return (
    <div className="App">   
    {/* {escolherTela()  }    */}
    <HomePage/>
    </div>
  );
}

export default App;
