import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import WinViewx from "./winViewx";
import { Context } from "../../store/appContext";
import DrawWin from "./drawview";
function Game() {
  const initialobj = [
    { id: "A1", value: "" },
    { id: "B1", value: "" },
    { id: "C1", value: "" },
    { id: "A2", value: "" },
    { id: "B2", value: "" },
    { id: "C2", value: "" },
    { id: "A3", value: "" },
    { id: "B3", value: "" },
    { id: "C3", value: "" },
  ];
  const { store, actions } = useContext(Context);
  const [squares, setSquares] = useState([
    { id: "A1", value: "" },
    { id: "B1", value: "" },
    { id: "C1", value: "" },
    { id: "A2", value: "" },
    { id: "B2", value: "" },
    { id: "C2", value: "" },
    { id: "A3", value: "" },
    { id: "B3", value: "" },
    { id: "C3", value: "" },
  ]);
  const [winneris, setwinneris] = useState("");
  const [turn, setTurn] = useState(true);
  const [arrayx, setArrayx] = useState([]);
  const [arrayo, setArrayo] = useState([]);

  const x = (
    <div class="var-container">
      <div class="bar1"></div>
      <div class="bar2"></div>
    </div>
  );
  const o = (
    <div class="var-container">
      <div class="circle">
        <div class="circle-inside"></div>
      </div>
    </div>
  );
  const wincomb = [
    ["A1", "B1", "C1"],
    ["A2", "B2", "C2"],
    ["A3", "B3", "C3"],
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"],
    ["A1", "B2", "C3"],
    ["A3", "B2", "C1"],
  ];
  const [score, setscore] = useState({
    x: 0,
    o: 0,
    draw: 0,
  });
  let history = useHistory();
  const HandleOnClick = (e) => {
    const value = turn ? x : o;
    turn ? setArrayx([...arrayx, e.target.id]) : setArrayo([...arrayo, e.target.id]);
    const squaresedited = squares.map((item) => {
      if (item.id === e.target.id) {
        return { ...item, value };
      } else {
        return item;
      }
    });
    setSquares(squaresedited);
    setTurn(!turn);
  };

  useEffect(() => {
    wincomb.forEach((item) => {
      let foo = item.reduce((com, iter) => {
        if (arrayx.includes(iter)) {
          return com + 1;
        } else {
          return com;
        }
      }, 0);
      let foo2 = item.reduce((com, iter) => {
        if (arrayo.includes(iter)) {
          return com + 1;
        } else {
          return com;
        }
      }, 0);
      if (arrayx.length === 5 || arrayo.length === 5) {
        setscore({ ...score, x: score.x, o: score.o, draw: score.draw + 1 });
      }
      if (foo === 3) {
        setwinneris(store.players.player1.choice === "x" ? store.players.player1.name : store.players.player2.name);
        setscore({ ...score, x: score.x + 1, o: score.o, draw: score.draw });
      }
      if (foo2 === 3) {
        setwinneris(store.players.player1.choice === "o" ? store.players.player1.name : store.players.player2.name);
        setscore({ ...score, x: score.x, o: score.o + 1, draw: score.draw });
      }
    });
  }, [squares]);
  const retry = (e) => {
    setArrayx([]);
    setArrayo([]);
    setSquares(initialobj);
    setwinneris("");
  };
  const reset = (e) => {
    actions.setPlayer({});
    history.push("/");
  };

  return (
    <>
      {winneris && <WinViewx retry={retry} reset={reset} winneris={winneris} />}
      {arrayo.length === 5 && <DrawWin retry={retry} reset={reset} />}
      {arrayx.length === 5 && <DrawWin retry={retry} reset={reset} />}
      <div className="main-div-body">
        <div className="div-main-section">
          <div className="section-1 w-100 h-25">
            <img
              src="https://user-images.githubusercontent.com/48678280/87714930-d3cdbe80-c7ac-11ea-9b56-76d80c982f68.jpg"
              alt=""
              className="w-100 h-100"
            />
          </div>
          <div className="section-2 w-100 h-75   m-auto d-flex justify-content-center">
            <div className="div-table w-50 h-75  mt-0 d-flex flex-wrap justify-content-between ">
              <div onClick={HandleOnClick} id="A1" className="square">
                {squares[0].value}
              </div>
              <div onClick={HandleOnClick} id="B1" className="square">
                {squares[1].value}
              </div>
              <div onClick={HandleOnClick} id="C1" className="square">
                {squares[2].value}
              </div>
              <div onClick={HandleOnClick} id="A2" className="square">
                {squares[3].value}
              </div>
              <div onClick={HandleOnClick} id="B2" className="square">
                {squares[4].value}
              </div>
              <div onClick={HandleOnClick} id="C2" className="square">
                {squares[5].value}
              </div>
              <div onClick={HandleOnClick} id="A3" className="square">
                {squares[6].value}
              </div>
              <div onClick={HandleOnClick} id="B3" className="square">
                {squares[7].value}
              </div>
              <div onClick={HandleOnClick} id="C3" className="square">
                {squares[8].value}
              </div>
            </div>

            <div className="section-3 w-100 h-25 bg-green ">
              <div className="div-scores h-50 w-50 m-auto d-flex justify-content-center text-center">
                <div className="player-1 h-50  w-33">
                  <h6>{store.players.player1.name}(X)</h6>
                  <h5>{score.x}</h5>
                </div>
                <div className="even-count h-50  w-33 ">
                  <h6>Ties</h6>
                  <h5>{score.draw}</h5>
                </div>
                <div className="player-2 h-50 w-33   ">
                  <h6>{store.players.player2.name}(O)</h6>
                  <h5>{score.o}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
