import React from 'react'
import UsersTable from '../../components/UsersTable'

const Home = () => {

  return (
    <section className='home-page'>
      <div className="user-table">
        <UsersTable />
      </div>
    </section>
  )
}

export default Home