import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExamPage from "./pages/ExamPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exam" element={<ExamPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
