import React from 'react'
import Companies from './Companies'

function Programers({naame, programlanguages, expertyear, Companyname,naame1, programlanguages1, expertyear1, Companyname1,naame2, programlanguages2, expertyear2, Companyname2}) {
  return (
    <div className='allImployy'>
    <div className='program' >
        <h2>name:{naame}</h2>
        <h2>programming languages: {programlanguages}</h2>
        <h2>expert year: {expertyear}</h2>
        <h2>Company name: {Companyname}</h2>      
    </div>
    <div className='program' >
        <h2>name: {naame1}</h2>
        <h2>programming languages: {programlanguages1}</h2>
        <h2>expert year: {expertyear1}</h2>
        <h2>Company name: {Companyname1}</h2>      
    </div>
    <div className='program'>
        <h2>name:{naame2}</h2>
        <h2>programming languages: {programlanguages2}</h2>
        <h2>expert year: {expertyear2}</h2>
        <h2>Company name: {Companyname2}</h2>      
    </div>
   
    
    </div>
  )
}

export default Programers