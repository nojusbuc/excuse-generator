import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Form from './components/form/Form';
import Excuses from './components/excuses/Excuses';



const App = () => {


  const [excuses, setExcuses] = useState(() => {
    const storedExcuses = localStorage.getItem('excuses');
    return storedExcuses ? JSON.parse(storedExcuses) : [];
  });

  useEffect(() => {
    localStorage.setItem('excuses', JSON.stringify(excuses));
  }, [excuses]);

  return (
    <div className="App">
      <Navbar />

      <Form setExcuses={setExcuses} />
      <Excuses excuses={excuses} setExcuses={setExcuses} />
    </div>
  );
}

export default App;
