import React, { useState } from "react";
import "./App.css";

export default function App() {
  let [input, setInput] = useState("");
  function inputnum(value) {
    setInput(input + value);
  }
  function outputnum() {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput("Error");
    }
  }
  function clear() {
    setInput("");
  }

  return (
    <div className='App' id='App'>
      <div className='calculator' id='calculator'>
        <div className='display' id='display'>
          {input}
        </div>
        <div className='buttons' id='buttons'>
          <button onClick={() => inputnum("1")}>1</button>
          <button onClick={() => inputnum("2")}>2</button>
          <button onClick={() => inputnum("3")}>3</button>
          <button onClick={() => inputnum("4")}>4</button>
          <button onClick={() => inputnum("5")}>5</button>
          <button onClick={() => inputnum("6")}>6</button>
          <button onClick={() => inputnum("7")}>7</button>
          <button onClick={() => inputnum("8")}>8</button>
          <button onClick={() => inputnum("9")}>9</button>
          <button onClick={() => inputnum("0")}>0</button>
          <button onClick={() => inputnum(".")}>.</button>
          <button onClick={() => inputnum("+")} className='change'>
            +
          </button>
          <button onClick={() => inputnum("/")} className='change'>
            /
          </button>
          <button onClick={() => inputnum("*")} className='change'>
            *
          </button>
          <button onClick={() => inputnum("-")} className='change'>
            -
          </button>
          <button onClick={() => inputnum("**")} className='change'>
            ^
          </button>
        </div>
        <div className='eui'>
          <button
            onClick={outputnum}
            style={{
              backgroundColor: "rgb(67, 151, 168)",
              color: "#fff",
              fontSize: "30px",
            }}
          >
            =
          </button>
          <button
            onClick={clear}
            style={{
              backgroundColor: "red",
              fontSize: "25px",
              color: "#fff",
            }}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}

/*
function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(eval(input)));
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className='calculator'>
      <div className='display'>{input}</div>
      <div className='buttons'>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
*/
