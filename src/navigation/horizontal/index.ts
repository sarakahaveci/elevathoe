// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      icon: 'mdi:home-outline',
      title: 'Dashboard',
      path: '/dashboards/analytics'
    },
    {
      icon: 'mdi:apps',
      title: 'Apps',
      children: [
        {
          title: 'Customers',
          icon: 'mdi:account-outline',
          children: [
            {
              title: 'List',
              path: '/apps/user/list'
            }
          ]
        }
      ]
    }
  ]
}

export default navigation
