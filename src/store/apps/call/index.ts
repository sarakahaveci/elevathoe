// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

interface DataParams {
  q: string
  dates?: Date[]
  status: string
}

interface Redux {
  getState: any
  dispatch: Dispatch<any>
}

// ** Fetch Calls
export const fetchData = createAsyncThunk('appCall/fetchData', async (params: DataParams) => {
  const response = await axios.get('/apps/call/calls', {
    params
  })

  return response.data
})

export const deleteCall = createAsyncThunk(
  'appCall/deleteData',
  async (id: number | string, { getState, dispatch }: Redux) => {
    const response = await axios.delete('/apps/call/delete', {
      data: id
    })
    await dispatch(fetchData(getState().call.params))

    return response.data
  }
)

export const appCallSlice = createSlice({
  name: 'appCall',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.calls
      state.params = action.payload.params
      state.allData = action.payload.allData
      state.total = action.payload.total
    })
  }
})

export default appCallSlice.reducer
