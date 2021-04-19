import React from "react";

function DrawWin(props) {
  const { retry, reset } = props;
  return (
    <>
      <div class="modal">
        <div class="contenedor">
          <div class="contenido">
            <h1>DRAW</h1>
            <button onClick={retry} type="button" onclick={props.retry}>
              Retry
            </button>
            <button onClick={reset} type="button">
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DrawWin;
