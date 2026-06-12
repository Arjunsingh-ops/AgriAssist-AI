import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#2c3e50' }}>About Us</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
          AgriAssist AI helps farmers access quick crop guidance.
        </p>
      </section>
      <Footer />
    </div>
  );
}
