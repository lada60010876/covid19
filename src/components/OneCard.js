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
            <div className="total-new-num">
              {countryData.TotalConfirmed != 0 ?
                countryData.TotalConfirmed.toLocaleString() : "unreported"}
              <br />
            (
              {countryData.NewConfirmed != 0 ?
                countryData.NewConfirmed.toLocaleString() : "unreported"}
            )
              </div>
            <div className="total-new-des">Total confirmed cases(New)</div>


          </div>
          <div className="box">
            <Flag className="h-50 flag-img" />

            <div className="country-name">{countryData.Country}</div>

          </div>
          <div className="box">
            <div className="total-new-num">
              {countryData.TotalRecovered != 0 ?
                countryData.TotalRecovered.toLocaleString() : "unreported"}
              <br />
                ({countryData.NewRecovered != 0 ?
                countryData.NewRecovered.toLocaleString() : "unreported"})
            </div>
            <div className="total-new-des">Total recovered cases(New)</div>
          </div>
          <div className="box">
            <div className="total-new-num">
              {countryData.TotalDeaths != 0 ?
                countryData.TotalDeaths.toLocaleString() : "unreported"}
              <br />
            ({countryData.NewDeaths != 0 ?
                countryData.NewDeaths.toLocaleString() : "unreported"})</div>
            <div className="total-new-des ">Total death cases(New)</div>
          </div>
        </Card.Body>
      </Card >
    )
  }
  return setCardData(countryData)


}

export default OneCard