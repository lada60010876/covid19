import React, { useState, useEffect, Fragment, createRef } from "react"
import { geoEqualEarth, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import { Tooltip } from "react-svg-tooltip";

const projection = geoEqualEarth()
  .scale(160)
  .translate([800 / 2, 450 / 2])

const WorldMap = ({ Covid19data = [] }) => {
  const circleRef = createRef(null);

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
          setCountries(worlddata)
        })
      })
  }, [])

  const handleCountryClick = (d, countryIndex) => {
    const index = countries.findIndex(element => element.id === parseInt(d.id, 10))
    const Countrydetail = Covid19data.find(element => element.CountryCode === countries[index].code)
    setClickedcountry({ countryIndex, Countrydetail })
    circleRef.current.focus();
  }



  return (

    <svg minwidth={"100%"} height={"100%"} viewBox="0 0 800 450" className="world-map">
      <g className="countries ">
        {
          geographies.map((d, i) => (
            <Fragment key={`path-${i}`}>
              <path
              
                d={geoPath().projection(projection)(d)}
                className="country element"
                fill={Clickedcountry.countryIndex === i ? `rgba(66, 135, 245)` : `rgba(220,220,220,${1 / geographies.length * i})`}
                stroke="#FFFFFF"
                strokeWidth={0.5}
                onMouseOver={() => handleCountryClick(d, i)}

                onClick={() => handleCountryClick(d, i)}
                ref={circleRef}

              />
              <Tooltip triggerRef={circleRef}  >
                <rect

                  rx={0.6}
                  ry={0.5}
                  fill="transparent"
                />
                <text x={5} y={5} fontSize={16} fill="white">
                  {Clickedcountry && Clickedcountry.Countrydetail && Clickedcountry.Countrydetail.Country}
                </text>
                <text x={5} y={25} fontSize={18} fill="white"  >
                  {Clickedcountry && Clickedcountry.Countrydetail && Clickedcountry.Countrydetail.NewConfirmed}
                </text>
              </Tooltip>
            </Fragment>



          ))
        }
      </g>

    </svg>
  )
}

export default WorldMap