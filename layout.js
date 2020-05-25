import React from 'react'
import sopra from "./background-sopra.png";


const sectionStyle = {
  width: '100vw',
  height: '100vw',
  padding: '0 3rem',
  background: sopra
}

const layoutStyle = {
  background: '#adadad'
}

export default ({ children }) => (
  <div class={layoutStyle}>
    <div
    style={sectionStyle}
    >
      {children}

    </div>
  </div>
  
)