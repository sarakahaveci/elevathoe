// ** Mock
import mock from 'src/@fake-db/mock'

// ** Types
import { CustomerTypes, ProjectListDataType } from 'src/types/apps/customerTypes'

const data: { customers: CustomerTypes[] } = {
  customers: [
    {
      id: 1,
      fullName: 'Cevahir AVM'
    },
    {
      id: 2,
      fullName: 'İstinye AVM'
    },
    {
      id: 3,
      fullName: 'Mahmut AVM'
    }
  ]
}

const projectListData: ProjectListDataType[] = [
  {
    id: 1,
    hours: '18:42',
    progressValue: 78,
    totalTask: '122/240',
    progressColor: 'success',
    projectType: 'React Project',
    projectTitle: 'BGC eCommerce App',
    img: '/images/icons/project-icons/react.png'
  },
  {
    id: 2,
    hours: '20:42',
    progressValue: 18,
    totalTask: '9/56',
    progressColor: 'error',
    projectType: 'Figma Project',
    projectTitle: 'Falcon Logo Design',
    img: '/images/icons/project-icons/figma.png'
  },
  {
    id: 3,
    hours: '120:87',
    progressValue: 62,
    totalTask: '290/320',
    progressColor: 'primary',
    projectType: 'VueJs Project',
    projectTitle: 'Dashboard Design',
    img: '/images/icons/project-icons/vue.png'
  },
  {
    id: 4,
    hours: '89:19',
    progressValue: 8,
    totalTask: '7/63',
    progressColor: 'error',
    projectType: 'Xamarin Project',
    projectTitle: 'Foodista Mobile App',
    img: '/images/icons/project-icons/xamarin.png'
  },
  {
    id: 5,
    hours: '230:10',
    progressValue: 49,
    totalTask: '120/186',
    progressColor: 'warning',
    projectType: 'Python Project',
    projectTitle: 'Dojo React Project',
    img: '/images/icons/project-icons/python.png'
  },
  {
    id: 6,
    hours: '342:41',
    progressValue: 92,
    totalTask: '99/109',
    progressColor: 'success',
    projectType: 'Sketch Project',
    projectTitle: 'Blockchain Website',
    img: '/images/icons/project-icons/sketch.png'
  },
  {
    id: 7,
    hours: '12:45',
    progressValue: 88,
    totalTask: '98/110',
    progressColor: 'success',
    projectType: 'HTML Project',
    projectTitle: 'Hoffman Website',
    img: '/images/icons/project-icons/html5.png'
  }
]

// POST: Add new customer
mock.onPost('/apps/customers/add-customer').reply(config => {
  // Get event from post data
  const customer = JSON.parse(config.data).data

  const lastId = Math.max(...data.customers.map(u => u.id), 0)

  customer.id = lastId + 1

  data.customers.unshift({ ...customer, avatar: '', avatarColor: 'primary', status: 'active' })

  return [201, { customer }]
})

// GET: DATA
mock.onGet('/apps/customers/list').reply(config => {
  console.log("in @fake-db /apps/customers/list");
  const { q = '', role = null, status = null, currentPlan = null } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = data.customers.filter(
    customer =>
    (
      customer.fullName.toLowerCase().includes(queryLowered)
    )
  )

  console.log("returning from @fake-db");
  
  return [
    200,
    {
      allData: data.customers,
      customers: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// DELETE: Deletes customer
mock.onDelete('/apps/customers/delete').reply(config => {
  // Get customer id from URL
  const customerId = config.data

  const customerIndex = data.customers.findIndex(t => t.id === customerId)
  data.customers.splice(customerIndex, 1)

  return [200]
})

// GET: DATA
mock.onGet('/apps/customers/project-list').reply(config => {
  const { q = '' } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = projectListData.filter(
    customer =>
      customer.projectTitle.toLowerCase().includes(queryLowered) ||
      customer.projectType.toLowerCase().includes(queryLowered) ||
      customer.totalTask.toLowerCase().includes(queryLowered) ||
      customer.hours.toLowerCase().includes(queryLowered) ||
      String(customer.progressValue).toLowerCase().includes(queryLowered)
  )

  return [200, filteredData]
})
