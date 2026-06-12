import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card title="Crop Disease Help" />
        <Card title="Pest Management" />
      </div>
      <Footer />
    </div>
  );
}
