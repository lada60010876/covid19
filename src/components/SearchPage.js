import React, { useState, useEffect, Fragment } from 'react';
import SearchBar from './SearchBar';
import CountryList from './CountryList';
import { Container, ToggleButton, ButtonGroup, Row, Col } from 'react-bootstrap'

const SearchPage = ({ Covid19data = [] }) => {
  const [input, setInput] = useState('');
  const [sorting, setSorting] = useState('TotalConfirmed');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();
  const ListSorting = {
    TotalConfirmed: "Confirmed",
    TotalDeaths: "Death",
    TotalRecovered: "Recovered"
  }
  const fetchData = async () => {

    const sorted = Covid19data.sort((countryA, countryB) => {
      return parseInt(countryB[sorting]) - parseInt(countryA[sorting]);
    })
    setCountryList(sorted)
    setCountryListDefault(sorted)

  }

  const updateInput = async (input) => {
    const filtered = countryListDefault.filter(country => {
      return country.Country.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setCountryList(filtered);
  }
  const updateSorting = async (e) => {
    const typeSoting = e.target.value
    const filtered = countryListDefault.filter(country => {
      return country.Country.toLowerCase().includes(input.toLowerCase())
    })
    const sorted = filtered.sort((countryA, countryB) => {
      return parseInt(countryB[typeSoting]) - parseInt(countryA[typeSoting]);
    })
    setSorting(typeSoting);
    setCountryList(sorted);
  }
  useEffect(() => {
    fetchData()
  }, [Covid19data]);

  return (
    <Fragment>

      <Row xs={12} md={12} lg={12}  >

        <Col xs={12} md={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}  >
          <ButtonGroup toggle>
            {
              Object.entries(ListSorting).map(([key, typeSoting]) => (
                <ToggleButton
                  type="radio"
                  variant="info"
                  onClick={updateSorting}
                  checked={sorting === key}
                  className="mr-2"
                  value={key} className="">{typeSoting} </ToggleButton>

              ))
            }
          </ButtonGroup >

        </Col>
        <Col xs={{ span: 5, offset: 0 }} md={{ span: 2, offset: 4 }}  lg={{ span: 2, offset: 5 }}   >

          <SearchBar
            input={input}
            onChange={updateInput}
          />
        </Col>
      </Row>
      <CountryList countryList={countryList} typeSorting={sorting} />
    </Fragment>

  );
}

export default SearchPage