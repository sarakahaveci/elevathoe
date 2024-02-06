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
      sectionTitle: 'Kurtarma Modulu'
    },
    {
      title: 'Arama Kayitlari',
      icon: 'ri:customer-service-fill',
      path: '/apps/email'
    },
    {
      title: 'Asansorler',
      icon: 'game-icons:elevator',
      path: '/apps/chat'
    },
    {
      title: 'Projeler',
      icon: 'ph:projector-screen-chart-fill',
      path: '/apps/calendar'
    },
    {
      sectionTitle: 'Firma Bilgileri'
    },
    {
      title: 'Bakimcilar',
      icon: 'wpf:maintenance',
      children: [
        {
          title: 'Organizasyon',
          path: '/pages/wizard-examples/checkout'
        },
        {
          title: 'Proje',
          path: '/pages/wizard-examples/property-listing'
        },
        {
          title: 'Asansor',
          path: '/pages/wizard-examples/create-deal'
        }
      ]
    },
    {
      title: 'Musteriler',
      icon: 'bi:building-fill',
      path: '/apps/customer/list'
    },
    {
      title: 'Kullanicilar',
      icon: 'mdi:account',
      path: '/apps/user/list'
    }

  ]
}

export default navigation