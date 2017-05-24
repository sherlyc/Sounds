import React from 'react'

export default (props) => {
  return (
    <div className="tracks-list">
      <h2>Tracks</h2>
      <ul>
      {props.sounds.map((sound, i) => {
        return (<li key={i}><a href={sound.permalink_url} target='_blank'>{sound.title}</a></li>)
      })}
      </ul>
    </div>
  )

}
