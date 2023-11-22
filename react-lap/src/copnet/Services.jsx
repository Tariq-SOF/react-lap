import React from 'react'

function Services({server, prise}) {
  return (
    <div className='company'>
        <h3>the Service is: {server}</h3>
        <h3>the expet prise: {prise}</h3>
    </div>
  )
}

export default Services