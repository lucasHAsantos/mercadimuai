import { useState, useEffect, useCallback } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { HeroSection } from './components/HeroSection'
import { MarketDataSection } from './components/MarketDataSection'
import { VideoSection } from './components/VideoSection'
import { AdvantagesSection } from './components/AdvantagesSection'
import { LicensingSection } from './components/LicensingSection'
import { StepsSection } from './components/StepsSection'
import { LeadFormSection } from './components/LeadFormSection'
import { SiteLinksSection } from './components/SiteLinksSection'
import { Footer } from './components/Footer'
import { PrivacyPolicy } from './components/PrivacyPolicy'
import { ContactModal, type ModalType } from './components/ContactModal'

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy'>('home')
  const [modalType, setModalType] = useState<ModalType | null>(null)

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

  const openModal = useCallback((type: ModalType) => setModalType(type), [])
  const closeModal = useCallback(() => setModalType(null), [])

  return (
    <HelmetProvider>
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white overflow-x-hidden">
      <Helmet>
        <title>MercadimUai - Mercado Autônomo 24H</title>
        <meta name="description" content="MercadimUai: franquia de mercado autônomo 24h. Invista no seu próprio mercado sem funcionários, com gestão digital e retorno garantido." />
        <link rel="canonical" href="https://mercadimuai.com.br/" />
      </Helmet>
      {currentPage === 'home' ? (
        <>
          <HeroSection onOpenModal={openModal} />
          <MarketDataSection onOpenModal={openModal} />
          <VideoSection />
          <AdvantagesSection />
          <LicensingSection onOpenModal={openModal} />
          <StepsSection />
          <LeadFormSection />
          <SiteLinksSection onOpenModal={openModal} />
          <Footer />
        </>
      ) : (
        <>
          <PrivacyPolicy />
          <Footer />
        </>
      )}

      {modalType && <ContactModal type={modalType} onClose={closeModal} />}
    </div>
    </HelmetProvider>
  )
}
