import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Form from './components/form/Form';
import Excuses from './components/excuses/Excuses';
import { createdMockExcuse } from './mock_data/appendedExcuse';



const App = () => {


  const [excuses, setExcuses] = useState(() => {
    const storedExcuses = localStorage.getItem('excuses');
    return storedExcuses ? JSON.parse(storedExcuses) : [];
  });

  useEffect(() => {
    localStorage.setItem('excuses', JSON.stringify(excuses));
  }, [excuses]);


  const updatedMockExcuse = {
    ...createdMockExcuse,
    id: Date.now().toString() + Math.floor(Math.random() * 1000000).toString(),
  }

  


  return (
    <div className="App">
      <Navbar />

      <Form setExcuses={setExcuses} mockExcuse={updatedMockExcuse} />
      <Excuses excuses={excuses} setExcuses={setExcuses} />
    </div>
  );
}

export default App;
