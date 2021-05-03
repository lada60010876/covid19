import React, { useState, useEffect } from "react"
import { geoEqualEarth, geoPath } from "d3-geo"
import { feature } from "topojson-client"

const projection = geoEqualEarth()
  .scale(160)
  .translate([800 / 2, 450 / 2])

const WorldMap = () => {
  const [geographies, setGeographies] = useState([])
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
  }, [])

  const handleCountryClick = countryIndex => {
    setClickedcountry(countryIndex)
  }



  return (
    <svg width={"100%"} height={"100%"} viewBox="0 0 800 450" >
      {console.log(geographies)}
      <g className="countries">
        {
          geographies.map((d, i) => (

            <path
              key={`path-${i}`}
              d={geoPath().projection(projection)(d)}
              className="country"
              fill={Clickedcountry == i ? `rgba(66, 135, 245)` : `rgba(38,50,56,${1 / geographies.length * i})`}
           
              stroke="#FFFFFF"
              strokeWidth={0.5}
              onClick={() => handleCountryClick(i)}
            />
          ))
        }
      </g>

    </svg>
  )
}

export default WorldMap