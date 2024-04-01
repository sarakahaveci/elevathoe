// ** Mock
import mock from 'src/@fake-db/mock'

// ** Types
import { MaintainerTypes } from 'src/types/apps/maintainerTypes'

const data: { maintainers: MaintainerTypes[] } = {
  maintainers: [
    {
      id: 1,
      fullName: 'Deniz Yildirim',
      phoneNumber: '05533366024'
    },
    {
      id: 2,
      fullName: 'Cevdet Yildirim',
      phoneNumber: '05533366024'
    }
  ]
}

// POST: Add new maintainer
mock.onPost('/apps/maintainers/add-maintainer').reply(config => {
  // Get event from post data
  const maintainer = JSON.parse(config.data).data

  const lastId = Math.max(...data.maintainers.map(u => u.id), 0)

  maintainer.id = lastId + 1

  data.maintainers.unshift({ ...maintainer, avatar: '', avatarColor: 'primary', status: 'active' })

  return [201, { maintainer }]
})

// GET: DATA
mock.onGet('/apps/maintainers/list').reply(config => {
  //("in @fake-db /apps/maintainers/list");
  const { q = '', role = null, status = null, currentPlan = null } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = data.maintainers.filter(
    maintainer =>
    (
      maintainer.fullName.toLowerCase().includes(queryLowered),
      maintainer.phoneNumber.toLowerCase().includes(queryLowered)
    )
  )

  //("returning from @fake-db");
  
  return [
    200,
    {
      allData: data.maintainers,
      maintainers: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// DELETE: Deletes maintainer
mock.onDelete('/apps/maintainers/delete').reply(config => {
  // Get maintainer id from URL
  const maintainerId = config.data

  const maintainerIndex = data.maintainers.findIndex(t => t.id === maintainerId)
  data.maintainers.splice(maintainerIndex, 1)

  return [200]
})
