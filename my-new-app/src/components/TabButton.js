import React from 'react'

const TabButton = ({title}) => {
  return (
    <div className='TabButton'>
      <button className = "button" >{title}</button>
    </div>
  )
}

TabButton.defaultProps = {
    title : 'Home'
}

export default TabButton
