import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProcessSteps from '../components/ProcessSteps';
import InternalLinks from '../components/InternalLinks';
import ValueProps from '../components/ValueProps';
import MiniFAQ from '../components/MiniFAQ';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import FABSpeedDial from '../components/FABSpeedDial';
import Footer from '../components/Footer'; // ✅ added

const Main = () => (
  <>
    <Navbar />
    <HeroSection />
    <ProcessSteps />
    <InternalLinks />
    <ValueProps />
    <MiniFAQ />
    <Stats />
    <Testimonials />
    <CallToAction />
    <FABSpeedDial />
    <Footer /> {/* ✅ added here */}
  </>
);

export default Main;
