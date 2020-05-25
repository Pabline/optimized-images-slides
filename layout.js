import React from 'react'
import sopra from './sopra-logo.png';


const sectionStyle = {
  width: '100vw',
  height: '100vh',
  padding: '0 3rem',
  maxHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const childrenStyle = {
  height: '80vh',
  width: '90vw'
}

const footer = {
  width: '90vw',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '10vh'
}

const footerImage = {
  height: '10vh'
}

const footerSpan = {
  fontSize: '2rem',
  fontStyle: 'bold'
}

export default ({ children }) => (
    <div
    style={sectionStyle}
    >

      <div style={childrenStyle}>
        {children}
      </div>

      <footer style={footer}>
        <img src={sopra} style={footerImage}/> <span style={footerSpan}>Smart Images Delivery</span> <span style={footerSpan}>@PablineMN</span>
      </footer>

    </div>
  
)