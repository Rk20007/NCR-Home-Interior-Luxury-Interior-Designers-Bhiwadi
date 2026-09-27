import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TownshipSpotlight } from './components/TownshipSpotlight';
import { PortfolioGallery } from './components/PortfolioGallery';
import { CostEstimator } from './components/CostEstimator';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { VirtualStudio } from './components/VirtualStudio';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingActions } from './components/FloatingActions';
import { ProjectItem, ServiceItem } from './data/businessData';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('');

  const openConsultation = (topic = '') => {
    setModalTopic(topic);
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  const handleInquireProject = (project: ProjectItem) => {
    openConsultation(`Inquiry for design similar to ${project.title} (${project.society}, Bhiwadi)`);
  };

  const handleSelectService = (service: ServiceItem) => {
    openConsultation(`Consultation for ${service.title}`);
  };

  const handleSelectTownship = (townshipName: string) => {
    openConsultation(`Floor plan consultation for apartment in ${townshipName}, Bhiwadi`);
  };

  const handleBookStyle = (styleName: string) => {
    openConsultation(`3D design concept in ${styleName}`);
  };

  const scrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0e11] text-[#ede8e1] flex flex-col selection:bg-[#c5a880] selection:text-[#0d0e11]">
      {/* Navigation */}
      <Navbar
        onOpenConsultation={() => openConsultation('General Interior Consultation')}
        onOpenEstimator={scrollToEstimator}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={() => openConsultation('Site Visit & 3D Plan Request')}
          onOpenEstimator={scrollToEstimator}
        />

        {/* 2. Bhiwadi Townships Spotlight (Ashiana, Omaxe, Nimai, Krish, Terra) */}
        <TownshipSpotlight onSelectTownship={handleSelectTownship} />

        {/* 3. Curated Real Portfolio Gallery */}
        <PortfolioGallery onInquireProject={handleInquireProject} />

        {/* 4. Interactive Cost Estimator & WhatsApp Quote Generator */}
        <CostEstimator
          onOpenBookingWithEstimate={(estimateDetails) =>
            openConsultation(`Lock Estimate Price: ${estimateDetails}`)
          }
        />

        {/* 5. Before & After Slider */}
        <BeforeAfterSlider />

        {/* 6. Virtual Studio & Material Moodboard */}
        <VirtualStudio onBookStyle={handleBookStyle} />

        {/* 7. Comprehensive Services Breakdown */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 8. 5-Stage Turnkey Process & Factory Engineering */}
        <ProcessSection
          onOpenConsultation={() => openConsultation('Turnkey Execution Site Visit')}
        />

        {/* 9. Verified Google Maps & Justdial Reviews */}
        <ReviewsSection />

        {/* 10. Studio Locations, Map & Detailed Booking Form */}
        <LocationContact initialPreFill={modalTopic} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Buttons */}
      <FloatingActions
        onOpenConsultation={() => openConsultation('Quick Site Visit Request')}
        onOpenEstimator={scrollToEstimator}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={closeConsultation}
        defaultTopic={modalTopic}
      />
    </div>
  );
}
