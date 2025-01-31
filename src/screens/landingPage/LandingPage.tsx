import Footer from '@/components/landingpage/Footer';
import ForeignAccount from '@/components/landingpage/ForeignAccount';
import GetPaidFast from '@/components/landingpage/GetPaidFast';
import Header from '@/components/landingpage/Header';
import Nav from '@/components/landingpage/Nav';
import Nolimts from '@/components/landingpage/Nolimts';
import Stats from '@/components/landingpage/Stats';

function LandingPage() {
  return (
    <div className="">
      <Nav />
      <Header />
      <Stats />
      <Nolimts />
      <ForeignAccount />
      <GetPaidFast />
      <Footer />
    </div>
  );
}

export default LandingPage;
