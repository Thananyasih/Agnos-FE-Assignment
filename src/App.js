
import './App.css';
import AbsPage from './pages/AbsPage';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import FingersPage from './pages/FingersPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<AbsPage />} />
            <Route path="/fingersPainAnalyze" element={<FingersPage/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
