import React, { useState, useEffect, Fragment } from 'react';
import SearchBar from './SearchBar';
import CountryList from './CountryList';
import { Container,  Row, Col, Button } from 'react-bootstrap'

const SearchPage = ({ Covid19data = [] }) => {
  const TagNoneStyling = {
    marginRight: "0.5rem",
    borderRadius: "500px",
    border: "none",
  };
  const TagClickStyling = {
    color:"#fff",
    marginRight: "0.5rem",
    background: "#4051A6",
    border: "none", borderRadius: "500px"
  };

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
      <h2 className="text-center">Covid19 Counties update</h2>
      <Row xs={12} md={12} lg={12}  >

        <Col xs={12} md={6} lg={6} className="col-centered mb-2" >
          {
            Object.entries(ListSorting).map(([key, typeSoting]) => (
              <Fragment>
                <Button
                  variant="light"
                  onClick={updateSorting}
                  style={sorting === key ? TagClickStyling : TagNoneStyling}
                  className="mr-2"
                  value={key} className="">{typeSoting} </Button>{'  '}
              </Fragment>


            ))
          }

        </Col>
        <Col xs={12} md={6} lg={4} className="col-centered " >
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