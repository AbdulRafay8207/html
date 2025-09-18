// src/app/store.ts (or wherever your store is)
import { configureStore } from '@reduxjs/toolkit'
import studentReducer from '../features/student/studentSlice'

export const store = configureStore({
  reducer: {
    student: studentReducer, // ✅ Registered the reducer here
  },
})

export default store

// ✅ Export RootState and AppDispatch types for use in components
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
