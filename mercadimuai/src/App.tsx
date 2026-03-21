import { useState, useEffect } from 'react'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { AdvantagesSection } from './components/AdvantagesSection'
import { MarketDataSection } from './components/MarketDataSection'
import { OfferingsSection } from './components/OfferingsSection'
import { PricingProfitSection } from './components/PricingProfitSection'
import { RevenueSection } from './components/RevenueSection'
import { StepsSection } from './components/StepsSection'
import { Footer } from './components/Footer'
import { PrivacyPolicy } from './components/PrivacyPolicy'

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy'>('home')

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy') {
        setCurrentPage('privacy')
      } else {
        setCurrentPage('home')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white overflow-x-hidden">
      {currentPage === 'home' ? (
        <>
          <HeroSection />
          <AboutSection />
          <AdvantagesSection />
          <MarketDataSection />
          <OfferingsSection />
          <PricingProfitSection />
          <RevenueSection />
          <StepsSection />
          <Footer />
        </>
      ) : (
        <>
          <PrivacyPolicy />
          <Footer />
        </>
      )}
    </div>
  )
}
