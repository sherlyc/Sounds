import React from 'react'

export default (props) => {
  return (
    <div className="tracks-list">
      <h2>Tracks</h2>
      <ul>
      {props.sounds.map((sound, i) => {
        return (<li key={i}>{sound.title}</li>)
      })}
      </ul>
    </div>
  )

}
