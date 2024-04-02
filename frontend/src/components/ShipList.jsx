import { useState } from 'react'
import Ship from './Ship'
import { getAgentShips } from '../services/agent'

const ShipList = () => {
  const [ships, setShips] = useState([])
  const [activeShip, setActiveShip] = useState(null)

  useState(() => {
    getAgentShips().then((res) => {
      setShips(res)
      setActiveShip(res[0])
    })
  }, [])

  const iconTable = {
    ['COMMAND']: '../../ressources/icons/rocket.png',
    ['SATELLITE']: '../../ressources/icons/sputnik.svg',
    ['EXCAVATOR']: '../../ressources/icons/satellite.png',
  }

  if (ships.length === 0) {
    return <div>loading...</div>
  }

  return (
    <div>
      <div>
        <div id='ship-list'>
          {ships.length > 0 &&
            ships.map((ship) => (
              <img
                src={iconTable[ship.registration.role]}
                className='ship-icon'
                key={ship.symbol}
                onClick={(event) => {
                  event.preventDefault()
                  setActiveShip(ship)
                }}
              />
            ))}
        </div>

        {activeShip && <Ship ship={activeShip} />}
      </div>
    </div>
  )
}

export default ShipList
