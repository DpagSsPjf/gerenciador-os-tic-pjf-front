import GlobaStyle from "../styles/GlobalStyle";
import Home from "./Home/Home";
import NovoProjeto from "./NovoProjeto/NovoProjeto";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Projetos from "./Projetos/Projetos";

function App() {
  return (
    <>
      <GlobaStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo-projeto" element={<NovoProjeto />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
