// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: 'mdi:home-outline',
      path: '/dashboards/analytics'
    },
    {
      sectionTitle: 'Rescue'
    },
    {
      title: 'Records',
      icon: 'ri:customer-service-fill',
      path: '/apps/call/list'
    },
    {
      title: 'Elevators',
      icon: 'game-icons:elevator',
      path: '/apps/elevator/list'
    },
    {
      title: 'Projects',
      icon: 'ph:projector-screen-chart-fill',
      path: '/apps/project/list'
    },
    {
      sectionTitle: 'Company Info'
    },
    {
      title: 'Maintainers',
      icon: 'wpf:maintenance',
      path: '/apps/maintainer/list'
    },
    {
      title: 'Customers',
      icon: 'bi:building-fill',
      path: '/apps/customer/list'
    },
    {
      title: 'Users',
      icon: 'mdi:account',
      path: '/apps/user/list'
    }

  ]
}

export default navigation
