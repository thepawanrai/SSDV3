/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PaymentModal } from './components/PaymentModal';
import { Lightbox } from './components/Lightbox';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ScrollToTop } from './components/ScrollToTop';
import { BackgroundAudioPlayer } from './components/BackgroundAudioPlayer';
import { LanguageProvider } from './context/LanguageContext';
import { AudioProvider } from './context/AudioContext';

// Main Institutional Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { SevaView } from './views/SevaView';
import { TempleView } from './views/TempleView';
import { GaushalaView } from './views/GaushalaView';
import { GurukulView } from './views/GurukulView';
import { TreePlantationView } from './views/TreePlantationView';
import { CampaignsView } from './views/CampaignsView';
import { MahabhiyanView } from './views/MahabhiyanView';
import { EventsView } from './views/EventsView';
import { GalleryView } from './views/GalleryView';
import { MembershipView } from './views/MembershipView';
import { ContactView } from './views/ContactView';

// Dedicated Separate Pages for the 6 Abhiyans
import { GauSevaAbhiyanView } from './views/abhiyan/GauSevaAbhiyanView';
import { MandirNirmanAbhiyanView } from './views/abhiyan/MandirNirmanAbhiyanView';
import { AnnadaanAbhiyanView } from './views/abhiyan/AnnadaanAbhiyanView';
import { GurukulAbhiyanView } from './views/abhiyan/GurukulAbhiyanView';
import { NashaMuktiAbhiyanView } from './views/abhiyan/NashaMuktiAbhiyanView';

// Dedicated Separate Pages
import { SevaDetailPage } from './pages/SevaDetailPage';
import { DonatePage } from './pages/DonatePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

function AppLayout() {
  const navigate = useNavigate();

  // Payment Modal State
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [donateSevaId, setDonateSevaId] = useState<string | undefined>(undefined);
  const [donateAmount, setDonateAmount] = useState<number | undefined>(undefined);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState({
    src: '',
    alt: '',
    title: '',
    desc: '',
  });

  const handleNavigate = (tab: string) => {
    navigate(tab === 'home' ? '/' : `/${tab}`);
  };

  const handleOpenDonate = (sevaId?: string, amount?: number) => {
    setDonateSevaId(sevaId);
    setDonateAmount(amount);
    setPaymentModalOpen(true);
  };

  const handleOpenLightbox = (
    src: string,
    alt: string,
    title?: string,
    desc?: string
  ) => {
    setLightboxData({
      src,
      alt,
      title: title || alt,
      desc: desc || '',
    });
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B] selection:bg-[#5B2A1B] selection:text-white">
      {/* Scroll restoration on route change */}
      <ScrollToTop />

      {/* Global Sticky Header */}
      <Header onOpenDonate={() => handleOpenDonate()} />

      {/* Multi-Page Routes */}
      <main className="flex-1 pb-32 md:pb-0">
        <Routes>
          <Route
            path="/"
            element={
              <HomeView
                onNavigate={handleNavigate}
                onOpenDonate={handleOpenDonate}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutView
                onNavigate={handleNavigate}
                onOpenDonate={() => handleOpenDonate()}
              />
            }
          />
          <Route
            path="/seva"
            element={<SevaView onOpenDonate={handleOpenDonate} />}
          />
          <Route path="/seva/:sevaId" element={<SevaDetailPage />} />
          <Route
            path="/temple"
            element={
              <TempleView
                onOpenDonate={handleOpenDonate}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/gaushala"
            element={<GaushalaView onOpenDonate={handleOpenDonate} />}
          />
          <Route
            path="/gurukul"
            element={<GurukulView onOpenDonate={handleOpenDonate} />}
          />

          {/* Mahabhiyan Master Page */}
          <Route
            path="/mahabhiyan"
            element={
              <MahabhiyanView
                onNavigate={handleNavigate}
                onOpenDonate={handleOpenDonate}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/campaigns"
            element={
              <MahabhiyanView
                onNavigate={handleNavigate}
                onOpenDonate={handleOpenDonate}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />

          {/* 1. वृक्षारोपण महाअभियान */}
          <Route
            path="/tree-plantation"
            element={
              <TreePlantationView
                onOpenDonate={handleOpenDonate}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/mahabhiyan/vriksharopan"
            element={
              <TreePlantationView
                onOpenDonate={handleOpenDonate}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />

          {/* 2. गौ सेवा महाअभियान */}
          <Route
            path="/mahabhiyan/gau-seva"
            element={<GauSevaAbhiyanView onOpenDonate={handleOpenDonate} />}
          />
          <Route
            path="/gau-seva-abhiyan"
            element={<GauSevaAbhiyanView onOpenDonate={handleOpenDonate} />}
          />

          {/* 3. मंदिर निर्माण अभियान */}
          <Route
            path="/mahabhiyan/mandir-nirman"
            element={
              <MandirNirmanAbhiyanView
                onOpenDonate={handleOpenDonate}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/mandir-nirman-abhiyan"
            element={
              <MandirNirmanAbhiyanView
                onOpenDonate={handleOpenDonate}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />

          {/* 4. अन्नदान महाअभियान */}
          <Route
            path="/mahabhiyan/annadaan"
            element={<AnnadaanAbhiyanView onOpenDonate={handleOpenDonate} />}
          />
          <Route
            path="/annadaan-abhiyan"
            element={<AnnadaanAbhiyanView onOpenDonate={handleOpenDonate} />}
          />

          {/* 5. गुरुकुल अभियान */}
          <Route
            path="/mahabhiyan/gurukul"
            element={<GurukulAbhiyanView onOpenDonate={handleOpenDonate} />}
          />
          <Route
            path="/gurukul-abhiyan"
            element={<GurukulAbhiyanView onOpenDonate={handleOpenDonate} />}
          />

          {/* 6. नशा मुक्ति अभियान */}
          <Route
            path="/mahabhiyan/nasha-mukti"
            element={<NashaMuktiAbhiyanView onOpenDonate={handleOpenDonate} />}
          />
          <Route
            path="/nasha-mukti-abhiyan"
            element={<NashaMuktiAbhiyanView onOpenDonate={handleOpenDonate} />}
          />

          {/* Events & Gallery */}
          <Route
            path="/events"
            element={
              <EventsView
                onNavigate={handleNavigate}
                onOpenDonate={handleOpenDonate}
              />
            }
          />
          <Route
            path="/gallery"
            element={<GalleryView onOpenLightbox={handleOpenLightbox} />}
          />

          {/* Membership Page */}
          <Route
            path="/membership"
            element={<MembershipView onOpenDonate={handleOpenDonate} />}
          />

          {/* Other Static Pages */}
          <Route path="/contact" element={<ContactView />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar onOpenDonate={() => handleOpenDonate()} />

      {/* Universal Quick Donation Modal */}
      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        preselectedSevaId={donateSevaId}
        preselectedAmount={donateAmount}
      />

      {/* Universal Image Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={lightboxData.src}
        imageAlt={lightboxData.alt}
        title={lightboxData.title}
        description={lightboxData.desc}
      />

      {/* Background Audio Player with Autoplay & Floating Bottom-Right Toggle */}
      <BackgroundAudioPlayer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AudioProvider>
        <LanguageProvider>
          <AppLayout />
        </LanguageProvider>
      </AudioProvider>
    </BrowserRouter>
  );
}
