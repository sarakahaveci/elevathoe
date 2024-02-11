// ** Mock
import mock from 'src/@fake-db/mock'

// ** Types
import { ProjectType } from 'src/types/apps/projectTypes'

const data: { projects: ProjectType[] } = {
  projects: [
    {
      id: 1,
      name: 'Nike',
      customer: 'Cevahir AVM'
    },
    {
      id: 2,
      name: 'Adidas',
      customer: 'Profilo AVM'
    }
  ]
}

// POST: Add new project
mock.onPost('/apps/projects/add-project').reply(config => {
  // Get event from post data
  const project = JSON.parse(config.data).data

  const lastId = Math.max(...data.projects.map(u => u.id), 0)

  project.id = lastId + 1

  data.projects.unshift({ ...project, avatar: '', avatarColor: 'primary', status: 'active' })

  return [201, { project }]
})

// GET: DATA
mock.onGet('/apps/projects/list').reply(config => {
  console.log("in @fake-db /apps/projects/list");
  const { q = '', role = null, status = null, currentPlan = null } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = data.projects.filter(
    project =>
    (
      project.name.toLowerCase().includes(queryLowered),
      project.customer.toLowerCase().includes(queryLowered)
    )
  )

  console.log("returning from @fake-db");
  
  return [
    200,
    {
      allData: data.projects,
      projects: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// DELETE: Deletes project
mock.onDelete('/apps/projects/delete').reply(config => {
  // Get project id from URL
  const projectId = config.data

  const projectIndex = data.projects.findIndex(t => t.id === projectId)
  data.projects.splice(projectIndex, 1)

  return [200]
})
