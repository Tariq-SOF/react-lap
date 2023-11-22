import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Programers from './copnet/Programers'
import Companies from './copnet/Companies'
import Services from './copnet/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   
  

    <Companies Companyname= "Apple" emplooyCompany= "4916400"  YearCompany= "1967" />
    <Services server= "Consumer electronics and software" prise= "From 1000$"/>
    <Programers naame='Dimah' programlanguages='Software development' expertyear='5' Companyname='Apple' naame1='Ahmed' programlanguages1='Software development' expertyear1='4' Companyname1='Apple' naame2='Abdullah' programlanguages2='Software development' expertyear2='3' Companyname2='Apple' />
  

    <Companies Companyname= "Twaq Academy" emplooyCompany= "202"  YearCompany= "2019" />
    <Services server= "BootCamps" prise= "From 0$"/>
    <Programers naame='Mohamed' programlanguages='Software development' expertyear='3' Companyname='Twaq Academy' naame1='Ahmed' programlanguages1='Software development' expertyear1='4' Companyname1='Twaq Academy' naame2='Abdullah' programlanguages2='Software development' expertyear2='5' Companyname2='Twaq Academy' />

    <Companies Companyname= "Alibaba " emplooyCompany= "3029"  YearCompany= "2018" />
    <Services server= "Cloud Servases" prise= "From 1000$"/>
    <Programers naame='Saleh' programlanguages='c++' expertyear='4' Companyname='Apple' naame1='Ahmed' programlanguages1='Software development' expertyear1='2' Companyname1='Apple' naame2='Abdullah' programlanguages2='Software development' expertyear2='5' Companyname2='Apple' />
  
 

    
    </>
  )
}

export default App
