import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-body">
        <Routes>
          <Route path="/" element={<div>Dashboard</div>} />
          <Route path="/blanko" element={<div>Blanko Game</div>} />
          <Route path="/slido" element={<div>Slido Game</div>} />
          <Route path="/tetro" element={<div>Tetro Game</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
