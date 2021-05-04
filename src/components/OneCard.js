import React, { Fragment, useState, useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Flags from 'country-flag-icons/react/3x2'

const OneCard = ({ countryData = [], typeSorting }) => {

  const setCardData = (countryData) => {
    const Flag = Flags[countryData.CountryCode];
    if (countryData == []) return null
    const TotalConfirmed = () => {
      return <div className="box">
        <div className="total-new-num">
          {countryData.TotalConfirmed != 0 ?
            countryData.TotalConfirmed.toLocaleString() : "unreported"}
          <br />
          <span>
            (
        {countryData.NewConfirmed != 0 ?
              <Fragment>
                +{countryData.NewConfirmed.toLocaleString()}
              </Fragment> : "unreported"}
      )
          </span>

        </div>
        <div className="total-new-des">Total confirmed (New)</div>


      </div>
    }
    const Country = () => {
      return <div className="box">
        <Flag className="h-50 flag-img" />

        <div className="country-name">{countryData.Country}</div>

      </div>
    }
    const TotalRecovered = () => {
      return <div className="box">
        <div className="total-new-num">
          {countryData.TotalRecovered != 0 ?
            countryData.TotalRecovered.toLocaleString() : "unreported"}
          <br />
          <span>({countryData.NewRecovered != 0 ?
            <Fragment>
              +{countryData.NewRecovered.toLocaleString()}
            </Fragment> : "unreported"})</span>

        </div>
        <div className="total-new-des">Total recovered (New)</div>
      </div>
    }
    const TotalDeaths = () => {
      return <div className="box">
        <div className="total-new-num">
          {countryData.TotalDeaths != 0 ?
            countryData.TotalDeaths.toLocaleString() : "unreported"}
          <br />
          <span>({countryData.NewDeaths != 0 ?
            <Fragment>+{countryData.NewDeaths.toLocaleString()}</Fragment> : "unreported"})</span>
        </div >
        <div className="total-new-des ">Total death (New)</div>
      </div>
    }
    const renderData = () => {
      if (typeSorting == "TotalDeaths") {
        return <Fragment>
          {TotalDeaths()}
          {Country()}
          {TotalConfirmed()}
          {TotalRecovered()}

        </Fragment>
      }
      if (typeSorting == "TotalConfirmed") {
        return <Fragment>
          {TotalConfirmed()}
          {Country()}
          {TotalRecovered()}
          {TotalDeaths()}

        </Fragment>
      }
      if (typeSorting == "TotalRecovered") {
        return <Fragment>
          {TotalRecovered()}
          {Country()}
          {TotalConfirmed()}
          {TotalDeaths()}

        </Fragment>
      }
    }
    return (
      <Card key={countryData.Country} >
        <Card.Body>
          {renderData()}

        </Card.Body>
      </Card >
    )
  }
  return setCardData(countryData)


}

export default OneCard