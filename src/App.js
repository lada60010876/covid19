import React, { useState, useEffect } from "react"
import Section1 from './components/Section1'
import Section2 from './components/SearchPage'

const App = () => {
  const [Covid19data, setCovid19data] = useState([])
  const fetchData = async () => {
    return await fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(data => {
        setCovid19data(data)
      });
  }
  useEffect(() => {
    fetchData()
  }, []);
  console.log(Covid19data)
  return (

    <div className="wrapper">
      <div className="section">
        {Covid19data != [] && <Section1 Covid19data={Covid19data.Global} />}
        <div class='icon-scroll' />

      </div>
      <div className="section">
        {Covid19data != [] && <Section2 Covid19data={Covid19data.Countries} />}
        <div class='icon-scroll' />

      </div>

    </div>

  );
}

export default App;
