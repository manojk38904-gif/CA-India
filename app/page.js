'use client';

export default function Home() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello, I want to join NGO training");

    // पहले सीधे WhatsApp app खोलने की कोशिश
    window.location.href = `whatsapp://send?phone=919129861259&text=${message}`;

    // अगर app protocol काम न करे, तो fallback
    setTimeout(() => {
      window.location.href = `https://wa.me/919129861259?text=${message}`;
    }, 1200);
  };

  const programs = [
    {
      title: 'Water Conservation & Watershed',
      desc: 'Integrated watershed development and climate resilience.',
      icon: '💧',
    },
    {
      title: 'Livelihood & Skill Development',
      desc: 'Training, enterprise promotion and youth skilling.',
      icon: '🌾',
    },
    {
      title: 'Farmer Producer Organizations',
      desc: 'FPO promotion and agri-business development.',
      icon: '🚜',
    },
    {
      title: 'Women & Community Leadership',
      desc: 'Women empowerment and SHG strengthening.',
      icon: '👩‍🌾',
    },
  ];

  const impact = [
    { value: '5000+', label: 'Farmers Reached' },
    { value: '100+', label: 'Villages Covered' },
    { value: '10+', label: 'Projects' },
    { value: '1000+', label: 'Trainees' },
  ];

  return (
    <div style={{ fontFamily: 'Arial', background: '#f8fafc' }}>
      <header style={{ padding: 20, background: 'white', position: 'sticky', top: 0 }}>
        <b>Collective Action India</b>
      </header>

      <section style={{ padding: 40, background: '#0f172a', color: 'white' }}>
        <h1>Empowering Rural Communities</h1>

        <div style={{ marginTop: 20 }}>
          <button
            onClick={handleWhatsApp}
            style={{
              padding: 12,
              background: 'white',
              borderRadius: 10,
              cursor: 'pointer',
              fontWeight: 700,
              border: 'none',
            }}
          >
            Join WhatsApp
          </button>
        </div>
      </section>

      <section style={{ padding: 40 }}>
        <h2>Programs</h2>
        {programs.map((p) => (
          <div key={p.title} style={{ marginTop: 10 }}>
            {p.icon} {p.title}
          </div>
        ))}
      </section>

      <section style={{ padding: 40 }}>
        <h2>Impact</h2>
        {impact.map((i) => (
          <div key={i.label}>
            {i.value} - {i.label}
          </div>
        ))}
      </section>

      <section style={{ padding: 40 }}>
        <h2>Contact</h2>

        <button
          onClick={handleWhatsApp}
          style={{
            padding: 12,
            background: '#16a34a',
            color: 'white',
            borderRadius: 10,
            cursor: 'pointer',
            fontWeight: 700,
            border: 'none',
          }}
        >
          WhatsApp Now
        </button>
      </section>

      <footer style={{ padding: 20, background: '#020617', color: 'white' }}>
        © 2026 Collective Action India
      </footer>

      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 999,
        }}
      >
        <button
          onClick={handleWhatsApp}
          style={{
            background: '#25D366',
            color: 'white',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            fontSize: '24px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
          }}
        >
          💬
        </button>
      </div>
    </div>
  );
}
