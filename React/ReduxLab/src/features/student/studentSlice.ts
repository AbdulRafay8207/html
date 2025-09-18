// src/features/student/studentSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_URL } from '../../config/url'

// Async thunk to fetch students
export const getData = createAsyncThunk('students/fetch', async () => {
  const res = await fetch(`${API_URL}/students`)
  const data = await res.json()
  return data.data.students
})

// Initial state
const initialState = {
  studentList: [],
  loading: false,
  error: '',
}

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.studentList = action.payload
        state.loading = false
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export default studentSlice.reducer
