import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StudentCard from './StudentCard'
import { getData } from '../features/student/studentSlice'
import type { RootState, AppDispatch } from '../app/store'

const StudentsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>() // ✅ typed dispatch

  const { studentList, loading, error } = useSelector((state: RootState) => state.student)

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <span className="text-xl font-semibold">Loading...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <span className="text-red-600 text-xl">Error: {error}</span>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Students Result</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {studentList.map((student: any) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  )
}

export default StudentsList
