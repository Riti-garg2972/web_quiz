import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './quiz';
import ThanksScreen from './ThanksScreen';
import FindDuplicate from './findDuplicate.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/findDuplicates" element={<FindDuplicate/>} />
        <Route path="/thanksScreen" element ={<ThanksScreen />}/>
      </Routes>
    </Router>
  );
}

export default App;
