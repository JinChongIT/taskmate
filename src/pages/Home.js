import React from 'react'
import { Header } from '../components/Header'
import { TaskList } from '../components/TaskList'

export const Home = () => {
  return (
    <div className="App">
    <Header />
    <h1>Hello World</h1>
    <TaskList />
  </div>
  )
}
