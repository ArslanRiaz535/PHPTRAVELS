import React from 'react'
import {CssBaseline, Divider } from '@mui/material'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServiceCards from './components/ServiceCards'
import BookingSection from './components/BookingSection'
import ApiSection from './components/ApiSection'
import AdminPanel from './components/AdminPanel'
import AppStore from './components/AppStore'
import AutoMate from './components/AutoMate'
import SocialNetwork from './components/SocialNetwork'
import Discounts from './components/Discounts'
import CustomerSupport from './components/CustomerSupport'
import SupportTeam from './components/SupportTeam'
import AggregatedSolution from './components/AggregatedSolution'
import GrowingSection from './components/GrowingSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <CssBaseline/>
     <Header/>  
     <Divider/>
     <HeroSection/>
     <ServiceCards/>
     <BookingSection/>
     <ApiSection/>
     <AdminPanel/>
     <AppStore/>
     <AutoMate/>
     <SocialNetwork/>
     <Discounts/>
     <CustomerSupport/>
     <SupportTeam/>
     <AggregatedSolution/>
     <GrowingSection/>
     <NewsletterSection/>
     <Footer/>

    </>
  )
}

export default App