import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/result/:id" element={<ResultPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
