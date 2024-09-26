import React from 'react'
import image from '../Assets/Pics/5.png'
import { Link } from 'react-router-dom'
const Subscription = () => {
  return (
    <div className='pt-48 flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-semibold leading-10 '>
        Welcome to Subscriptions Link
      </h1>
      <p className='p-7 text-gray-400 max-w-xl text-center'>
        There are no Subscriptions added yet kickstart your business by adding a your frist subscription.
      </p>
      <Link to='/addSubscription' className='py-3 px-3 bg-sky-500 text-white font-semibold rounded'>
        Add Subscription
      </Link>
      <div>
        <img src={image} alt='' width={500} height={500}/>
      </div>
    </div>
  )
}

export default Subscription
