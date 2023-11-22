import React from 'react'
import Programers from './Programers'
import Services from './Services'
function Companies({Companyname, emplooyCompany, YearCompany}) {
  return (
   <div>
    
    <h1>Company name:{Companyname}</h1>
    <h3>number of emplooy in company: {emplooyCompany} </h3>
    <h3>Year of company establishment: {YearCompany} </h3>
    

   </div>
  )
}

export default Companies