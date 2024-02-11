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

// ** Fetch elevators
export const fetchData = createAsyncThunk('appElevators/fetchData', async (params: DataParams) => {
  console.log("fetching data /apps/elevators/list");
  const response = await axios.get('/apps/elevators/list', {
    params
  })

  console.log("fetched data /apps/elevators/list");

  return response.data
})

// ** Add elevator
export const addElevator = createAsyncThunk(
  'appElevators/addElevator',
  async (data: { [key: string]: number | string }, { getState, dispatch }: Redux) => {
    const response = await axios.post('/apps/elevators/add-elevator', {
      data
    })
    dispatch(fetchData(getState().elevator.params))

    return response.data
  }
)

// ** Delete elevator
export const deleteElevator = createAsyncThunk(
  'appElevators/deleteElevator',
  async (id: number | string, { getState, dispatch }: Redux) => {
    const response = await axios.delete('/apps/elevators/delete', {
      data: id
    })
    dispatch(fetchData(getState().elevator.params))

    return response.data
  }
)

export const appElevatorsSlice = createSlice({
  name: 'appElevators',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.elevators
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default appElevatorsSlice.reducer
