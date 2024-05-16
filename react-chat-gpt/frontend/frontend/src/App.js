import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleClick = async () => {
    const response = await axios.post(
      "http://localhost:4000/pergunte-ao-chatgpt",
      { prompt: prompt }
    );
    setResult(response.data);
  };

  return (
    <div className="container">
      <div className="insideContainer">
        <input type="text" onChange={(e) => setPrompt(e.target.value)} />
        <button onClick={handleClick}>Enviar</button>
        <div className="resultDiv">Resultado: {result}</div>
      </div>
    </div>
  );
}

export default App;

//npm start
