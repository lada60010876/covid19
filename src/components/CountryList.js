import React, { Fragment } from 'react';
import Card from './OneCard'
import { Container, Row, Col } from 'react-bootstrap'

const CountryList = ({ countryList = [], typeSorting}) => {

  return (
      <Row xs={12} md={12} lg={12} className=" container flex-grow-1  "  noGutters="true">

        {countryList.map((data, index) => {

          if (data) {
            return (
              <Col xs={12} md={6} lg={4}  key={index} >
                <Card countryData={data} key={data.Country} typeSorting={typeSorting} />
              </Col>
            )
          }
          return null
        })}
      </Row>


  );
}

export default CountryList