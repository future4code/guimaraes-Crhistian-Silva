import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		inputComentario: '',
	}

	
	onChangeComentario = (event) => {
		this.setState({ inputComentario: event.target.value})
		console.log(this.state)
	}


/* ------------------------------------------------------------------------------------------------------------
nessa função acima ele capta todas as letras digitadas, porém fiz de outra Forma onde vai captar os dados do input,
apenas quando apertar o enter, mas quero aprender a colocar o botão enviar como comando tmbm 

 onChangeComentario = event => {
	if(event.keyCode === 13 ){
		this.setState({
			inputComentario: event.target.value
		})
		console.log(this.state)
	}
}
/* ------------------------------------------------------------------------------------------------------------*/

	render() {
		console.log('Estado', this.state)
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.inputComentario}
				onChange={this.onChangeComentario}
				/* onKeyDown={(event) => this.onChangeComentario(event)} */
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
