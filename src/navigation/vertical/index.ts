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
      icon: 'mdi:email-outline',
      path: '/apps/email'
    },
    {
      title: 'Asansorler',
      icon: 'mdi:message-outline',
      path: '/apps/chat'
    },
    {
      title: 'Projeler',
      icon: 'mdi:calendar-blank-outline',
      path: '/apps/calendar'
    },
    {
      sectionTitle: 'Firma Bilgileri'
    },
    {
      title: 'Bakimcilar',
      icon: 'mdi:format-letter-case',
      path: '/ui/typography'
    },
    {
      title: 'Kullanicilar',
      path: '/ui/icons',
      icon: 'mdi:google-circles-extended'
    },
    {
      title: 'Musteriler',
      icon: 'mdi:calendar-blank-outline',
      path: '/apps/user/list'
    }
  ]
}

export default navigation