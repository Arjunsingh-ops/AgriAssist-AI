import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div>
      <Navbar />
      <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#2c3e50' }}>Login</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
          Sign in to access personalized features.
        </p>
      </section>
      <Footer />
    </div>
  );
}
