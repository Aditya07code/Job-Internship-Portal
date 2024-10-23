import React from 'react'
import Navbar from '../src/components/ui/shared/Navbar'
import HeroSection from '../src/components/HeroSection'
import CategoryCarousel from './components/CategoryCarousel'
import LatestJobs from './components/LatestJobs'
import Footer from './components/ui/shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
       <Footer />
    </div>
  )
}

export default Home