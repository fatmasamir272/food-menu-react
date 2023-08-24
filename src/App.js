import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from 'react'
import { person } from './data'
import Container from 'react-bootstrap/Container';
import DatesCount from './components/DatesCount'
import DatesList from './components/DatesList'
import DatesAction from './components/DatesAction'

function App() {
  const [personData, setPersonData] = useState(person)
  //dafadf
  const onDelete = () => {
    setPersonData([])
  }
  const onViewData = () => {
    setPersonData(person)
  }
  useEffect(() => {
    setPersonData([])
  }, [])
  return (
    <div className="App">
    <Container className="py-5">
    <DatesCount person={personData} />
    <DatesList person={personData} />
    <DatesAction deleteData={onDelete} onViewData={onViewData} />
  </Container>

    </div>
  );
}

export default App;
