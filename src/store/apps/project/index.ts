// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

interface DataParams {
  q: string
  role: string
  status: string
  currentPlan: string
}

interface Redux {
  getState: any
  dispatch: Dispatch<any>
}

// ** Fetch Projects
export const fetchData = createAsyncThunk('appProjects/fetchData', async (params: DataParams) => {
  console.log("fetching data /apps/projects/list");
  const response = await axios.get('/apps/projects/list', {
    params
  })

  console.log("fetched data /apps/projects/list");

  return response.data
})

// ** Add Project
export const addProject = createAsyncThunk(
  'appProjects/addProject',
  async (data: { [key: string]: number | string }, { getState, dispatch }: Redux) => {
    const response = await axios.post('/apps/projects/add-project', {
      data
    })
    dispatch(fetchData(getState().project.params))

    return response.data
  }
)

// ** Delete Project
export const deleteProject = createAsyncThunk(
  'appProjects/deleteProject',
  async (id: number | string, { getState, dispatch }: Redux) => {
    const response = await axios.delete('/apps/projects/delete', {
      data: id
    })
    dispatch(fetchData(getState().project.params))

    return response.data
  }
)

export const appProjectsSlice = createSlice({
  name: 'appProjects',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.projects
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default appProjectsSlice.reducer
