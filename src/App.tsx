import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Form from './components/form/Form';
import Excuses from './components/excuses/Excuses';
import { Pagination, Box } from '@mui/material';
import ExcuseCountSelect from './components/excuse_count_select/ExcuseCountSelect';

const App = () => {

  const [excuses, setExcuses] = useState(() => {
    const storedExcuses = localStorage.getItem('excuses');
    return storedExcuses ? JSON.parse(storedExcuses) : [];
  });
  const [excusesPerPage, setExcusesPerPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(excuses.length / excusesPerPage);
  const excusesPerPageOptions = [1, 2, 5, 0];

  useEffect(() => {
    localStorage.setItem('excuses', JSON.stringify(excuses));
  }, [excuses]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Box className="App">
      <Navbar />

      <Form setExcuses={setExcuses} />
      <ExcuseCountSelect excusesPerPage={excusesPerPage} setExcusesPerPage={setExcusesPerPage} excusesPerPageOptions={excusesPerPageOptions} totalExcuses={excuses.length} />
      <Excuses excuses={excuses} setExcuses={setExcuses} excusesPerPage={excusesPerPage} currentPage={currentPage} />
      <Pagination count={pages} shape="rounded" color="primary" onChange={(handlePageChange)} sx={{
        display: "flex",
        justifyContent: "center",
        margin: "3vh 0 2vh 0",
      }} />
    </Box>
  );
}


export default App;
