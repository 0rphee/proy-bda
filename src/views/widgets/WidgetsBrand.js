import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'


const WidgetsBrand = (props) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
<CCol sm={6} xl={4} xxl={3}>
  <CWidgetStatsD
    {...(props.withCharts && {
      chart: (
        <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
          <span className="text-white" style={{ fontSize: '20px' }}>Single-player</span>
        </div>
      ),
    })}
    values={[
      { title:"Count", value: (25678).toLocaleString()},
      { title: "Average Owners" ,value: (106503).toLocaleString() },
    ]}
    style={{
      '--cui-card-cap-bg': '#3b5998',
    }}
  />
</CCol>

<CCol sm={6} xl={4} xxl={3}>
  <CWidgetStatsD
    {...(props.withCharts && {
      chart: (
        <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
          <span className="text-white" style={{ fontSize: '20px' }}>Multi-player</span>
        </div>
      ),
    })}
    values={[
      { title:"Count", value: (3974).toLocaleString()},
      { title: "Average Owners" ,value: (445575).toLocaleString()},
    ]}
    style={{
      '--cui-card-cap-bg': '#3b5998',
    }}
  />
</CCol>
<CCol sm={6} xl={4} xxl={3}>
  <CWidgetStatsD
    {...(props.withCharts && {
      chart: (
        <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
          <span className="text-white" style={{ fontSize: '20px' }}>Online Multi-Player</span>
        </div>
      ),
    })}
    values={[
      { title:"Count", value: (2487).toLocaleString()},
      { title: "Average Owners" ,value: (289413).toLocaleString()},
    ]}
    style={{
      '--cui-card-cap-bg': '#3b5998',
    }}
  />
</CCol>
<CCol sm={6} xl={4} xxl={3}>
  <CWidgetStatsD
    {...(props.withCharts && {
      chart: (
        <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
          <span className="text-white" style={{ fontSize: '20px' }}>Shared/Split Screen</span>
        </div>
      ),
    })}
    values={[
      { title:"Count", value: (2152).toLocaleString()},
      { title: "Average Owners" ,value: (107196).toLocaleString()},
    ]}
    style={{
      '--cui-card-cap-bg': '#3b5998',
    }}
  />
</CCol>
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsBrand
