import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#2c3e50', color: 'white' }}>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
      </div>
    </nav>
  );
}
