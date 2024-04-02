import { useEffect, useState } from 'react'
import { getMarketplaceData } from '../services/system'

const Waypoint = ({ waypoint }) => {
  const [marketPlace, setMarketPlace] = useState(null)

  useEffect(() => {
    getMarketplaceData(waypoint.symbol).then((res) => setMarketPlace(res))
  }, [waypoint])

  return (
    <div id='waypoint-description'>
      <div>
        <h3>{waypoint.symbol}</h3>
        <b>{waypoint.type}</b>
        <br />
        <i>{waypoint.faction.symbol}</i>
      </div>
      <div>
        <h4>Traits:</h4>
        {waypoint.traits.map((trait) => (
          <div key={trait.symbol}>{trait.name}</div>
        ))}
      </div>
      {marketPlace && (
        <div>
          <h4>Marketplace:</h4>
          <p>Imports</p>
          <ul>
            {marketPlace.imports.map((item) => (
              <li key={item.symbol}>{item.name}</li>
            ))}
          </ul>
          <p>Exports</p>
          <ul>
            {marketPlace.exports.map((item) => (
              <li key={item.symbol}>{item.name}</li>
            ))}
          </ul>
          <p>Exchanges</p>
          <ul>
            {marketPlace.exchange.map((item) => (
              <li key={item.symbol}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Waypoint
