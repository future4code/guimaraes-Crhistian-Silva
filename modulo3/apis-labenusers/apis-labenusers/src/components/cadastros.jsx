import React from 'react';
import styled from 'styled-components';

const CadastrosEstilizados = styled.div`
display: flex;
flex-direction: column;
font-weight: bold;
color:  #fff;
width: 40vw;
height: 50vh;
margin-left: 20vw;
margin-top: 2rem;
background-image: radial-gradient(circle at 20% 14%, rgba(27, 27, 27,0.05) 0%, rgba(27, 27, 27,0.05) 50%,rgba(126, 126, 126,0.05) 50%, rgba(126, 126, 126,0.05) 100%),radial-gradient(circle at 18% 51%, rgba(248, 248, 248,0.05) 0%, rgba(248, 248, 248,0.05) 50%,rgba(26, 26, 26,0.05) 50%, rgba(26, 26, 26,0.05) 100%),radial-gradient(circle at 29% 38%, rgba(160, 160, 160,0.05) 0%, rgba(160, 160, 160,0.05) 50%,rgba(212, 212, 212,0.05) 50%, rgba(212, 212, 212,0.05) 100%),linear-gradient(90deg, rgb(35, 74, 255),rgb(132, 161, 173));

.botao{
    display:flex;
    justify-self: center;
    align-self: center;
    margin-left: 9vw;

}

.form-control{
     margin-left: 1rem;
     caret-color: blue;
     border-radius: 10px;
     padding: 0.2rem;
     margin-bottom: 0.3rem;
     margin-top: 1rem;
     width: 20vw;
}
.form-control2{
    margin-left: 1.6em;
    caret-color: blue;
    border-radius: 10px;
    padding: 0.2rem;
   width: 20vw;
}
`

const StyleButton = styled.div`
display: flex;
margin-top: 0.5rem;
justify-content: center;
align-items: center;
position: relative;
border: none;
outline: none;
width: 5em;
height:2em;
background-color: #0093E9;
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
font-size: 1rem;
color: #fff;
border-radius: 7px;
cursor: pointer;
font-family: 'Roboto', sans-serif;

::before{
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #024752;
    z-index: -1;
    border-radius: 7px;
    transform: translateY(3px);
}
:active{
    transform: translateY(3px);
}
:active:before{
    transform: translateY(0)5px;
}  
`

const BotaNavegacao = styled.a`
    border-radius: 10px;
    border: solid 1px; 
    color: #fff;
    padding: 0.2rem;
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

`
class Cadastros extends React.Component {

    render() {

        return (
            <>
                <BotaNavegacao id='botao' href="./listaCadastros">Ir para Lista de Cadastros</BotaNavegacao>

            <CadastrosEstilizados>
                 <h4>Cadastro</h4>
                <form>
                    <div>
                        <label>Nome</label>
                        <input value={this.props.valorInputNome}
                        onChange={this.props.valorOnchageNome}
                            type="text" class="form-control"
                            id="" placeholder="digite seu nome"
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input value={this.props.valorInputEmail}
                            onChange={this.props.valorOnchageEmail}
                            type="text" class="form-control2"
                            id="" placeholder="nome@exemplo.com"
                        />
                    </div>
                    <div className='botao'>
                        <StyleButton onClick={this.props.valorBotao}>Enviar</StyleButton>
                    </div>
                </form>
            </CadastrosEstilizados>

            </>
        )

    }

}

export default Cadastros