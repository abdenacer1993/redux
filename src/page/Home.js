import React from 'react'
import AddItem from '../component/AddItem/AddItem'
import TodoList from '../component/TodoList/TodoList'
import './Home.css'


const Home = () => {
  return (
    <div className='posetion'>
      <div className='container'>
        <AddItem />
        <TodoList />
      </div>
    </div>
  )
}

export default Home