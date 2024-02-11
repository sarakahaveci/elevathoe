// ** Mock
import mock from 'src/@fake-db/mock'

// ** Types
import { ElevatorType } from 'src/types/apps/elevatorTypes'

const data: { elevators: ElevatorType[] } = {
  elevators: [
    {
      id: 1,
      name: 'Elev-1',
      project: 'Nike',
      customer: 'Cevahir AVM',
      uniqueId: '11-22-33',
    },
    {
      id: 2,
      name: 'Elev-2',
      project: 'Adidas',
      customer: 'Profilo AVM',
      uniqueId: '11-22-33',
    }
  ]
}

// POST: Add new elevator
mock.onPost('/apps/elevators/add-elevator').reply(config => {
  // Get event from post data
  const elevator = JSON.parse(config.data).data

  const lastId = Math.max(...data.elevators.map(u => u.id), 0)

  elevator.id = lastId + 1

  data.elevators.unshift({ ...elevator, avatar: '', avatarColor: 'primary', status: 'active' })

  return [201, { elevator }]
})

// GET: DATA
mock.onGet('/apps/elevators/list').reply(config => {
  console.log("in @fake-db /apps/elevators/list");
  const { q = '', role = null, status = null, currentPlan = null } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = data.elevators.filter(
    elevator =>
    (
      elevator.name.toLowerCase().includes(queryLowered),
      elevator.customer.toLowerCase().includes(queryLowered)
    )
  )

  console.log("returning from @fake-db");
  
  return [
    200,
    {
      allData: data.elevators,
      elevators: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// DELETE: Deletes elevator
mock.onDelete('/apps/elevators/delete').reply(config => {
  // Get elevator id from URL
  const elevatorId = config.data

  const elevatorIndex = data.elevators.findIndex(t => t.id === elevatorId)
  data.elevators.splice(elevatorIndex, 1)

  return [200]
})
