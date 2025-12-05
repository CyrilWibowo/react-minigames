import { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [gamesWon, setGamesWon] = useState(0);

  const fetchInitialScore = async () => {
    try {
      const response = await fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json');
      const data = await response.json();
      return data.score;
    } catch (error) {
      console.error('Error fetching initial score:', error);
      return 0;
    }
  };

  const initializeScore = async () => {
    const initialScore = await fetchInitialScore();
    setGamesWon(initialScore);
    localStorage.setItem('gamesWon', initialScore.toString());
  };

  useEffect(() => {
    const storedGamesWon = localStorage.getItem('gamesWon');
    if (storedGamesWon === null) {
      initializeScore();
    } else {
      setGamesWon(parseInt(storedGamesWon, 10));
    }
  }, []);

  const handleReset = async () => {
    await initializeScore();
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-message">
          Please choose an option from the navbar.
        </div>
        <div className="dashboard-score">
          Games won: {gamesWon} <button onClick={handleReset}>(reset)</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
