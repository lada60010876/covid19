import React, { useState, useEffect, Fragment } from "react"
import WorldMap from './WorldMap'
import Moment from 'moment';
import { Container, Card, Row } from 'react-bootstrap'


const Secction1 = ({ Covid19data = [] }) => {
  console.log(Covid19data)

  return (
    <Container >
      <h2 className="text-center">Covid19 update</h2>
      {Covid19data != [] &&
        <Fragment>
          <Row xs={12} md={12} lg={12}  >

            <Card  >
              <div className="box">
                <div className="total-num ">{Covid19data.TotalConfirmed}</div>
                <div className="total-detail "> Total Confirmed</div>
              </div>
              <div className="box">
                <div className="total-num ">{Covid19data.TotalDeaths}</div>
                <div className="total-detail ">Total Deaths</div>
              </div>
              <div className="box">
                <div className="total-num ">{Covid19data.TotalRecovered}</div>
                <div className="total-detail ">Total Recovered</div>
              </div>
            </Card>
          </Row>

          <p className="text-center">Last update: {Moment(Covid19data && Covid19data.Date).format('LLL')} </p>
          <Container className="d-flex flex-column  align-items-center">
            <WorldMap />

          </Container>

        </Fragment>
      }




    </Container>

  )
}

export default Secction1