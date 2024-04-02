import { useState, useEffect } from 'react'
import { getSystemWaypoint } from '../services/system'
import Waypoint from './Waypoint'

const Map = () => {
  const [waypoints, setWaypoints] = useState([])
  const [activeWaypoint, setActiveWaypoint] = useState(null)

  useEffect(() => {
    getSystemWaypoint().then((res) => {
      setWaypoints(res)
      setActiveWaypoint(res[0])
    })
  }, [])

  if (waypoints.length === 0) {
    return <div>loading...</div>
  }

  return (
    <div>
      <div>
        <div id='map'>
          <div id='map-center'>
            {waypoints.map((waypoint) => (
              <div
                className='waypoint'
                key={waypoint.symbol}
                style={{
                  left: waypoint.x / 2,
                  top: waypoint.y / 2,
                  borderColor:
                    waypoint.symbol === activeWaypoint.symbol ? 'red' : 'white',
                }}
                onClick={(event) => {
                  event.preventDefault()
                  setActiveWaypoint(waypoint)
                }}></div>
            ))}
          </div>
        </div>
      </div>

      <Waypoint waypoint={activeWaypoint} />
    </div>
  )
}

export default Map
