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
    }
  ]
}

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
  const { q = '', role = null, status = null, currentPlan = null } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = data.customers.filter(
    customer =>
    (
      customer.fullName.toLowerCase().includes(queryLowered)
    )
  )

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
