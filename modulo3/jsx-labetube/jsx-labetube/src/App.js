import './App.css';
import casinha from "./img/home.png"
import bussola from "./img/bussola.png"
import inscricao from "./img/subscription.png"
import historico from "./img/history.png"
import original from "./img/original.png"
import titulo1 from "./img/play.png"
import youtube from "./img/youtube.png"


function App() {
    const titulo = "Título do vídeo"

    function reproduzVideo(){
        alert("O vídeo está sendo reproduzido")
    }


  return (
  
  <div className="tela-inteira">
        <header>
            <h1>
                <img className="titulo" src={titulo1}/>Lab Tube</h1>
            <input className='busca' type="text" placeholder="Busca" id="campoDeBusca"/>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                 <li className="botoes-meunu-vertical">
                    <img className='casinha' src={casinha}/> <u>Início</u></li>
                    <li className="botoes-meunu-vertical">
                        <img className="bussola" src={bussola}/> Em alta</li>
                    <li className="botoes-meunu-vertical">
                        <img className="inscricao" src={inscricao} />Inscrições</li>
                    <hr/>
                    <li className="botoes-meunu-vertical">
                        <img className="original" src={original} />Originais</li>
                    <li className="botoes-meunu-vertical">
                        <img className="historico" src={historico}/>Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4><i>Olá!  bem-vindo ao Lab Tube !!</i></h4>
        </footer>
    </div>
    
  );
}

export default App;
