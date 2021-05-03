import React, { Fragment, useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Flags from 'country-flag-icons/react/3x2'

const OneCard = ({ countryData = [], typeSorting }) => {



  const setCardData = (countryData) => {
    const Flag = Flags[countryData.CountryCode];
    if (countryData == []) return null

    return (
      <Card key={countryData.Country} noGutters>
        <Card.Body>

          <div className="box">
            <div className="total-new-num"> {countryData.TotalConfirmed.toLocaleString()}  ({countryData.NewConfirmed.toLocaleString()})</div>
            <div className="total-new-des">Total confirmed cases(New)</div>


          </div>          
          <div className="box">
            <Flag className="h-50 flag-img" />

            <div className="country-name">{countryData.Country}</div>

          </div>
          <div className="box">
            <div className="total-new-num"> {countryData.TotalRecovered.toLocaleString()}  ({countryData.NewRecovered.toLocaleString()})</div>
            <div className="total-new-des">Total recovered cases(New)</div>
          </div>
          <div className="box">
            <div className="total-new-num"> {countryData.TotalDeaths.toLocaleString()} ({countryData.NewDeaths.toLocaleString()})</div>
            <div className="total-new-des ">Total death cases(New)</div>
          </div>




        </Card.Body>
      </Card >
    )
  }
  return setCardData(countryData)


}

export default OneCard