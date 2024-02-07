import React, { useCallback, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Congrats from './Congrats'
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function App() {
  const [startDate, setStartDate] = useState('02/02/2024');
  const [isToday, setIsToday] = useState(false)

  useEffect(() => {
    if (new Date(startDate).getDate() === 7 && new Date(startDate).getMonth() === 1) {
        setIsToday(true)
    } else {
        setIsToday(false)
    }
  }, [startDate])

  return (
    <div className="">
      {isToday && <Congrats/>}
      <div className="date-picker-container">
        <h2>Please enter your date of birth</h2>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MMMM d, yyyy"
        />
      </div>
    </div>
  );
}

export default App;
