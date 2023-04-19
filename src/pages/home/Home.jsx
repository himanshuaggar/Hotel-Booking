import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Heaader from '../../components/header/Heaader'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/PropertList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Heaader />
        <div className="mt-12 flex flex-col items-center gap-7">
            <Featured />
            <h1 className='w-5xl text-xl'>Browse by property Type</h1>
            <PropertyList />
            <h1 className="homeTitle">Homes guests love</h1>
            <FeaturedProperties />
            <MailList />
            <Footer />
        </div>
    </div>
  )
}

export default Home