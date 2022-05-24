import React from "react";

export const Post = props => {
  return (
    <div className={"post-container"}>
      <p>{props.post.texto}</p>
      <button onClick={() => props.alterarCurtida(props.post.id)}>
        {props.post.curtida ? "Descurtir" : "Curtir"}
      </button>
      <button onClick={() => props.apagarPost(props.post.id)}>Apagar</button>
    </div>
  );
};
