import React from 'react'
import {Link} from "react-router-dom";

const TabButton = ({title, linkpage}) => {

  return (
    <div className='TabButton'>
      
      <Link to = {linkpage} className = "button">{title}</Link>
      
    </div>
  )
}


TabButton.defaultProps = {
    title : 'Home'
}

export default TabButton
