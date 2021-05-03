import React, { Fragment } from 'react';
import Card from './OneCard'
import { Container, Row, Col } from 'react-bootstrap'

const CountryList = ({ countryList = [], typeSorting}) => {

  return (
    <Container >
      <Row xs={12} md={12} lg={12} >

        {countryList.map((data, index) => {

          if (data) {
            return (
              <Col xs={12} md={6} lg={4} >
                <Card countryData={data} key={data.Country} typeSorting={typeSorting} />
              </Col>
            )
          }
          return null
        })}
      </Row>

    </Container>

  );
}

export default CountryList