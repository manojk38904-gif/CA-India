'use client';

export default function Home() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello, I want to join NGO training");
    window.open(`https://wa.me/919129861259?text=${message}`, '_blank');
  };

  return (
    <div style={{ fontFamily: 'Arial', background: '#f8fafc' }}>
      
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        background: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.png" width={50} alt="Collective Action India Logo" />
          <div>
            <div style={{ fontWeight: 'bold', fontSize: 24 }}>Collective Action India</div>
            <div style={{ fontSize: 14, color: '#475569' }}>
              Rural Development • NGO Systems • Livelihoods • Water • Impact
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#impact">Impact</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      <section style={{
        backgroundImage: 'url(/banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 100,
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          background: 'rgba(0,0,0,0.45)',
          padding: 30,
          borderRadius: 20,
          maxWidth: 900,
          margin: '0 auto'
        }}>
          <h1 style={{ fontSize: 48, marginBottom: 10 }}>
            Empowering Rural Communities
          </h1>
          <p style={{ fontSize: 20 }}>
            Driving sustainable development across India
          </p>

          <button
            onClick={handleWhatsApp}
            style={{
              marginTop: 20,
              padding: 15,
              background: '#25D366',
              border: 'none',
              borderRadius: 10,
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Join WhatsApp
          </button>
        </div>
      </section>

      <section id="about" style={{ padding: 50 }}>
        <h2>About Us</h2>
        <p>
          Collective Action India works on watershed development, livelihood promotion,
          skill development, institutional strengthening, and empowering rural communities.
        </p>
      </section>

      <section id="services" style={{ padding: 50, background: '#eef2ff' }}>
        <h2>Our Services</h2>
        <ul>
          <li>Water Conservation & Watershed</li>
          <li>Livelihood & Skill Development</li>
          <li>FPO & Agri Business</li>
          <li>Women Empowerment</li>
        </ul>
      </section>

      <section id="impact" style={{ padding: 50 }}>
        <h2>Impact</h2>
        <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap' }}>
          <div>5000+ Farmers</div>
          <div>100+ Villages</div>
          <div>10+ Projects</div>
          <div>1000+ Trainees</div>
        </div>
      </section>

      <section id="contact" style={{ padding: 50, background: '#eef2ff' }}>
        <h2>Contact Us</h2>

        <button
          onClick={handleWhatsApp}
          style={{
            padding: 15,
            background: '#16a34a',
            color: 'white',
            border: 'none',
            borderRadius: 10,
            cursor: 'pointer'
          }}
        >
          Contact on WhatsApp
        </button>

        <div style={{ marginTop: 20 }}>
          <p>Email: info@cai.org</p>
          <p>Phone: +91 9129861259</p>
        </div>
      </section>

      <footer style={{
        padding: 30,
        background: '#020617',
        color: 'white',
        textAlign: 'center'
      }}>
        <p>© 2026 Collective Action India</p>

        <div style={{ marginTop: 10 }}>
          <a href="#" style={{ margin: 10, color: 'white' }}>Facebook</a>
          <a href="#" style={{ margin: 10, color: 'white' }}>Instagram</a>
          <a href="#" style={{ margin: 10, color: 'white' }}>LinkedIn</a>
        </div>
      </footer>

      <button
        onClick={handleWhatsApp}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: '#25D366',
          color: 'white',
          fontSize: 24,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(0,0,0,0.25)'
        }}
      >
        💬
      </button>

    </div>
  );
}
