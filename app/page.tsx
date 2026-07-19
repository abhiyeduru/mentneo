'use client'

import { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import LoadingScreen from '@/components/layout/LoadingScreen'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import CommandMenu from '@/components/ui/CommandMenu'

// Critical above-the-fold — loaded eagerly
import HeroSection from '@/components/home/HeroSection'
import MarqueeSection from '@/components/home/MarqueeSection'
import StatsSection from '@/components/home/StatsSection'

// Below-the-fold — lazy loaded for LCP/TTI improvement
const AboutSection       = dynamic(() => import('@/components/home/AboutSection'), { ssr: false })
const ResearchSection    = dynamic(() => import('@/components/home/ResearchSection'), { ssr: false })
const ProductsSection    = dynamic(() => import('@/components/home/ProductsSection'), { ssr: false })
const EnterpriseSection  = dynamic(() => import('@/components/home/EnterpriseSection'), { ssr: false })
const DeveloperSection   = dynamic(() => import('@/components/home/DeveloperSection'), { ssr: false })
const ModelsSection      = dynamic(() => import('@/components/home/ModelsSection'), { ssr: false })
const PublicationsSection = dynamic(() => import('@/components/home/PublicationsSection'), { ssr: false })
const LabsSection        = dynamic(() => import('@/components/home/LabsSection'), { ssr: false })
const EducationSection   = dynamic(() => import('@/components/home/EducationSection'), { ssr: false })
const TimelineSection    = dynamic(() => import('@/components/home/TimelineSection'), { ssr: false })
const TeamSection        = dynamic(() => import('@/components/home/TeamSection'), { ssr: false })
const BlogSection        = dynamic(() => import('@/components/home/BlogSection'), { ssr: false })
const ContactSection     = dynamic(() => import('@/components/home/ContactSection'), { ssr: false })
const CTASection         = dynamic(() => import('@/components/home/CTASection'), { ssr: false })

/** Lightweight skeleton placeholder for deferred sections */
function SectionSkeleton() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '60px',
        background: 'transparent',
      }}
    />
  )
}

export default function HomePage() {
  const [commandOpen, setCommandOpen] = useState(false)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      {commandOpen && <CommandMenu />}
      <Navbar onCommandOpen={() => setCommandOpen(prev => !prev)} />

      <main id="main-content">
        {/* Above-fold — critical path */}
        <HeroSection />
        <MarqueeSection />
        <StatsSection />

        {/* Below-fold — lazy loaded with Suspense */}
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ResearchSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ProductsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <EnterpriseSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <DeveloperSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ModelsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <PublicationsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <LabsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <EducationSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <TimelineSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <TeamSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <BlogSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CTASection />
        </Suspense>
      </main>

      <Footer />
    </>
  )
}
