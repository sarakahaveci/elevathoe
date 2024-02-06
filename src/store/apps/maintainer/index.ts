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

// ** Fetch Maintainers
export const fetchData = createAsyncThunk('appMaintainers/fetchData', async (params: DataParams) => {
  console.log("fetching data /apps/maintainers/list");
  const response = await axios.get('/apps/maintainers/list', {
    params
  })

  console.log("fetched data /apps/maintainers/list");

  return response.data
})

// ** Add Maintainer
export const addMaintainer = createAsyncThunk(
  'appMaintainers/addMaintainer',
  async (data: { [key: string]: number | string }, { getState, dispatch }: Redux) => {
    const response = await axios.post('/apps/maintainers/add-maintainer', {
      data
    })
    dispatch(fetchData(getState().maintainer.params))

    return response.data
  }
)

// ** Delete Maintainer
export const deleteMaintainer = createAsyncThunk(
  'appMaintainers/deleteMaintainer',
  async (id: number | string, { getState, dispatch }: Redux) => {
    const response = await axios.delete('/apps/maintainers/delete', {
      data: id
    })
    dispatch(fetchData(getState().maintainer.params))

    return response.data
  }
)

export const appMaintainersSlice = createSlice({
  name: 'appMaintainers',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.maintainers
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default appMaintainersSlice.reducer
