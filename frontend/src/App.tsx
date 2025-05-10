import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'

// Layout components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'

// Context Providers
import { AuthProvider } from './contexts/AuthContext'

// Lazy-loaded pages
const Dashboard = lazy(() => import('./pages/Dashboard'))
const ServiceDetailsPage = lazy(() => import('./pages/ServiceDetailsPage'))
const ProviderProfilePage = lazy(() => import('./pages/ProviderProfilePage'))
const BookingPage = lazy(() => import('./pages/BookingPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const CookiesPage = lazy(() => import('./pages/CookiesPage'))

// Loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
)

function App() {
  // Effect to scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              {/* Services routes */}
              <Route path="/services" element={
                <Suspense fallback={<LoadingFallback />}>
                  <ServicesPage />
                </Suspense>
              } />
              <Route path="/services/:id" element={
                <Suspense fallback={<LoadingFallback />}>
                  <ServiceDetailsPage />
                </Suspense>
              } />
              
              {/* Informational pages */}
              <Route path="/how-it-works" element={
                <Suspense fallback={<LoadingFallback />}>
                  <HowItWorksPage />
                </Suspense>
              } />
              <Route path="/about" element={
                <Suspense fallback={<LoadingFallback />}>
                  <AboutPage />
                </Suspense>
              } />
              <Route path="/contact" element={
                <Suspense fallback={<LoadingFallback />}>
                  <ContactPage />
                </Suspense>
              } />
              <Route path="/pricing" element={
                <Suspense fallback={<LoadingFallback />}>
                  <PricingPage />
                </Suspense>
              } />
              <Route path="/faq" element={
                <Suspense fallback={<LoadingFallback />}>
                  <FaqPage />
                </Suspense>
              } />
              
              {/* Legal pages */}
              <Route path="/terms" element={
                <Suspense fallback={<LoadingFallback />}>
                  <TermsPage />
                </Suspense>
              } />
              <Route path="/privacy" element={
                <Suspense fallback={<LoadingFallback />}>
                  <PrivacyPage />
                </Suspense>
              } />
              <Route path="/cookies" element={
                <Suspense fallback={<LoadingFallback />}>
                  <CookiesPage />
                </Suspense>
              } />
              
              {/* Provider pages */}
              <Route path="/providers/:id" element={
                <Suspense fallback={<LoadingFallback />}>
                  <ProviderProfilePage />
                </Suspense>
              } />
              <Route path="/booking/:serviceId" element={
                <Suspense fallback={<LoadingFallback />}>
                  <BookingPage />
                </Suspense>
              } />
              
              {/* Dashboard routes */}
              <Route path="/dashboard/*" element={
                <Suspense fallback={<LoadingFallback />}>
                  <Dashboard />
                </Suspense>
              } />
              
              {/* 404 route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
