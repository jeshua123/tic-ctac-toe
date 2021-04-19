import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../store/appContext";

function Main() {
  const { store, actions } = useContext(Context);
  const [players, setplayers] = useState({
    player1: {
      name: "",
      choice: "",
    },
    player2: {
      name: "",
      choice: "",
    },
  });
  const [flag1, setflag1] = useState("");
  const [flag2, setflag2] = useState("");
  let buttom1 = flag1 ? "botton-after" : "botton-before";
  let buttom2 = flag2 ? "botton-after" : "botton-before";

  let history = useHistory();
  const handleOnChange = (e) => {
    setplayers({
      ...players,
      [e.target.name]: {
        name: e.target.value,
        choice: players[e.target.name].choice,
      },
    });
  };

  const handleOnClick = (e) => {
    if (e.target.name == "player1") {
      setplayers({
        ...players,
        player1: {
          choice: e.target.value,
          name: players[e.target.name].name,
        },
        player2: { name: players.player2.name, choise: e.target.value === "x" ? "o" : "x" },
      });
      if (e.target.value === "x") {
        setflag1(true);
        setflag2(false);
      }
      if (e.target.value === "o") {
        setflag1(false);
        setflag2(true);
      }
    }
    if (e.target.name === "player2") {
      setplayers({
        ...players,
        player2: {
          choice: e.target.value,
          name: players[e.target.name].name,
        },
        player1: { name: players.player1.name, choise: e.target.value === "x" ? "o" : "x" },
      });
      if (e.target.value === "x") {
        setflag1(false);
        setflag2(true);
      }
      if (e.target.value === "o") {
        setflag2(false);
        setflag1(true);
      }
    }
  };

  const handleOnClick2 = () => {
    actions.setPlayer(players);
    history.push("/game");
  };

  return (
    <div className="main-div-body">
      <div className="div-main-section">
        <div className="section-1 w-100 h-25">
          <img
            src="https://user-images.githubusercontent.com/48678280/87714930-d3cdbe80-c7ac-11ea-9b56-76d80c982f68.jpg"
            alt=""
            className="w-100 h-100"
          />
        </div>
        <div className="section-2 w-100 flex-wrap h-50  ">
          <div className="div-jugador h-25 w-50 d-flex">
            <div className="input w-50 h-100 ">
              <input placeholder="player-1" type="text" name="player1" onChange={handleOnChange} className=" h-100 w-100" />
            </div>
            <button type="button" className={buttom1} name="player1" value="x" onClick={handleOnClick}>
              X
            </button>
            <button type="button" className={buttom2} name="player1" value="o" onClick={handleOnClick}>
              O
            </button>
          </div>
          <div className="div-jugador h-25 w-50 d-flex">
            <div className="input w-50 h-100 ">
              <input placeholder="player-2" type="text" name="player2" onChange={handleOnChange} className=" w-100 h-100 " />
            </div>
            <button type="button" className={buttom2} name="player2" value="x" onClick={handleOnClick}>
              X
            </button>
            <button type="button" className={buttom1} name="player2" value="o" onClick={handleOnClick}>
              O
            </button>
          </div>
        </div>
        <div className="section-3 w-100 h-25 w-50">
          <div class="d-grid gap-2 d-flex d-flex justify-content-center align-self-center">
            <button type="button" onClick={handleOnClick2} class="btn bg-green btn-lg w-50 ">
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
