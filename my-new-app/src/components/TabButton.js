import React from 'react'

const TabButton = ({title}) => {
  return (
    <div className='TabButton'>
      <a className='TabButtonLink' href = "https://uwprod-my.sharepoint.com/:w:/g/personal/lsimonen_wisc_edu/EZ1WbUAQKDtCoU3eg64X1MsBoL-iYzbqCLm65KJXROMckQ">
      <button className = "button" >{title}</button>
      </a>
    </div>
  )
}


TabButton.defaultProps = {
    title : 'Home'
}

export default TabButton
