import React, { useState, useEffect, Fragment } from "react"
import WorldMap from './WorldMap'
import Moment from 'moment';
import { Container, Card, Row } from 'react-bootstrap'


const Secction1 = ({ Covid19data = [] }) => {

  return (
    <Fragment >
      <h2 className="text-center text-white">Covid19 Global update</h2>
      {Covid19data != [] &&
        <Fragment>
          <Row xs={12} md={12} lg={12}  >

            <Card  >
              <div className="box">
                <div className="total-num text-primary">{Covid19data.TotalConfirmed}</div>
                <div className="total-detail "> Total Confirmed</div>
              </div>
              <div className="box">
                <div className="total-num text-danger">{Covid19data.TotalDeaths}</div>
                <div className="total-detail ">Total Deaths</div>
              </div>
              <div className="box">
                <div className="total-num text-success">{Covid19data.TotalRecovered}</div>
                <div className="total-detail ">Total Recovered</div>
              </div>
            </Card>
          </Row>

          <p className="text-center text-white">
          <img src={'/refresh-buttons.svg'}/> Last update: {Moment(Covid19data && Covid19data.Date).format('LLL')} </p>
          <Container >
            <WorldMap />

          </Container>

        </Fragment>
      }




    </Fragment>

  )
}

export default Secction1