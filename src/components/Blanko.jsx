import { useState, useEffect } from 'react';
import './Blanko.css';

const strs = [
  'the fat cats',
  'larger frogs',
  'banana cakes',
  'unsw vs usyd',
  'french toast',
  'hawaii pizza',
  'barack obama',
];

function Blanko() {
  const [gameString, setGameString] = useState('');
  const [inputPositions, setInputPositions] = useState([]);
  const [inputValues, setInputValues] = useState({});

  const initializeGame = () => {
    // Pick a random string
    const randomString = strs[Math.floor(Math.random() * strs.length)];
    setGameString(randomString);

    // Find all non-space character positions
    const nonSpacePositions = [];
    for (let i = 0; i < randomString.length; i++) {
      if (randomString[i] !== ' ') {
        nonSpacePositions.push(i);
      }
    }

    // Pick 3 random positions from non-space characters
    const selectedPositions = [];
    const tempPositions = [...nonSpacePositions];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * tempPositions.length);
      selectedPositions.push(tempPositions[randomIndex]);
      tempPositions.splice(randomIndex, 1);
    }

    setInputPositions(selectedPositions);
    setInputValues({});
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    // Check if all inputs are filled
    if (Object.keys(inputValues).length === 3) {
      // Check if all are correct
      let allCorrect = true;
      for (const pos of inputPositions) {
        if (inputValues[pos]?.toLowerCase() !== gameString[pos].toLowerCase()) {
          allCorrect = false;
          break;
        }
      }

      if (allCorrect) {
        alert('Correct!');
        // Increment games won
        const currentScore = parseInt(localStorage.getItem('gamesWon') || '0');
        localStorage.setItem('gamesWon', (currentScore + 1).toString());
        // Start new game
        initializeGame();
      }
    }
  }, [inputValues, inputPositions, gameString]);

  const handleInputChange = (position, value) => {
    if (value.length <= 1) {
      const newInputValues = { ...inputValues };
      if (value === '') {
        delete newInputValues[position];
      } else {
        newInputValues[position] = value;
      }
      setInputValues(newInputValues);
    }
  };

  const handleReset = () => {
    initializeGame();
  };

  return (
    <div className="blanko-container">
      <div className="blanko-game">
        {gameString.split('').map((char, index) => {
          const isInput = inputPositions.includes(index);

          return (
            <div key={index} className="blanko-box">
              {isInput ? (
                <input
                  type="text"
                  maxLength="1"
                  value={inputValues[index] || ''}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="blanko-input"
                />
              ) : (
                <span className="blanko-char">{char}</span>
              )}
            </div>
          );
        })}
      </div>
      <button onClick={handleReset} className="blanko-reset-button">
        Reset
      </button>
    </div>
  );
}

export default Blanko;
