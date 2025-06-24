
import BrokersSection from '../components/BrokerSection';
// import Chart from '../components/Chart';
import ContactUs from '../components/ContactUs';
import Faq from '../components/Faq';
import FeatureSection from '../components/FeatureSection';
import FeatureShowcase from '../components/FeatureShowcase';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Performance from '../components/Performance';
import PricingSection from '../components/PricingSection';
import ProfitLoss from '../components/ProfitLoss';
import Trader from '../components/Trader';
// import WhatsAppButton from '../components/WhatsappButton';
import WhyChooseUs from '../components/WhyChooseUs';
import Heroes from './Heroes';

const Home = () => {
  return (
    <>
    <Navbar  />
    <div className='min-h-screen overflow-x-hidden text-white bg-[#101014] '>
      <Heroes />

      <div className="bg-[#101014]">
      {/* <Chart /> */}
      <Performance/>
      <ProfitLoss />
      <Trader/>
      <FeatureShowcase />
      <BrokersSection />
      <WhyChooseUs />
      <PricingSection/>
      <FeatureSection />
      <Faq/>
      <ContactUs/>
      <Footer/>
      {/* <WhatsAppButton/> */}
      </div>
    </div>
    </>
  );
};

export default Home;
