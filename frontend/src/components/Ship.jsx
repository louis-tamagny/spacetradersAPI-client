import { useState } from 'react'
import {
  makeShipAutoExtract,
  makeShipDock,
  makeShipExtract,
  makeShipOrbit,
  makeShipRefuel,
  makeShipSell,
  moveShipTo,
  makeShipJettison,
  makeShipDeliverForContract,
} from '../services/ship'

const Ship = ({ ship }) => {
  const [destination, setDestination] = useState('')

  const handleExtract = (event) => {
    event.preventDefault()
    makeShipExtract(ship.symbol)
  }
  const handleAutoExtract = (event) => {
    event.preventDefault()
    makeShipAutoExtract(ship.symbol)
  }
  const handleOrbit = (event) => {
    event.preventDefault()
    makeShipOrbit(ship.symbol)
  }
  const handleDock = (event) => {
    event.preventDefault()
    makeShipDock(ship.symbol)
  }
  const handleRefuel = (event) => {
    event.preventDefault()
    makeShipRefuel(ship.symbol)
  }

  const handleMoveShipTo = (event) => {
    event.preventDefault()
    moveShipTo(ship.symbol, destination)
  }

  const handleChangeDestination = (event) => {
    event.preventDefault()
    setDestination(event.target.value)
  }

  const handleSell = (event, itemSymbol, units) => {
    event.preventDefault()
    makeShipSell(ship.symbol, itemSymbol, units)
  }

  const handleJettison = (event, itemSymbol, units) => {
    event.preventDefault()
    makeShipJettison(ship.symbol, itemSymbol, units)
  }

  const handleDeliverForContract = (event, itemSymbol, units, contractId) => {
    event.preventDefault()
    makeShipDeliverForContract(ship.symbol, itemSymbol, units, contractId)
  }

  return (
    <div>
      <h3>
        Name: {ship.symbol} (
        <i>
          {ship.frame.symbol} - {ship.registration.role}
        </i>
        )
      </h3>
      <p>
        Waypoint: {ship.nav.waypointSymbol} - {ship.nav.status}
        <br />
        Fuel: {ship.fuel.current}/{ship.fuel.capacity}
        <br />
      </p>
      <div>
        <h4>CARGO</h4>
        <p>
          Capacity: {ship.cargo.units}/{ship.cargo.capacity}
        </p>
        <ul>
          {ship.cargo.inventory.map((item) => (
            <li key={item.symbol}>
              {item.symbol} - {item.units}{' '}
              <button
                className='text-button'
                onClick={(event) => handleSell(event, item.symbol, item.units)}>
                Sell All
              </button>
              <button
                className='text-button'
                onClick={(event) =>
                  handleJettison(event, item.symbol, item.units)
                }>
                Jettison
              </button>
              <button
                className='text-button'
                onClick={(event) =>
                  handleDeliverForContract(event, item.symbol, item.units)
                }>
                Deliver
              </button>
            </li>
          ))}
        </ul>
      </div>
      {
        //SHIP CONTROLS
      }
      <div className='button-grid'>
        <button onClick={(event) => handleOrbit(event)}>Orbit</button>
        <button onClick={(event) => handleDock(event)}>Dock</button>
        <button onClick={handleRefuel}>Refuel</button>
        <button onClick={(event) => handleExtract(event)}>Extract</button>
        <button onClick={(event) => handleAutoExtract(event)}>
          Autoextract --
        </button>
        <input type='text'></input>

        <input
          type='text'
          onChange={handleChangeDestination}></input>
        <button onClick={(event) => handleMoveShipTo(event)}>
          {' '}
          -- Navigate
        </button>
      </div>
    </div>
  )
}

export default Ship
