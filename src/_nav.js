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
        to: 'http://localhost:8000/data',
        target: '_blank',
      },
      {
        component: CNavItem,
        name: 'Data 2',
        to: 'http://localhost:8000/data1',
        target: '_blank',
      },
      {
        component: CNavItem,
        name: 'Data 3',
        to: 'http://localhost:8000/data2',
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
        name: 'Data 11',
        to: 'http://localhost:8000/data11',
        target: '_blank',
      },
      {
        component: CNavItem,
        name: 'Data 12',
        to: 'http://localhost:8000/data12',
        target: '_blank',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
]

export default _nav
