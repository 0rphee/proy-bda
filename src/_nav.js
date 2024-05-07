import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'Nuevo',
    },
  },
  {
    component: CNavTitle,
    name: 'Componentes',
  },
  {
    component: CNavGroup,
    name: 'Datos',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Data 1',
        to: 'http://localhost:8000/data1',
        target: '_blank',
      },
      {
        component: CNavItem,
        name: 'Data 2',
        to: 'http://localhost:8000/data2',
        target: '_blank',
      },
      {
        component: CNavItem,
        name: 'Data 3',
        to: 'http://localhost:8000/data3',
        target: '_blank',
      },
      {
        component: CNavItem,
        name: 'Data 4',
        to: 'http://localhost:8000/data4',
        target: '_blank',
      },
      {
        component: CNavItem,
        name: 'Data 5',
        to: 'http://localhost:8000/data5',
        target: '_blank',
      },
      {
        component: CNavItem,
        name: 'Data 6',
        to: 'http://localhost:8000/data6',
        target: '_blank',
      },
      {
        component: CNavItem,
        name: 'Data 7',
        to: 'http://localhost:8000/data7',
        target: '_blank',
      },
      {
        component: CNavItem,
        name: 'Data 8',
        to: 'http://localhost:8000/data8',
        target: '_blank',
      },
      {
        component: CNavItem,
        name: 'Data 9',
        to: 'http://localhost:8000/data9',
        target: '_blank',
      },
      {
        component: CNavItem,
        name: 'Data 10',
        to: 'http://localhost:8000/data10',
        target: '_blank',
      },
      {
        component: CNavItem,
        name: 'Data 11',
        to: 'http://localhost:8000/data11',
        target: '_blank',
      },
    ],
  },
]

export default _nav
