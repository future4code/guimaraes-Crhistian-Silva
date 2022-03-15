import React from "react";
import styled from "styled-components"
import ReactPlayer from 'react-player'


const TelaEstilizada = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-weight: bold;
  color: #fff;
  height: 50vh;
  width: 50vw;

  background-image: radial-gradient(
      circle at 20% 14%,
      rgba(27, 27, 27, 0.05) 0%,
      rgba(27, 27, 27, 0.05) 50%,
      rgba(126, 126, 126, 0.05) 50%,
      rgba(126, 126, 126, 0.05) 100%
    ),
    radial-gradient(
      circle at 18% 51%,
      rgba(248, 248, 248, 0.05) 0%,
      rgba(248, 248, 248, 0.05) 50%,
      rgba(26, 26, 26, 0.05) 50%,
      rgba(26, 26, 26, 0.05) 100%
    ),
    radial-gradient(
      circle at 29% 38%,
      rgba(160, 160, 160, 0.05) 0%,
      rgba(160, 160, 160, 0.05) 50%,
      rgba(212, 212, 212, 0.05) 50%,
      rgba(212, 212, 212, 0.05) 100%
    ),
    linear-gradient(90deg, rgb(35, 74, 255), rgb(132, 161, 173));

    .player-wrapper {
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
}

.react-player {
  position: absolute;
  top: 0;
  left: 0;
}
`;


class MusicasPlaylist extends React.Component {

  

  render() {

    const tracksComponente = this.props.valorTracksPlaylist.map((playlist) => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer   className='react-player' url={playlist.url}   width='100%'
            height='100%' />
          <br/>
        </div>
            

      )
    });

    return (
    
      <TelaEstilizada >
         <h2> Tela Musica Playlist</h2>
        {tracksComponente}
      </TelaEstilizada>
    )
  }
}

export default MusicasPlaylist;