import "./App.css";
import Wordle from "./components/Wordle";
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <div className="App">
      <Wordle />
    </div>
  );
}

export default App;
