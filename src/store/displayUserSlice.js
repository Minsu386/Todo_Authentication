import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async() => {
    const response = await axios.get('/api/users')
    return response.data;
  }
)



const displayUserSlice = createSlice({
  name: 'displayUsers',
  initialState: {},
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchUsers.fulfilled, (state,action) => {
      return action.payload
    })
  })
})

export default displayUserSlice;
export {fetchUsers};