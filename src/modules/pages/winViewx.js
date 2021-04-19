import React from "react";

function WinViewx(props) {
  const { retry, reset, winneris } = props;
  return (
    <>
      <div class="modal">
        <div class="contenedor">
          <div class="contenido">
            <h1>{winneris}</h1>
          </div>
          <button onClick={retry} type="button">
            Retry
          </button>
          <button onClick={reset} type="button">
            Home
          </button>
        </div>
      </div>
    </>
  );
}

export default WinViewx;
