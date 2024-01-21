import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlePage from "./components/ArticlePage";
import ArticleDetailPage from "./components/ArticleDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path="/articleId/:articleId" element={<ArticleDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
