import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path="/articleId/:articleId" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
