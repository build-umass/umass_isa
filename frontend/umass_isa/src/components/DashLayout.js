// Compontent Part of Dash after a user has logged in

import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const DashLayout = () => {
  return (
    <>
        {/* Dash header will now be on every page on the protected part of our site */}
        <DashHeader /> 
        {/* Outlet is wrapped in div to add different styles to our portected area */}
        <div className="dash-container">
            <Outlet/>
        </div> 
        <DashFooter />
    </>
  )
}

export default DashLayout