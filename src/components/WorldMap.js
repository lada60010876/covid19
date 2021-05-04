import React, { useState, useEffect, Fragment } from "react"
import { geoEqualEarth, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const projection = geoEqualEarth()
  .scale(160)
  .translate([800 / 2, 450 / 2])

const WorldMap = ({ Covid19data = [] }) => {
  const [geographies, setGeographies] = useState([])
  const [countries, setCountries] = useState([])

  const [Clickedcountry, setClickedcountry] = useState(false)

  useEffect(() => {
    fetch("/world-110m.json")
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(worlddata => {
          console.log(worlddata)
          setGeographies(feature(worlddata, worlddata.objects.countries).features)
        })
      })
    fetch("/world-110m-country-codes.json")
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(worlddata => {
          console.log(worlddata)
          setCountries(worlddata)
        })
      })
  }, [])

  const handleCountryClick = (d, countryIndex) => {
    const index = countries.findIndex(element => element.id == parseInt(d.id, 10))
    const Countrydetail = Covid19data.find(element => element.CountryCode == countries[index].code)
    console.log(Countrydetail)
    setClickedcountry({ countryIndex, Countrydetail })
  }



  return (

    <svg minwidth={"100%"} height={"100%"} viewBox="0 0 800 450" className="world-map">
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip >
            Tooltip on <strong>"</strong>.
        </Tooltip>
        }
      >
        <g className="countries">
          {
            geographies.map((d, i) => (
              <Fragment>

                <path
                  key={`path-${i}`}
                  d={geoPath().projection(projection)(d)}
                  className="country"
                  fill={Clickedcountry.countryIndex == i ? `rgba(66, 135, 245)` : `rgba(220,220,220,${1 / geographies.length * i})`}

                  stroke="#FFFFFF"
                  strokeWidth={0.5}
                  onDragOver={() => handleCountryClick(d, i)}
                  onClick={() => handleCountryClick(d, i)}
                />
              </Fragment>


            ))
          }
        </g>

      </OverlayTrigger>

    </svg>
  )
}

export default WorldMap