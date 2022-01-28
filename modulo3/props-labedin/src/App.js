import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoCrhis from './img/crhis.jpg';
import email from './img/email.png';
import localizacao from './img/localizacao.png';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoCrhis} 
          nome="Crhistian F. Silva" 
          descricao="Olá, eu sou o Crhistian. Sou aluno da Labenu do curso Desenvolvedor Web Full Stack - Noturno - Turma Guimarães, com a intenção de migrar da carreira de funcionalismo público para a área de tecnologia, na busca de crescimento e desenvolvimento profissional, liberdade e qualidade de vida."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-email'>
        <CardPequeno
        imagem={email}
        titulo="E-mail:" dadoinserido='crhisnokia@live.com'
        />
        <div className='page-section-address'>
        <CardPequeno
        imagem={localizacao}
        titulo='Rua:'
        dadoinserido='Candeias, 333 - Foz do Iguaçu - PR - CEP: 85869-520'
        />
      </div>
      </div>

      <div>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Empresa brasileira de Correios e Telegráfos" 
          cargo="Cargo: Agente de Correios"
          descricao="Agosto de 2013  - 2022 " 
        />
        
        <CardGrande 
          imagem="https://t.ctcdn.com.br/hvGx3b_vvT3_QH9eacAEj-L2EmM=/400x400/smart/i490082.jpeg" 
          nome="Cursos" 
          descricao="Python 3, Python Impressionador, Inglês - A2" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          link='https://www.facebook.com/profile.php?id=100011027445009'
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        
        <ImagemButton
          link='https://www.instagram.com/crhisfoz/'
          imagem="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" 
          texto="Instagram"
          />
                
      </div>
    </div>
  );
}

export default App;
