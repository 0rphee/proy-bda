import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://upmoodlecloud.up.edu.mx/" target="_blank" rel="noopener noreferrer">
          Equipo Maravilla
        </a>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://www.up.edu.mx/" target="_blank" rel="noopener noreferrer">
          Universidad Panamericana
        </a>
        <h1> Saludos Cordiales</h1>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
